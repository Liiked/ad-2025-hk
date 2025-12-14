import { useRef, useEffect, useState } from "react";
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

// 导入Swiper库
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import classNames from "classnames";

const PlayInterval = 3000 * 20; // 自动轮播间隔时间（毫秒）

export default function Sec2() {
  const swiperRef = useRef<any>(null);
  const observerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // 检测轮播区域是否进入视口
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5, // 当50%的元素进入视口时触发
        rootMargin: "0px 0px -100px 0px", // 微调触发区域
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);

  // 根据可见性控制自动轮播
  useEffect(() => {
    if (swiperRef.current) {
      // ts-ignore
      const swiper = (swiperRef.current as any).swiper;
      if (isVisible) {
        swiper.autoplay.start();
      } else {
        swiper.autoplay.stop();
      }
    }
  }, [isVisible]);

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
        <div
          className={styles["desc"]}
          style={{
            width: "60%",
            position: "relative",
            left: "-4em",
            top: "-8em",
          }}
        >
          <p>※1：調理膚況成分：源自人體脂肪間葉細胞外泌體（不含幹細胞）。</p>
          <p>※2： 指如白玉般細緻、透亮且富有光澤的肌膚狀態。</p>
          <p>※3：調理膚況成分：穀胱甘肽、熊果素、卵磷脂。</p>
        </div>
        <img
          src={title}
          style={{ width: "60%", marginTop: "4em", marginLeft: "8%" }}
          alt=""
        />

        <div ref={observerRef}>
          <div className={styles["scroll"]}>
            <Swiper
              ref={swiperRef}
              modules={[Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: PlayInterval,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              className={styles["swiper-container"]}
            >
              <SwiperSlide className={styles["swiper-slide"]}>
                <img
                  className={classNames(
                    styles["scroll-item"],
                    styles["scroll-item-1"]
                  )}
                  src={scroll1}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide className={styles["swiper-slide"]}>
                <img
                  className={classNames(
                    styles["scroll-item"],
                    styles["scroll-item-2"]
                  )}
                  src={scroll2}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide className={styles["swiper-slide"]}>
                <img
                  className={classNames(
                    styles["scroll-item"],
                    styles["scroll-item-3"]
                  )}
                  src={scroll3}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide className={styles["swiper-slide"]}>
                <img
                  className={classNames(
                    styles["scroll-item"],
                    styles["scroll-item-4"]
                  )}
                  src={scroll4}
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section className={styles["footer"]}>
        <div className={styles["desc"]}>
          <p>※1 緊緻成分：人源基因重組寡肽-1（EGF）。</p>
          <p>※2 保濕成分：神經醯胺 AP、神經醯胺 NP。</p>
          <p>※3 保濕成分：玻尿酸、羥丙基三甲基氯化銨。</p>
          <p>※4 保濕成分：Atelo 膠原蛋白。</p>
        </div>
        <img src={logo} style={{ width: "40%", marginTop: "2em" }} alt="" />
      </section>
    </div>
  );
}
