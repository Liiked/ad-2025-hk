import bg1 from "../assets/newImgs/sec4/back.png";
import pic1 from "../assets/newImgs/sec4/1.png";
import pic2 from "../assets/newImgs/sec4/2.png";
import pic3 from "../assets/newImgs/sec4/3.png";

import styles from "./Section4.module.scss";
// import classNames from "classnames";

export default function Sec4() {
  return (
    <div className={styles["section"]}>
      <img src={bg1} alt="" className={styles["bg"]} />
      <section className={styles["header"]}>
        <img style={{ marginBottom: "-10%" }} src={pic1} alt="" />
      </section>
      <section className={styles["content"]}>
        <div className={styles["product"]}>
          <div className={styles["first-title"]}>
            <img
              style={{ width: "20%", left: "55%", zIndex: 2 }}
              src={pic2}
              alt=""
            />
          </div>
          <div className={styles["second-title"]}>
            <h1>04</h1>
            <h4>Feature</h4>
          </div>
          <div className={styles["third-title"]}>
            <p>
              主力級成分
              <br />
              多角度攻克肌膚煩惱
              <br />
            </p>
          </div>
          <p className={styles["product-content"]}>
            為實現飽滿光澤的6種維他命*1與甘草萃取物*2、支撐彈力的6重胜肽*3與維他命A衍生物*4、防止肌膚粗糙的煙醯胺*5、以及潤澤滲透多層的8D
            hyaluronic acid*6。 <br /> 這些成分相輔相成，針對肌膚暗沉與彈力不足
            <span className={styles["point"]}>※</span>等煩惱，強效出擊。
          </p>
          <p className={styles["tip"]}>
            ＊1 光澤成分
            3-O-乙基抗壞血酸、抗壞血酸葡糖苷、抗壞血酸磷酸鈉、抗壞血酸四異棕櫚酸酯、抗壞血酸棕櫚酸磷酸酯三鈉、抗壞血酸磷酸鎂＊2
            光澤成分＊3 彈力成分
            棕櫚酰三肽-5、二肽-2、棕櫚酰四肽-7、乙酰基六肽-8、棕櫚酰三肽-1、棕櫚酰六肽-12＊4
            彈力成分 視黃醇亞油酸酯、視黃醇棕櫚酸酯＊5 整肌成分＊6 保濕成分
            玻尿酸鈉、羟丙基三甲基氯化銨玻尿酸、水解玻尿酸、乙酰化玻尿酸鈉、玻尿酸、水解玻尿酸鈉、玻尿酸交聯聚合物鈉、玻尿酸鉀
            ※因乾燥引起
          </p>
        </div>
        <div className={styles["product"]} style={{ paddingTop: "24em" }}>
          <div className={styles["first-title"]}>
            <img
              style={{ width: "20%", left: "50%", top: "78%", zIndex: 2 }}
              src={pic2}
              alt=""
            />
            <img
              style={{ top: "-28em", left: "26%", width: "80%" }}
              src={pic3}
              alt=""
            />
          </div>
          <div className={styles["second-title"]}>
            <h1>05</h1>
            <h4>Feature</h4>
          </div>
          <div className={styles["third-title"]}>
            <p>
              皮膚科學概念
              <br />
              「透明水膜布」， <br />
              實現極致
              <span className={styles["point"]}>※</span>的水膜保濕體驗
            </p>
          </div>
          <p className={styles["product-content"]}>
            彷彿將美容液直接敷上肌膚的全新面膜體驗。Dr.LuLuLun嚴選的特殊膜布，只為讓滿滿精華毫無保留地直達肌底。
          </p>
          <p className={styles["tip"]}>※ 指LuLuLun首次採用的不織布的使用感</p>
        </div>
        <div className={styles["details-container"]}>
          <div className={styles["detail"]}>
            <h4>Point1</h4>
            <h2>驚人保水力與融化般質地</h2>
            <p>
              輕薄如羽的布膜，
              <br />
              吸附約為自重14.5倍的滿滿精華液後變為濃稠膠狀。毫無保留地持續滲透深層潤澤肌膚。
              <br />
            </p>
          </div>
          <div className={styles["detail"]}>
            <h4>Point2</h4>
            <h2>如吸附般的緊密貼合度</h2>
            <p>
              順應肌膚紋理的起伏，
              <br />
              連細微部位都能緊密貼合。
              <br />
              毫無縫隙地從表面至角質層深處皆能柔潤浸透。
            </p>
          </div>
          <div className={styles["detail"]}>
            <h4>Point3</h4>
            <h2>空氣般輕盈佩戴感</h2>
            <p>
              透氣度高且透明度高，
              <br />
              甚至讓人忘記正在敷面膜，
              <br />
              享受無負擔的保養時光。
            </p>
          </div>
          <div className={styles["detail"]}>
            <h4>Point4</h4>
            <h2>對肌膚與環境的溫和友善</h2>
            <p>
              採用可再生樹木纖維製成的100%植物性面膜布。
              <br />
              溫柔親膚，更是對環境也友善的選擇。
            </p>
          </div>
        </div>
      </section>
      <section className={styles["footer"]}>
        <h4>
          連滲透方法都精心設計。
          <br />
          這就是 Dr.LuLuLun 的極致追求。
        </h4>
        <p>
          「隱形水膜布」因需承載大量精華液，
          <br />
          材質極致纖薄柔軟。
          <br />
          為確保品質並兼顧衛生方便，
          <br />
          我們特別採用網格襯墊（支撐層）。
          <br />
          使用時，
          <br />
          先將整個面膜對準眼唇位置貼合臉部，
          <br />
          再緩緩取下網格襯墊即可。
        </p>
      </section>
    </div>
  );
}
