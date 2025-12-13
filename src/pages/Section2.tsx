import bg1 from "../assets/newImgs/sec2/back1.png";
import bg2 from "../assets/newImgs/sec2/4.png";
import styles from "./Section2.module.scss";
// import classnames from "classnames";
import title1 from "../assets/newImgs/sec2/1.png";
import pic1 from "../assets/newImgs/sec2/2.png";
import pic3 from "../assets/newImgs/sec2/3.png";
import pic4 from "../assets/newImgs/sec2/5.png";
import pic5 from "../assets/newImgs/sec2/6.png";
import bg3 from "../assets/newImgs/sec2/back2.png";
export default function Sec2() {
  return (
    <div className={styles["section"]}>
      <section className={styles["header"]}>
        <img src={bg1} alt="" className={styles["bg"]} />
        <img src={title1} alt="" />
        <img src={pic1} style={{ width: "52%" }} alt="" />
        <p style={{ marginTop: "2em" }}>
          將世界級的科研力量，凝結於一片之中。
          <br />
          Dr.LuLuLun 最終抵達的答案，並非只是滿足
          <br />
          一時的潤澤，而是以「維持肌膚狀態」為理念，
          <br />
          著眼於肌膚原本擁有的力量。
          <br />
          彈潤、光澤、透亮感※。
          <br />
          本質性地迎戰各種肌膚煩惱。
          <br />
        </p>
        <p style={{ marginTop: "4em" }}>這，和以往的 Lululun，有點不一樣。</p>
        <img style={{ width: "50%" }} src={pic3} alt="" />
        <p
          style={{
            textAlign: "right",
            fontSize: "0.8em",
            fontWeight: "initial",
            marginRight: "15%",
          }}
        >
          ※因乾燥引起
        </p>
      </section>
      <section className={styles["content"]}>
        <div className={styles["dialog"]}>
          <img src={bg2} alt="" className={styles["bg"]} />
          <h2>
            您是否<span className={styles["strong"]}>有</span>
            <span className={styles["strong"]}>過</span>
            <br />
            這樣的煩惱？
          </h2>
          <div className={styles["list"]}>
            <div className={styles["list-item"]}>
              <img src={pic4} alt="" />
              <p>
                暫時不想依賴醫美療程，
                <br />
                但想為未來的肌膚做好護理準備
              </p>
            </div>
            <div className={styles["list-item"]}>
              <img src={pic4} alt="" />
              <p>
                最近開始在意肌膚缺乏彈力、
                <br />
                變得乾燥
              </p>
            </div>
            <div className={styles["list-item"]}>
              <img src={pic4} alt="" />
              <p>
                即使認真保濕，
                <br />
                肌膚狀態還是不夠亮眼
              </p>
            </div>
            <div className={styles["list-item"]}>
              <img src={pic4} alt="" />
              <p>
                想在現有的保養程序中，
                <br />
                再次感受到明顯的效果
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles["footer"]}>
        <img src={bg3} className={styles["bg"]} alt="" />
        <p
          style={{
            fontSize: "2.4em",
            marginTop: "1em",
            textAlign: "center",
            lineHeight: 1.6,
            marginBottom: "2em",
          }}
        >
          著眼於肌膚未來，
          <br />
          「提前佈局」的保養新選擇。
        </p>
        <img src={pic5} alt="" />
        <p
          style={{
            fontWeight: "bold",
            letterSpacing: "0.2em",
            textAlign: "center",
            fontSize: "2.8em",
            color: "#523e3e",
          }}
        >
          Returning Serum Mask
        </p>
      </section>
    </div>
  );
}
