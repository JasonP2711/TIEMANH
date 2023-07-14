import axios from "axios";
import Image from "next/image";
import styles from "./page.module.css";

import BannerImg from "../picture/home-banner-background.png";
import anh1 from "../picture/tao-dang-chup-anh-ky-yeu-doi-yody-vn.webp";
import anh2 from "..//picture/chup-anh-ky-yeu-tai-SON-LA-9-1536x1024.jpg";
import anh3 from "..//picture/KFC-3861-1639018052.jpg";
import anh4 from "..//picture/Phong-cách-chụp-ảnh-vintage-10-768x511.jpg";
import anh5 from "../picture/chup-anh-ky-yeu-tai-SON-LA-1-17-scaled.jpg";

import Brand from "../components/brand/page";
import Slider from "../components/slider/page";
import CardMember from "../components/CardMember/page";
import {
  FaCameraRetro,
  FaAward,
  FaMoneyCheckAlt,
  FaSun,
  FaTicketAlt,
  FaUserFriends,
  FaCut,
  FaHandsHelping,
} from "react-icons/fa";
const profile = [
  {
    name: "jason",
    position: "photographer",
  },
  {
    name: "Jane",
    position: "Maketing",
  },
  {
    name: "Jane",
    position: "Designer",
  },
  {
    name: "Bob",
    position: "Designer",
  },
];

type Props = {
  data: any;
  staff: any;
};

