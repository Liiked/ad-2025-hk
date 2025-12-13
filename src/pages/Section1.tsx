import bg from "../assets/hkImgs/bk_1.png";
import pic1 from "../assets/hkImgs/product_1.png";
import pic2 from "../assets/hkImgs/product_1_1.png";
import pic3 from "../assets/hkImgs/product_1_2.png";
import styles from "./Section1.module.scss";
import classnames from "classnames";
export default function Sec1() {
  return (
    <div className={styles["section"]}>
      <img src={bg} alt="" className={styles["bg"]} />
      <section className={styles["content"]}>
        <section className={styles["grid"]}>
          <img src={pic1} style={{ marginTop: "6em", width: "90%" }} alt="" />
          <img
            className={styles["grid-pic"]}
            src={pic2}
            style={{ marginTop: "-2em", marginBottom: "2em", width: "96%" }}
          />
        </section>
        <img
          className={classnames(styles["grid-pic"], styles["grid-bottom"])}
          src={pic3}
          alt=""
        />
      </section>
      <section className={styles["footer"]}>
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
