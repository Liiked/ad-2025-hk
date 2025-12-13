import bg1 from "../assets/newImgs/sec3/back1.png";
import featureTitle from "../assets/newImgs/sec3/1.png";
import pic1 from "../assets/newImgs/sec3/2.png";
import pic2 from "../assets/newImgs/sec3/4.png";
import pic3 from "../assets/newImgs/sec3/6.png";
import pic4 from "../assets/newImgs/sec3/8.png";

import styles from "./Section3.module.scss";
import classNames from "classnames";

export default function Sec3() {
  return (
    <div className={styles["section"]}>
      <img src={bg1} alt="" className={styles["bg"]} />
      <section className={styles["header"]}>
        <div className={styles["feature-title"]}>
          <h4>Features</h4>
          <img src={featureTitle} alt="" />
        </div>
        <img src={pic1} alt="" />
        <p>※因乾燥引起</p>
      </section>
      <section className={styles["content"]}>
        <div className={styles["product"]}>
          <div className={styles["first-title"]}>
            <h1>5-ALA</h1>
            <img src={pic2} alt="" />
          </div>
          <div className={styles["second-title"]}>
            <h1>01</h1>
            <h4>Feature</h4>
            <h2>透過5-ALA*</h2>
          </div>
          <div className={styles["third-title"]}>
            <p>
              專注於肌膚原本的力量。
              <br />
              為健康肌膚而生的
              <br />
              調理修護
              <br />
            </p>
          </div>
          <p className={styles["product-content"]}>
            5-ALA是一種原本就存在於我們體內、支持生命活動的氨基酸。
            <br />
            其含量在17歲達到高峰，之後隨年齡增長逐漸減少。它能給予肌膚潤澤與彈力，調理肌膚狀態。讓您重新認識什麼是健康肌膚的護理體驗。幫助肌膚抵禦年齡與外在壓力，貢獻於充滿活力的能量肌膚。
          </p>
          <p className={styles["tip"]}>*整肌成分 胺基乙醯丙酸 (5-ALA)</p>
        </div>
        <div className={styles["product"]}>
          <div className={styles["first-title"]}>
            <h1>W377</h1>
            <img src={pic3} alt="" />
          </div>
          <div className={styles["second-title"]}>
            <h1>02</h1>
            <h4>Feature</h4>
            <h2
              style={{
                background:
                  "linear-gradient(to right, #917863 60%, transparent 90%)",
              }}
            >
              透過次世代趨勢成分 W377*
            </h2>
          </div>
          <div className={styles["third-title"]}>
            <p>
              以純粹透亮感<span className={styles["point"]}>※2</span>填滿肌膚
              <br />
              締造光輝閃耀的「水晶肌」
              <br />
            </p>
          </div>
          <p className={styles["product-content"]}>
            從歐洲赤松提取的多酚為靈感開發出的次世代整肌成分。
            <br />
            直擊因乾燥引起的肌膚暗沉<span className={styles["point"]}>※1</span>
            原因。
            <br />
            引導出肌膚原本的光澤感、打造出細緻均勻的柔嫩肌理。帶來無比清澈的透明感
            <span className={styles["point"]}>※2</span>與均勻明亮的印象肌膚。
          </p>
          <p className={styles["tip"]}>*整肌成分 苯乙基間苯二酚 (W377)</p>
          <p className={styles["tip"]} style={{ marginTop: "1em" }}>
            ※1 因乾燥導致肌理紊亂的肌膚印象 ※2因乾燥引發的暗沉
          </p>
        </div>
        <div className={styles["product"]}>
          <div className={styles["first-title"]}>
            <h1 className={styles["noAfter"]}>
              17
              <span className={classNames(styles["shrink"], styles["strong"])}>
                TYPES
              </span>
            </h1>
            <h1 className={classNames(styles["shrinkTitle"], styles["strong"])}>
              of collagen
            </h1>
            <img src={pic4} alt="" />
          </div>
          <div className={styles["second-title"]}>
            <h1>03</h1>
            <h4>Feature</h4>
            <h2
              style={{
                background:
                  "linear-gradient(to right, #917863 40%, transparent 80%)",
              }}
            >
              透過17 TYPES of collagen*
            </h2>
          </div>
          <div className={styles["third-title"]}>
            <p>
              針對肌密度<span className={styles["point"]}>※</span>問題
              <br />
              建構不易鬆垮的彈力
            </p>
          </div>
          <p className={styles["product-content"]}>
            雖然統稱為膠原蛋白，但其實存在約30種不同類型，其功能多彩各異。
            <br />
            Dr.LuLuLun 專注於支撐肌膚彈力基礎的「 17 TYPES of collagen 」。
            <br />
            針對隨年齡增長而逐漸流失的肌密度
            <span className={styles["point"]}>※</span>
            問題，打造不易鬆垮的彈力與充滿活力的水潤肌膚。
          </p>
          <p className={styles["tip"]}>
            *彈力成分 合成基因重組（Decapeptide-63／Synthetic Human Gene
          </p>
          <p className={styles["tip"]} style={{ marginTop: "1em" }}>
            Recombinant Polypeptide-148／Hexapeptide-40） ※特指充盈潤澤的角質層
          </p>
        </div>
      </section>
      <section className={styles["footer"]}></section>
    </div>
  );
}
