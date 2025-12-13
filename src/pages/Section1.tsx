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
          <p>
            ※1：24億枚突破：2011年7月～2024年12月の累計販売枚数（当社調べ）。
          </p>
          <p>
            ※2：
            フェイスマスクブランドNo.1：富士経済「化粧品マーケティング要覧2025」パック市場・ブランドシェア
            2024年販売実績ベース。
          </p>
          <p>
            ※3：コスメアワード320冠：2015年上半期～2024年下半期のシリーズ累計受賞数。
          </p>
        </div>
      </section>
    </div>
  );
}
