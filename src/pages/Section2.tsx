import bg2 from "../assets/hkImgs/bk_2.png";
import pic1 from "../assets/hkImgs/product_2_1.png";
import pic2 from "../assets/hkImgs/product_2_2.png";
import pic3 from "../assets/hkImgs/product_2_3.png";
import pic4 from "../assets/hkImgs/product_2_4.png";
import title from "../assets/hkImgs/product_2_title.png";
import scroll1 from "../assets/hkImgs/scroll_1.png";
import scroll2 from "../assets/hkImgs/scroll_2.png";
import scroll3 from "../assets/hkImgs/scroll_3.png";
import scroll4 from "../assets/hkImgs/scroll_4.png";
import logo from "../assets/hkImgs/logo.png";
import styles from "./Section2.module.scss";

export default function Sec2() {
  return (
    <div className={styles["section"]}>
      <section className={styles["header"]}>
        <img src={bg2} alt="" className={styles["bg"]} />
        <img src={pic1} style={{ width: "90%", marginTop: "8em" }} alt="" />
      </section>
      <section className={styles["content"]}>
        <img
          src={pic2}
          style={{ width: "100%", marginLeft: "-3.2em", marginTop: "20em" }}
          alt=""
        />
        <img
          src={pic3}
          style={{ width: "100%", marginTop: "8em", marginLeft: "5em" }}
          alt=""
        />
        <img src={pic4} style={{ width: "100%", marginTop: "8em" }} alt="" />
        <img
          src={title}
          style={{ width: "60%", marginTop: "10em", marginLeft: "8%" }}
          alt=""
        />
        <div className={styles["scroll"]}>
          <img className={styles["scroll-item"]} src={scroll1} alt="" />
          <img className={styles["scroll-item"]} src={scroll2} alt="" />
          <img className={styles["scroll-item"]} src={scroll3} alt="" />
          <img className={styles["scroll-item"]} src={scroll4} alt="" />
        </div>
      </section>
      <section className={styles["footer"]}>
        <img src={logo} style={{ width: "40%", marginTop: "10em" }} alt="" />
      </section>
    </div>
  );
}
