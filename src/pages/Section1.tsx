import bg from "../assets/newImgs/sec1/background.png";
import pic1 from "../assets/newImgs/sec1/1.png";
import pic2 from "../assets/newImgs/sec1/2.png";
import pic7 from "../assets/newImgs/sec1/7.png";
import pic3 from "../assets/newImgs/sec1/3.png";
import pic4 from "../assets/newImgs/sec1/4.png";
import pic5 from "../assets/newImgs/sec1/5.png";
import styles from "./Section1.module.scss";
import classnames from "classnames";
export default function Sec1() {
  return (
    <div className={styles["section"]}>
      <img src={bg} alt="" className={styles["bg"]} />
      <section className={styles["header"]}>
        <img src={pic1} alt="" />
        <h2>
          專注於「當下」的濃密科學。
          <br />
          從此刻開始，感受極致精萃的修護一滴。
        </h2>
      </section>
      <section className={styles["content"]}>
        <img src={pic2} style={{ marginBottom: "-10em" }} alt="" />
        <section className={styles["grid"]}>
          <img className={styles["grid-pic"]} src={pic5} alt="" />
          <img
            className={styles["grid-pic"]}
            style={{ marginLeft: "-5em", transform: "translate(0px, 1.8em)" }}
            src={pic4}
            alt=""
          />
        </section>
        <img
          className={classnames(styles["grid-pic"], styles["grid-bottom"])}
          src={pic3}
          alt=""
        />
      </section>
      <section className={styles["footer"]}>
        <img src={pic7} style={{ marginTop: "-2em" }} alt="" />
        <div className={styles["desc"]}>
          <p>*1 整肌成分 胺基乙醯丙酸 (5-ALA)</p>
          <p>*2 整肌成分 苯乙基間苯二酚 (W377)</p>
        </div>
        <p style={{ textAlign: "left" }}>
          *3 彈力成分 合成基因重組（Decapeptide-63／Synthetic Human Gene
          Recombinant Polypeptide-148／Hexapeptide-40）
        </p>
      </section>
    </div>
  );
}
