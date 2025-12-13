import bg1 from "../assets/newImgs/sec5/back.png";
import featureTitle from "../assets/newImgs/sec3/1.png";
import pic1 from "../assets/newImgs/sec5/1.png";
import pic2 from "../assets/newImgs/sec5/2.png";
import pic3 from "../assets/newImgs/sec5/3.png";
import pic4 from "../assets/newImgs/sec5/4.png";
import pic5 from "../assets/newImgs/sec5/5.png";

import styles from "./Section5.module.scss";
import classNames from "classnames";
// import classNames from "classnames";

export default function Sec5() {
  return (
    <div className={styles["section"]}>
      <img src={bg1} alt="" className={styles["bg"]} />
      <section className={styles["header"]}>
        <div className={styles["feature-title"]}>
          <h4>How To Use</h4>
          <img src={featureTitle} alt="" />
        </div>
        <p>Retuning Serum Mask</p>
        <h2>使用方法</h2>
      </section>
      <section className={styles["content"]}>
        <section className={styles["usage-list"]}>
          <div className={styles["usage-item"]}>
            <img src={pic1} alt="" />
            <p>作為特別護理使用的面膜，建議每週使用1~2次效果更佳</p>
          </div>
          <div
            className={classNames(
              styles["usage-item"],
              styles["with-bottom-arrow"]
            )}
          >
            <img src={pic2} alt="" />
            <p>
              請於潔面後的潔淨肌膚上使用。將面膜開口處展開，讓
              <span className={styles["underline"]}>沒有網格襯墊的一面</span>
              貼合肌膚。
            </p>
          </div>
          <div
            className={classNames(
              styles["usage-item"],
              styles["with-bottom-arrow"]
            )}
          >
            <img src={pic3} alt="" />
            <p>
              <span className={styles["underline"]}>撕下網格襯墊</span>
              ，將面膜緊貼於肌膚。靜置5～10分鐘。用手掌包裹臉部溫熱加壓，效果更佳。
            </p>
          </div>
          <div className={styles["usage-item"]}>
            <img src={pic4} alt="" />
            <p>
              取下面膜後，將殘留精華液輕拍至吸收。後續建議使用乳液或乳霜進行護理。
            </p>
          </div>
        </section>
      </section>
      <section className={styles["footer"]}>
        <div
          className={styles["feature-title"]}
          style={{ marginBottom: "-8em" }}
        >
          <h4 style={{ lineHeight: "1.4", paddingTop: "2em" }}>
            Made <br />
            in Japan
          </h4>
          <img src={featureTitle} alt="" />
        </div>
        <h1>日本品質</h1>
        <img style={{ width: "96%" }} src={pic5} alt="" />
        <p className={styles["tip"]}>※請注意，並非所有人皆不會出現皮膚刺激</p>
      </section>
    </div>
  );
}
