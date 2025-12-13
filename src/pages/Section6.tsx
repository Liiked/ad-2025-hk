import bg1 from "../assets/newImgs/sec6/back.png";
// import featureTitle from "../assets/newImgs/sec3/1.png";
import pic1 from "../assets/newImgs/sec6/1.png";
import pic2 from "../assets/newImgs/sec6/2.png";

import styles from "./Section6.module.scss";

export default function Sec6() {
  return (
    <div className={styles["section"]}>
      <img src={bg1} alt="" className={styles["bg"]} />
      <section className={styles["header"]}>
        <img style={{ marginBottom: "-4em" }} src={pic1} alt="" />
        <img style={{ width: "70%" }} src={pic2} alt="" />
      </section>
      <section className={styles["content"]}>
        <div className={styles["notice"]}>
          <div className={styles["notice-item"]}>
            <h2>商品名稱／全部成分</h2>
            <p>
              商品名稱：DL 修護面膜 GR JFL
              <br />
              內容量：5片裝（精華液量：125mL）
            </p>
            <p>
              全成分：
              <br />
              水、甘油、異十六烷、胺基乙醯丙酸 (5-ALA)、苯乙基間苯二酚
              (W377)、合成基因重組（Decapeptide-63／Synthetic Human Gene
              Recombinant
              Polypeptide-148／Hexapeptide-40）、玻尿酸鈉、乙酰化玻尿酸鈉、水解玻尿酸、水解玻尿酸鈉、玻尿酸、玻尿酸鉀、玻尿酸交聯聚合物鈉、羟丙基三甲基氯化銨玻尿酸、3-o-乙基抗壞血酸、抗壞血酸葡糖苷、抗壞血酸磷酸鈉、抗壞血酸四異棕櫚酸酯、抗壞血酸棕櫚酸磷酸酯三鈉、抗壞血酸磷酸鎂、甘草酸二鉀、泛醇、棕櫚酰三肽-5、二肽-2、棕櫚酰四肽-7、乙酰基六肽-8、棕櫚酰三肽-1、棕櫚酰六肽-12、視黃醇亞油酸酯、視黃醇棕櫚酸酯、煙醯胺、生育酚乙酸酯、甲基橙皮苷、麥芽糖醇、甘油葡糖苷、PEG-400、（丙烯酸酯／C10-30
              烷醇丙烯酸酯）交聯聚合物、乙二胺四乙酸二鈉、黃原膠、氫氧化鉀、羟乙基纖維素、甘油聚甲基丙烯酸酯、丁二醇、PEG-8、1,2-己二醇、硬脂醇聚醚-20、氫化卵磷脂、卡波姆、PEG-60
              氫化蓖麻油、辛乙二醇、聚山梨醇酯
              20、花生油、戊二醇、矽石、苯氧乙醇、對羥基苯甲酸甲酯。
            </p>
          </div>
          <div className={styles["notice-item"]}>
            <h2>使用與保存注意事項</h2>
            <p>
              ◎ 肌膚有傷口、腫脹、濕疹、過敏、發炎等異常情況時，請勿使用。
              <br />
              ◎ 使用時請仔細留意肌膚是否有異常反應。
              <br />
              ◎
              若化妝品與肌膚不合，即出現以下情況時，請立即停止使用。繼續使用可能會導致症狀惡化，建議諮詢皮膚科專業醫師：
              <br />
              ⑴ 使用中出現發紅、腫脹、搔癢、刺激、褪色（如白斑）或暗沉等症狀時；
              <br />
              ⑵ 使用後的肌膚照射到陽光後出現上述症狀時。
              <br />
              ◎
              首次使用或容易對化妝品過敏的敏感膚質者，使用前請先於手臂內側等處進行測試，並於隔日確認是否有發紅、搔癢等異常反應。
              <br />
              ◎
              請注意避免精華液進入眼睛。若不慎入眼，請立即以清水沖洗，如有異常情況出現，建議諮詢眼科醫師。
              <br />
              ◎
              為維護衛生，請勿重複使用已使用過的面膜。此外，已取出的面膜即使取出過多，也請勿放回袋中。
              <br />
              ◎ 面膜及網膜不溶於水，請勿丟入洗臉槽、馬桶等處。
              <br />
              ◎ 請避免保存於陽光直射處或極端高溫、低溫的場所。
              <br />
              ◎ 請保管於嬰幼兒無法觸及之處。
              <br />
              ◎
              開封後請確實密封夾鏈袋，以免產品變質。請注意若夾鏈部位朝下放置，可能會導致液體滲漏。
              <br />◎ 開封後請盡早使用完畢。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