export default function Home({ data, staff }: Props) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.bg_1}>
          <Image
            src={BannerImg}
            alt="My Image"
            width={500}
            height={300}
            style={{ width: "500", height: "300" }}
            className={styles.obj__img}
          />
        </div>
        <div className={styles.title}>
          <span className={styles.title1}>Welcome to TiệmẢnh studio</span>
        </div>
        {/* <div className={styles.splash}></div> */}
        <div className={styles.img}></div>

        <div className={styles.slider}>
          <Slider Slidedata={data} />
        </div>

        <div className={styles.cloud}></div>
        <div className={styles.title__2}>
          <p style={{ width: "70%", textAlign: "center" }}>
            Luôn luôn lắng nghe sự góp ý của quý khách để tự hoàn thiện mình,
            luôn tìm tòi và học hỏi thêm kinh nghiệm để sáng tạo ra những góc
            chụp đẹp
          </p>
        </div>
        <h2 className={styles.title__team}>Team</h2>
        <div className={styles.card__member}>
          <CardMember data={staff?.result} />
        </div>
        <div className={styles.element}>
          <ul className={styles.list__element}>
            <li>
              <div style={{ display: "flex" }}>
                <FaCameraRetro className={styles.icon__style} />
                <h3>MÁY MÓC - THIẾT BỊ</h3>
              </div>
              <span>
                Tất cả các trang thiết bị tân tiến được sử dụng, bảo quản theo
                tiêu chuẩn
              </span>
            </li>
            <li>
              <div style={{ display: "flex" }}>
                <FaCut className={styles.icon__style} />
                <h3>CHỈNH SỬA CHUYÊN NGHIỆP</h3>{" "}
              </div>

              <span>
                Được edit bởi đội ngũ chuyên nghiệp và có tính sáng tạo cao
              </span>
            </li>
            <li>
              <div style={{ display: "flex" }}>
                <FaUserFriends className={styles.icon__style} />
                <h3>ĐỘI NGŨ GIÀU KINH NGHIỆM</h3>{" "}
              </div>
              <span>
                Nhân viên được đào tạo bài bài để có được những sản phẩm ưng ý
                nhất dành cho khách hàng, phục vụ khách hàng tận tình, thân
                thiện
              </span>
            </li>
            <li>
              <div style={{ display: "flex" }}>
                <FaSun className={styles.icon__style} />
                <h3>CHẤT LƯỢNG HÌNH ẢNH CAO</h3>{" "}
              </div>

              <span>Đáp ứng nhu cầu của khách hàng</span>
            </li>
          </ul>
          <ul
            className={styles.list__element}
            style={{
              listStyle: "none",
              display: "flex",
              justifyContent: "center",
              paddingTop: "3%",
            }}
          >
            <li>
              <div style={{ display: "flex" }}>
                <FaAward className={styles.icon__style} />
                <h3>CÁC CHỨNG NHẬN UY TÍN</h3>
              </div>
              <span>
                Đạt được nhiều chứng chỉ uy tính trong giới nghệ thuật nhiếp ảnh
              </span>
            </li>
            <li>
              <div style={{ display: "flex" }}>
                <FaTicketAlt className={styles.icon__style} />
                <h3>KHUYẾN MÃI HẤP DẪN</h3>{" "}
              </div>
              <span>Nhiều ưu đãi hấp dẫn khi đăng ký</span>
            </li>
            <li>
              <div style={{ display: "flex" }}>
                <FaMoneyCheckAlt className={styles.icon__style} />
                <h3>THANH TOÁN THÔNG MINH </h3>
              </div>
              <span>Hỗ trợ các phương thức thanh toán điện tử</span>
            </li>
            <li>
              <div style={{ display: "flex" }}>
                <FaHandsHelping className={styles.icon__style} />
                <h3>TƯ VẤN - CSKH TẬN TÌNH</h3>
              </div>
              <span>Hỗ trợ nhiệt huyết - tận tình - thân thiện</span>
            </li>
          </ul>
        </div>
        <div>
          <Image
            src={BannerImg}
            alt="My Image"
            width={500}
            height={300}
            style={{ width: "500", height: "300" }}
            className={styles.obj__img2}
          />
        </div>
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          ALBUM ĐƯỢC YÊU THÍCH
        </h1>
        <div
          // style={{
          //   display: "flex",
          //   padding: "50px 80px",
          //   position: "relative",
          // }}
          className={styles.main__content1}
        >
          <span className={styles.content__1}>
            <h3>Concept Thanh Xuân Vườn Trường</h3>
            Với đội ngũ nhiếp ảnh chuyên nghiệp và kinh nghiệm, chúng tôi cam
            kết mang đến chất lượng chụp ảnh tốt nhất. Chúng tôi tạo ra những
            bức ảnh sáng tạo, tinh tế và chân thực, ghi lại những cảm xúc và nét
            đẹp tự nhiên. Chất lượng chụp ảnh không chỉ nằm ở việc sắp xếp khung
            cảnh và ánh sáng hoàn hảo, mà còn tại việc thấu hiểu và tạo cảm hứng
            từ cá nhân, từng cá thể và nhóm. Chúng tôi đặt tâm huyết và chăm sóc
            vào từng chi tiết, từ trang phục cho đến cách thức biểu cảm, nhằm
            tạo ra những bức ảnh thể hiện cá tính và tâm hồn của khách hàng.
            Chúng tôi tự hào được là một phần trong kỷ yếu học sinh, mang đến
            những bức ảnh đẹp và ý nghĩa để lưu giữ những kỷ niệm thanh xuân
            vĩnh viễn. Hãy để chúng tôi ghi lại khoảnh khắc đáng nhớ của bạn, để
            bạn có thể tự hào chia sẻ và ghi nhớ những ngày tháng đáng nhớ của
            thanh xuân.
          </span>
          <div className={styles.background__Img}>
            <Image
              src={anh1}
              alt="My Image"
              width={270}
              height={250}
              style={{
                paddingTop: "13%",
                paddingLeft: "5%",
                border: "1px solid",
                borderRadius: "80% 81% 40% 35%",
                zIndex: "-10",
              }}
            />
            <Image
              src={anh2}
              alt="My Image"
              width={270}
              height={200}
              style={{
                padding: "2% 0%",
                border: "1px solid",
                borderRadius: "30% 48% 25% 35%",
                zIndex: "-10",
              }}
            />
          </div>
        </div>
        {/* //////////////////////////////// */}
        <div className={styles.main__content2}>
          <div className={styles.background__Img2}>
            <Image
              src={anh3}
              alt="My Image"
              width={320}
              height={250}
              style={{
                paddingTop: "12%",
                paddingLeft: "15%",
                border: "1px solid",
                borderRadius: "80% 81% 40% 35%",
                zIndex: "-10",
              }}
            />
          </div>
          <span className={styles.content__2}>
            <h3>Concept Cổ Phục</h3>
            Dịch vụ chụp ảnh phong cách cổ trang của chúng tôi mang đến một hành
            trình về quá khứ, nơi bạn có thể sống lại những thời kỳ lịch sử đầy
            màu sắc và quyến rũ. Chất lượng chụp ảnh của chúng tôi không chỉ nằm
            ở việc tạo ra những bức ảnh đẹp mắt, mà còn tại việc tạo ra một
            không gian kỷ niệm đích thực. Chúng tôi sử dụng kỹ thuật nhiếp ảnh
            chuyên nghiệp và ánh sáng khéo léo để tạo ra không gian lãng mạn và
            truyền cảm hứng. Bằng cách tận dụng cảnh quan, kiến trúc và phong
            cảnh đẹp, chúng tôi mang đến cho bạn những bức ảnh độc đáo và tuyệt
            vời. Hãy để chúng tôi ghi lại những khoảnh khắc đẹp như mơ và mang
            đến cho bạn những kỷ niệm vĩnh viễn trong phong cách cổ trang độc
            đáo.
          </span>
        </div>
        {/* //////////////////////////////// */}
        <div className={styles.main__content3}>
          <div className={styles.background__Img3}>
            <Image
              src={anh4}
              alt="My Image"
              width={320}
              height={250}
              style={{
                paddingTop: "12%",
                paddingLeft: "12%",
                border: "1px solid",
                borderRadius: "50%",
                zIndex: "-10",
              }}
            />
          </div>
          {/* <div>
            <Image
              src={BannerImg}
              alt="My Image"
              width={500}
              height={300}
              style={{ width: "500", height: "300" }}
              className={styles.obj__img2}
            />
          </div> */}
          <span className={styles.content__3}>
            <h3>Concept Vintage</h3>
            Dịch vụ chụp ảnh phong cách vintage mang đến sự lãng mạn và sự quyến
            rũ của thời kỳ trước đây. Chúng tôi đem đến không chỉ những bức ảnh
            đẹp mắt, mà còn một cảm giác đặc biệt, như một hành trình ngược thời
            gian đến những năm tháng đã qua. Chất lượng chụp ảnh của chúng tôi
            không chỉ nằm ở việc tạo ra những bức ảnh mang đậm phong cách
            vintage, mà còn tại việc tạo ra một không gian cảm xúc. Chúng tôi sử
            dụng ánh sáng, màu sắc và hiệu ứng hợp lý để tái hiện không chỉ vẻ
            đẹp của người mẫu mà còn cảm xúc và ý nghĩa của thời kỳ vintage. Với
            dịch vụ chụp ảnh phong cách vintage, bạn sẽ có cơ hội trở thành nhân
            vật chính trong những bức ảnh lấy cảm hứng từ quá khứ. Hãy để chúng
            tôi ghi lại những khoảnh khắc đẹp và mang đến cho bạn một trải
            nghiệm đậm chất vintage, để bạn có thể lưu giữ và chia sẻ những kỷ
            niệm độc đáo và đáng nhớ.
          </span>
        </div>
        <div className={styles.main__content4}>
          <div className={styles.background__Img4}>
            <Image
              src={anh5}
              alt="My Image"
              width={290}
              height={250}
              style={{
                paddingTop: "12%",
                paddingLeft: "15%",
                border: "1px solid",
                borderRadius: "30% 30% 20% 0%",
                zIndex: "-10",
              }}
            />
          </div>
          <span className={styles.content__4}>
            <h3>Concept Dạ Hội</h3>
            Với mục tiêu tạo ra những kỷ niệm về các buổi dạ hội, Tiệc trưởng
            thành... Chúng tôi cố gắng tận dụng tối đa ánh sáng và màu sắc để
            tạo ra những bức ảnh đẹp và tuyệt vời, thể hiện cảm xúc và tinh thần
            cùng với sự trang trọng và lộng lẫy. Mỗi chi tiết được chúng tôi
            chăm chút và chỉnh sửa kỹ lưỡng để đảm bảo mỗi bức ảnh trở thành một
            tác phẩm nghệ thuật độc đáo.
          </span>
        </div>
        <div>
          <Brand />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await axios
    .get("http://localhost:9000/photographyPackage")
    .then((response) => {
      return response.data;
    });

  const staff = await axios
    .get("http://localhost:9000/employee")
    .then((response) => {
      return response.data;
    });

  return {
    props: {
      data: data,
      staff: staff,
    },
  };
}
