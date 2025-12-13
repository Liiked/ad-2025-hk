import "./App.css";
import styles from "./Tokyo.module.scss";
import Back1 from "./assets/imgs/header-background_1.png";
import Logo1 from "./assets/imgs/header__logo_1.png";
import Logo2 from "./assets/imgs/header__logo_2.png";
import Logo3 from "./assets/imgs/header__logo_3.png";
import ActivityBack from "./assets/imgs/activity_header.png";
import Activity1 from "./assets/imgs/tokyo_activity_product_1.png";
import Activity2 from "./assets/imgs/tokyo_activity_product_2.png";
import FilmTitle from "./assets/imgs/film_title.png";
import AstaliftTitle from "./assets/imgs/astalift_title.png";
import AssistFoodTitle from "./assets/imgs/assist_food_title.png";
// import ShopTitle from "./assets/imgs/shop_title.png";
import ActivityShops from "./assets/imgs/activity_shops.png";
import No01 from "./assets/imgs/no_01.png";
import No02 from "./assets/imgs/no_02.png";
import No03 from "./assets/imgs/no_03.png";
import Illustration1 from "./assets/imgs/illustration_1.png";
import Illustration2 from "./assets/imgs/illustration_2.png";
import Illustration3 from "./assets/imgs/illustration_3.png";
import Illustration4 from "./assets/imgs/illustration_4.png";
import DownArrow from "./assets/imgs/down_arrow.png";
import TitleBox1 from "./assets/imgs/title_box_1.png";
// import TitleBox2 from "./assets/imgs/title_box_2.png";
import Product1 from "./assets/imgs/product_1.png";
import Product2 from "./assets/imgs/product_2.png";
import Product3 from "./assets/imgs/product_3.png";
import FoodProduct1 from "./assets/imgs/food_product_1.png";
import ProductIllustration1 from "./assets/imgs/product_illustration_1.png";
import ProductIllustration2 from "./assets/imgs/product_illustration_2.png";
import ProductIllustration3 from "./assets/imgs/product_illustration_3.png";
import Foodillustration1 from "./assets/imgs/food_illustration_1.png";
import Foodillustration2 from "./assets/imgs/food_illustration_2.png";
import Foodillustration3 from "./assets/imgs/food_illustration_3.png";
import Shop1 from "./assets/imgs/shop_1.png";
import Shop2 from "./assets/imgs/shop_2.png";
import Shop3 from "./assets/imgs/shop_3.png";
import Shop4 from "./assets/imgs/shop_4.png";
import Shop5 from "./assets/imgs/shop_5.png";
import LocationIcon from "./assets/imgs/location_icon.png";
import CompanyPic from "./assets/imgs/company.png";
import Sakura from "./assets/imgs/sakura.png";
import cls from "classnames";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "富士胶片-艾诗缇买赠活动-东京版";
  }, []);
  return (
    <>
      <div className={styles["app-tokyo"]}>
        <section className={styles["header"]}>
          <img className={styles["bk-1"]} src={Back1} alt="" />
          <div className={styles["top-content"]}>
            <div className={styles["left"]}>
              <h1 data-text="富士胶片" className={styles["title"]}>
                富士胶片
              </h1>
              <h1
                data-text="来店即可获赠精美礼品！"
                className={styles["title"]}
              >
                来店即可获赠精美礼品！
              </h1>
              <div className={styles["sub-title"]}>
                <h4>赠品活动</h4>
              </div>
            </div>
            <div className={styles["right"]}>
              <img src={Logo1} alt="" />
            </div>
          </div>
          <div className={styles["bottom-content"]}>
            <div className={styles["description"]}>
              LDK the Beauty杂志
              <br />
              殿堂BESTBUY亮白美容液
            </div>
            <div className={styles["logo"]}>
              <img src={Logo2} alt="" />
            </div>
          </div>
        </section>
        <section className={styles["activity"]}>
          <div className={styles["head"]}>
            <img src={ActivityBack} alt="" />
            <div className={styles["description"]}>
              3月1日起凭此活动页面来店的顾客，
              <br /> 即可获赠 来店赠品
              <span className={styles["red-text"]}>"2天1夜旅行体验装"</span>
              1份。
              <p className={styles["bottom-right-text"]}>*赠品有限，赠完为止</p>
            </div>
            <img className={styles["sakura-left-bottom"]} src={Sakura} alt="" />
            <img className={styles["sakura-right-top"]} src={Sakura} alt="" />
          </div>
          <div className={styles["body"]}>
            <div className={styles["product-card"]}>
              <div className={styles["title"]}>推荐商品</div>
              <div className={styles["pic"]}>
                <img className={styles["activity-1"]} src={Activity1} alt="" />
              </div>
              <div className={styles["content"]}>
                <p>从左至右</p>
                <ol>
                  <li>艾诗缇 焕白亮肤肌底精华 (啫喱)</li>
                  <li>艾诗缇 净皙钻白深层防晒隔离美容液</li>
                  <li>艾诗缇 莹润水感深层防晒隔离美容液</li>
                  <li>富士胶片五层龙丸 加强版</li>
                </ol>
              </div>
            </div>
            <div className={styles["product-card"]}>
              <div className={styles["title"]}>来店赠品</div>
              <div className={styles["pic"]}>
                <img className={styles["activity-2"]} src={Activity2} alt="" />
              </div>
              <div className={styles["content"]}>
                <p>从左至右</p>
                <ol>
                  <li>①艾诗缇 胶原莹润卸妆啫喱3g×1袋</li>
                  <li>②艾诗缇 胶原莹润洗面奶 2g× 1袋</li>
                  <li>③艾诗缇 焕白亮肤肌底精华 (啫喱)0.5g×2袋</li>
                  <li>④艾诗缇 净皙钻白化妆水 2ml×2袋</li>
                  <li>⑤艾诗缇 净皙钻白美肌霜 0.7g×2袋</li>
                  <li>⑥艾诗缇 净皙钻白深层防晒隔离美容液0.7g×2袋</li>
                </ol>
              </div>
            </div>
          </div>
          <div className={styles["foot"]}>
            <h2 className={styles["activity-shop-name"]}>活动指定门店</h2>
            <ol>
              <li>ASTALIFT直营店：银座店、六本木店</li>
            </ol>
            <img className={styles["sakura-bottom"]} src={Sakura} alt="" />
          </div>
        </section>
        <section className={styles["description-film-history"]}>
          <section className={styles["part-title"]}>
            <img src={FilmTitle} alt="" />
            <h4>ASTALIFT品牌的诞生</h4>
          </section>
          <section className={styles["part-main"]}>
            <section className={cls(styles["parts"], styles["part-nanometre"])}>
              <div className={styles["title"]}>
                <img src={No01} alt="" />
                <h2>纳米技术</h2>
              </div>
              <div className={styles["body"]}>
                <img src={Illustration1} alt="" />
                <img className={styles["down-arrow"]} src={DownArrow} alt="" />
                <p>
                  通过在照片胶片领域积累的独特纳米技术，
                  <br /> 将成分极小化至约
                  <span className={styles["red-text"]}>20纳米</span> 。<br />
                  纳米化的成分能够深入渗透到皮肤的角质层的缝隙中，
                  <br />
                  到达需要它的地方。
                </p>
                <img
                  className={styles["special-addition"]}
                  src={Illustration2}
                  alt=""
                />
                <p className={cls(styles["red-text"], styles["text-small"])}>
                  运用富士胶片的纳米技术，细微到让光通过
                </p>
              </div>
            </section>
            <section className={cls(styles["parts"], styles["part-human"])}>
              <div className={styles["title"]}>
                <img src={No02} alt="" />
                <h2>双重人型神经酰胺</h2>
              </div>
              <div className={styles["body"]}>
                <img src={Illustration3} alt="" />
                <img className={styles["down-arrow"]} src={DownArrow} alt="" />
                <p>
                  运用独特纳米技术，创造出对肌肤亲和力高的 <br />
                  <span className={styles["red-text"]}>超小</span>
                  双重人型纳米神经酰胺， <br />
                  补充肌肤水润，强化肌底屏障，打造健康的肌肤。 <br />
                  <span className={styles["red-text"]}>
                    高浸透・高純度・高浓度，更有效的补充肌肤缺失的神经酰胺
                  </span>
                </p>
              </div>
            </section>
            <section className={cls(styles["parts"], styles["part-shrimp"])}>
              <div className={styles["title"]}>
                <img src={No03} alt="" />
                <h2>纳米虾青素</h2>
              </div>
              <div className={styles["body"]}>
                <img src={Illustration4} alt="" />
                <img className={styles["down-arrow"]} src={DownArrow} alt="" />
                <p>
                  虾青素是一种红色的天然色素（类胡萝卜素），
                  <br />
                  在自然界的鲑鱼、虾、蟹等中含量丰富。
                  <br />
                  富士胶片的独特技术“纳米虾青素”是将虾青素纳米化，
                  <br />
                  具有很强的
                  <span className={styles["red-text"]}>
                    抗氧化能力、渗透能力、稳定性
                  </span>
                  ，
                  <br />
                  和卓越的<span className={styles["red-text"]}>抗氧化效果</span>
                  。
                </p>
              </div>
            </section>
          </section>
        </section>
        <section className={styles["description-astalift"]}>
          <img src={AstaliftTitle} alt="" />
          <div
            className={cls(
              styles["product-detail-card"],
              styles["product-lotion"]
            )}
          >
            <div className={styles["title-part"]}>
              <h4>焕白亮肤肌底精华（啫喱）</h4>
              <img
                className={cls(
                  styles["product-box-background"],
                  styles["box-1"]
                )}
                src={TitleBox1}
                alt=""
              />
            </div>
            <div className={styles["body-part"]}>
              <img className={styles["product-1"]} src={Product1} alt="" />
              <ol>
                <li>
                  从强化肌肤各层的屏障功能到亮肤和对抗岁月痕迹。让洁肤后的肌肤
                  健康美丽，促进护肤品吸收的精华液。
                </li>
                <li>
                  结合纳米科学而产生的特小级别的
                  <span className={styles["red-text"]}>“双重人型神经酰胺”</span>
                  和<span className={styles["red-text"]}>“纳米虾青素”</span>
                  等各种美容成分，以及亮肤有效成分。
                </li>
              </ol>
              <img
                className={styles["illustration"]}
                src={ProductIllustration1}
                alt=""
              />
            </div>
          </div>
          <div
            className={cls(
              styles["product-detail-card"],
              styles["product-tube"]
            )}
          >
            <div className={styles["title-part"]}>
              {/* <h4>净皙钻白深层防晒隔离美容液 30g</h4> */}
              {/* <img
                className={cls(
                  styles["product-box-background"],
                  styles["box-2"]
                )}
                src={TitleBox2}
                alt=""
              /> */}
            </div>
            <div className={styles["body-part"]}>
              <div className={styles["product-column"]}>
                <div className={styles["column-item"]}>
                  <div className={styles["column-pic"]}>
                    <img
                      className={cls(styles["product-2"], styles["bottom-m-2"])}
                      src={Product2}
                      alt=""
                    />
                  </div>
                  <div className={styles["column-text"]}>
                    净皙钻白深层防晒隔离美容液 <br />
                    30g 4,290日元(含税)
                  </div>
                </div>
                <div className={styles["column-item"]}>
                  <div className={styles["column-pic"]}>
                    <img
                      className={cls(styles["product-2"], styles["bottom-m-2"])}
                      src={Product3}
                      alt=""
                    />
                  </div>
                  <div className={styles["column-text"]}>
                    莹润水感深层防晒隔离美容液 <br />
                    30g 4,290日元(含税)
                  </div>
                </div>
              </div>

              <ol>
                <li>
                  不仅能阻断深层紫外线，还能防止
                  <span className={styles["red-text"]}>“紫外线漏出”</span>
                  ，令肌肤晶莹剔透。
                </li>
                <li>
                  含有<span className={styles["red-text"]}>“弹性UV护盾”</span>
                  ，可灵活贴合皮肤的运动。 无论是大笑还是说话，
                  都能完美贴合，彻底防御肌肤免遭紫外线侵袭。
                </li>
                <li>
                  通过UV感应罩，可随时检测全年都有的紫外线。还可以检测
                  <span className={styles["red-text"]}>“深层紫外线”</span>。
                </li>
              </ol>
              <img
                className={cls(
                  styles["illustration"],
                  styles["top-m-2"],
                  styles["bottom-m-2"]
                )}
                src={ProductIllustration3}
                alt=""
              />
              <img
                className={cls(styles["illustration"], styles["bottom-m-2"])}
                src={ProductIllustration2}
                alt=""
              />
            </div>
          </div>
        </section>
        <section className={styles["description-assist-food"]}>
          <img
            className={cls(styles["assist-food-title"])}
            src={AssistFoodTitle}
            alt=""
          />
          <div
            className={cls(
              styles["product-detail-card"],
              styles["product-lotion"]
            )}
          >
            <div className={styles["title-part"]}>
              <h4>富士胶片五层龙丸 加强版</h4>
              <img
                className={cls(
                  styles["product-box-background"],
                  styles["box-1"]
                )}
                src={TitleBox1}
                alt=""
              />
            </div>
            <div className={styles["body-part"]}>
              <img className={styles["product-1"]} src={FoodProduct1} alt="" />
              <div className={styles["food-text"]}>
                <h2
                  className={cls(
                    styles["red-text"],
                    styles["text-size-l"],
                    styles["text-bold"]
                  )}
                >
                  阻止糖分吸收
                </h2>
                <h2 className={cls(styles["red-text"], styles["text-size-m"])}>
                  健康减肥 健美身材
                </h2>
                <h2
                  style={{ width: "60%" }}
                  className={cls(
                    styles["tag-blue"],
                    styles["red-text"],
                    styles["text-size-l"],
                    styles["text-bold"]
                  )}
                >
                  只需8周 有效减脂
                </h2>
              </div>
              <img
                style={{ marginBottom: "4em" }}
                className={styles["illustration"]}
                src={Foodillustration1}
                alt=""
              />
              <div className={styles["food-text"]}>
                <h2
                  className={cls(
                    styles["red-text"],
                    styles["text-size-l"],
                    styles["text-bold"]
                  )}
                >
                  变美的秘诀
                </h2>
                <h2
                  style={{ marginBottom: "1em" }}
                  className={cls(styles["red-text"], styles["text-size-m"])}
                >
                  五层龙提取物在肠道内的作用
                </h2>
              </div>
              <img
                className={styles["illustration"]}
                src={Foodillustration2}
                alt=""
              />
              <img
                className={styles["illustration"]}
                style={{ marginTop: "4em" }}
                src={Foodillustration3}
                alt=""
              />
            </div>
          </div>
        </section>
        <section className={styles["company-intro"]}>
          <img className={styles["company-pic"]} src={CompanyPic} alt="" />
          <div className={styles["company-desc"]}>
            <p>FUJIFILM着眼于自然界中蕴含的各种力量</p>
            <p>我们通过科学验证并应用这种力量于保健品中</p>
          </div>
        </section>
        <section className={styles["bottom-background-area"]}>
          <section className={styles["shop-list"]}>
            <div className={styles["shop-title"]}>
              <img src={ActivityShops} alt="" />
            </div>
            <div className={styles["shop-sect"]}>
              <h4>ASTALIFT 直营店</h4>
              <div className={styles["list"]}>
                <div className={styles["list-item"]}>
                  <div className={styles["list-head"]}>
                    <img src={Shop1} alt="" />
                  </div>
                  <div className={styles["location"]}>
                    <img src={LocationIcon} alt="" />
                    银座店（ASTALIFT GINZA）
                  </div>
                  <p className="mail-code">邮编：104-0061</p>
                  <p className="addr">地址：东京都中央区银座 3丁目2-13</p>
                  <p className="open-time">营业时间：11:00～20:00</p>
                  <p className={styles["appendix"]}>
                    *3月18日~3月22日期间装修闭馆中。
                  </p>
                </div>
                <div className={styles["list-item"]}>
                  <div className={styles["list-head"]}>
                    <img src={Shop2} alt="" />
                  </div>
                  <div className={styles["location"]}>
                    <img src={LocationIcon} alt="" />
                    六本木店（ASTALIFT ROPPONGI）
                  </div>
                  <p className="mail-code">邮编：107-0052</p>
                  <p className="addr">
                    地址：东京都港区赤坂 9丁目7-3 东京中城 WEST 富士胶片总部大楼
                    1F
                  </p>
                  <p className="open-time">营业时间：10:00～19:00</p>
                </div>
              </div>
            </div>
            <div className={styles["shop-sect"]}>
              <h2 className={styles["h2-title"]}>
                以上产品也可以在杉药局各门店购买
              </h2>
              <h4>&lt; 东京店铺 &gt;</h4>
              <div className={styles["list"]}>
                <div className={styles["list-item"]}>
                  <div className={styles["list-head"]}>
                    <img src={Shop5} alt="" />
                  </div>
                  <div className={styles["location"]}>
                    <img src={LocationIcon} alt="" />
                    杉药妆店 新宿三丁目店
                  </div>
                  <p className="mail-code">邮编：160-0022</p>
                  <p className="addr">
                    东京都新宿区新宿三丁目5-6 Q Plaza新宿三丁目1F
                  </p>
                  <p className="open-time">营业时间：9:00～23:30</p>
                </div>
                <div className={styles["list-item"]}>
                  <div className={styles["list-head"]}>
                    <img src={Shop3} alt="" />
                  </div>
                  <div className={styles["location"]}>
                    <img src={LocationIcon} alt="" />
                    杉药妆店 浅草店
                  </div>
                  <p className="mail-code">邮编：111-0032</p>
                  <p className="addr">地址：东京都台东区浅草 1丁目29-1</p>
                  <p className="open-time">营业时间：9:00～23:30</p>
                </div>
              </div>
            </div>
            <div className={cls(styles["shop-sect"], styles["shop-extra"])}>
              <h5 className={cls(styles["shop-header"], styles["text-small"])}>
                杉药局 新桥站前店
              </h5>
              <p>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编：105-0004</p>
              <p>
                地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：东京都港区新桥1丁目12-9新桥PLACE
                1F
              </p>
              <p>营业时间：工作日/节庆日08:00~23:00</p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;周六周日10:00~23:00
              </p>
            </div>
            <div className={styles["shop-sect"]}>
              <h4>&lt; 大阪店铺 &gt;</h4>
              <div className={styles["list"]}>
                <div className={styles["list-item"]}>
                  <div className={styles["list-head"]}>
                    <img src={Shop4} alt="" />
                  </div>
                  <div className={styles["location"]}>
                    <img src={LocationIcon} alt="" />
                    杉药妆店 心斋桥店
                  </div>
                  <p className="mail-code">邮编：542-0085</p>
                  <p className="addr">地址：大阪府大阪市中桥1丁目3-22</p>
                  <p className="open-time">营业时间：10:00～24:00</p>
                </div>
              </div>
            </div>
            <section className={styles["shop-list"]}>
              <div
                className={cls(styles["shop-sect"], styles["shop-extra"])}
                style={{ marginTop: "4em" }}
              >
                <h5
                  className={cls(styles["shop-header"], styles["text-small"])}
                >
                  杉药妆店 道顿掘东店
                </h5>
                <p>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编：542-0071</p>
                <p>
                  地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：大阪府大阪市中央区道顿据一丁目2-1DO
                  B0X103号
                </p>
                <p>营业时间：00:00~23:59</p>
              </div>
              <div className={cls(styles["shop-sect"], styles["shop-extra"])}>
                <h5
                  className={cls(styles["shop-header"], styles["text-small"])}
                >
                  杉药局瓦町一丁目店
                </h5>
                <p>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编：541-0048</p>
                <p>
                  地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：大阪府大阪市中央区瓦町一丁目6-10JP
                  BLDG.1F
                </p>
                <p>营业时间：工作日08:00~22:00周六周日/节庆日09:00~22:00</p>
              </div>
              <div className={cls(styles["shop-sect"], styles["shop-extra"])}>
                <h5
                  className={cls(styles["shop-header"], styles["text-small"])}
                >
                  杉药局LINKSUMEDA店
                </h5>
                <p>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编：530-0011</p>
                <p>
                  地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：大阪府大阪市北区大深町1-1YODOBASHI梅田TOWER地下1F
                </p>
                <p>营业时间：09:30~22:00</p>
              </div>
              <div className={cls(styles["shop-sect"], styles["shop-extra"])}>
                <h5
                  className={cls(styles["shop-header"], styles["text-small"])}
                >
                  杉药妆店北心斋桥店
                </h5>
                <p>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编：542-0081</p>
                <p>
                  地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：大阪府大阪市中央区南船场三丁目5-17GATO心高桥筋BLDG.
                </p>
                <p>营业时间：工作日08:00~23:00周六周日/节庆日09:00~23:00</p>
              </div>
              <div className={cls(styles["shop-sect"], styles["shop-extra"])}>
                <h5
                  className={cls(styles["shop-header"], styles["text-small"])}
                >
                  杉药局梅田店
                </h5>
                <p>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编：530-0012</p>
                <p>
                  地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：大阪府大阪市北区芝田一丁目1-23
                </p>
                <p>营业时间：07:00~23:00</p>
              </div>
            </section>
          </section>

          <section className={styles["bottom-logo"]}>
            <img src={Logo3} alt="" />
          </section>
        </section>
      </div>
    </>
  );
}

export default App;
