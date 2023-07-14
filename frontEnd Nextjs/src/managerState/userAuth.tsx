import { create } from "zustand";
import axios from "axios";
import { devtools } from "zustand/middleware";
import { persist, createJSONStorage } from "zustand/middleware";
import router from "next/router";

const URL_ENV = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:9000";
interface isLogin {
  email: string;
  password: string;
}
export const userAuth = create(
  devtools(
    persist(
      (set) => {
        let loginData: any = null;

        return {
          auth: null,

          login: async ({ email, password }: isLogin) => {
            try {
              const loginUser = await axios.post(`${URL_ENV}/customer/login`, {
                email: email,
                password: password,
              });
              if (!loginUser) {
                console.log("failure");
              }
              console.log("tk: ", loginUser);
              window.localStorage.setItem("token", loginUser.data.token);
              window.localStorage.setItem(
                "refreshToken",
                loginUser.data.refreshToken
              );
              set({ auth: loginUser.data }, false, {
                type: "auth/login-success",
              });
              if (loginUser.data.payload._id) {
                router.push("/");
              }
            } catch (err) {
              console.log("looix");
              set(
                (state: any) => {
                  auth: null;
                },
                false,
                { type: "auth/login-error" }
              );
            }
          },

          logout: () => {
            localStorage.clear();
            loginData = null;
            return set({ auth: null }, false, { type: "auth/logout-success" });
          },
        };
      },
      {
        name: "shopWeb-storage",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
