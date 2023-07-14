"use client";
import axios from "axios";
// import { API_URL } from "../constants/URLS";
// API_URL = "http://localhost:9000";
const axiosClient = axios.create({
  baseURL: "http://localhost:9000",
  headers: {
    "Content-Type": "application/json",
  },
});
// trong interceptors có 2 loại, một là request, 2 là response
//Request interceptors: Được sử dụng để can thiệp vào quá trình gửi yêu cầu. Bạn có thể đăng ký nhiều interceptor trước khi yêu cầu được gửi đi.
//Response interceptors: Được sử dụng để can thiệp vào quá trình nhận phản hồi từ máy chủ. Bạn có thể đăng ký nhiều interceptor sau khi nhận được phản hồi.

//có cái này ta không phải thêm passport.authenticate("jwt", { session: false }), ở các method này ở các router

//interceptors đây là middleware, tất cả các resonse đều qua interceptors

//qua page employee thì nó call api nên nó phải có interceptors.request, trước khi bên employee request thì nó chui vào hàm này
// REQUEST

// Request interceptor
axiosClient.interceptors.request.use(
  //lục token trong localstorage ra, kiểm tra
  //Nếu có, chúng ta thêm token vào header Authorization trong config. Sau đó, chúng ta trả về config. Nếu có lỗi,
  // chúng ta sẽ sử dụng Promise.reject(error) để trả về lỗi đó.
  (config) => {
    console.log("run");
    // Kiểm tra nếu đang chạy trên phía client (trình duyệt)
    if (typeof window !== "undefined") {
      const token = window.localStorage.getItem("token");
      // console.log("zzzz: ", token);
      if (token) {
        config.headers["Authorization"] = "Bearer " + token;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// RESPONSE

axiosClient.interceptors.response.use(
  async (response) => {
    const { token, refreshToken } = response.data;
    console.log("dataToken: ", response.data);
    // LOGIN
    //lưu token vào localStorage
    if (token) {
      window.localStorage.setItem("token", token);
    }
    //lưu refreshToken vào localStorage
    if (refreshToken) {
      window.localStorage.setItem("refreshToken", refreshToken);
    }

    return response;
  },
  //trong trường hợp có lỗi
  async (error) => {
    if (error?.response?.status !== 401) {
      return Promise.reject(error);
    }

    const originalConfig = error.config;

    if (error?.response?.status === 401 && !originalConfig.sent) {
      console.log("Error 🚀", error);
      originalConfig.sent = true;
      try {
        // Trường hợp không có token thì chuyển sang trang LOGIN
        if (typeof window !== "undefined") {
          const token = window.localStorage.getItem("token");
          if (!token) {
            window.location.href = "/login";
            return Promise.reject(error);
          }

          const refreshToken = window.localStorage.getItem("refreshToken");
          if (refreshToken) {
            const response = await axiosClient.post("/customer/refresh-token", {
              refreshToken: refreshToken,
            });

            const { token } = response.data;
            window.localStorage.setItem("token", token);

            originalConfig.headers = {
              ...originalConfig.headers,
              authorization: `Bearer ${token}`,
            };

            return axiosClient(originalConfig);
          } else {
            return Promise.reject(error);
          }
        }
      } catch (err) {
        return Promise.reject(err);
      }
    }
  }
);

export { axiosClient };
