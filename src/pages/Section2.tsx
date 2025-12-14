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
const PlayInterval = 2000; // 自动轮播间隔时间（毫秒）

export default function Sec2() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex);
  const autoScrollIntervalRef = useRef<number | null>(null);

  // 节流函数 - 优化性能
  const throttle = (func: (...args: unknown[]) => unknown, limit: number) => {
    let inThrottle: boolean;
    return function (this: unknown, ...args: unknown[]) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };

  // 动态滚动效果
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;

      const scrollItems = scrollRef.current.querySelectorAll<HTMLImageElement>(
        `.${styles["scroll-item"]}`
      );
      const viewportWidth = window.innerWidth;

      scrollItems.forEach((item) => {
        const rect = item.getBoundingClientRect();

        // 检查元素是否在视口中
        if (rect.right < 0 || rect.left > viewportWidth) return;

        // 计算项目在视口中的位置（更精确的计算）
        const elementCenter = rect.left + rect.width / 2;
        const viewportCenter = viewportWidth / 2;
        const distanceFromCenter = Math.abs(elementCenter - viewportCenter);

        // 计算影响因子（0-1之间）
        const influence =
          1 - Math.min(distanceFromCenter / (viewportWidth / 2), 0.8);

        // 基于位置计算动态效果
        const opacity = 0.6 + influence * 0.4; // 0.6 - 1.0
        const scale = 0.9 + influence * 0.15; // 0.9 - 1.05
        const brightness = 0.8 + influence * 0.3; // 0.8 - 1.1
        // const translateY = (1 - influence) * 10; // 0 - 10px
        const saturate = 0.9 + influence * 0.2; // 0.9 - 1.1

        // 应用动态样式

        // 最后一个应用x轴偏移
        const isLast = item === scrollItems[scrollItems.length - 1];
        // 第一个应用Y轴偏移
        const isFirst = item === scrollItems[0];

        let transformX = "0em";
        let transformY = "0em";

        if (isLast) {
          // 判断是否是iphone 手机，因为iphone 对translateX 有bug
          const isIphone = /iPhone/.test(navigator.userAgent);
          transformX = isIphone ? "-4em" : "2em";
        }
        if (isFirst) {
          transformY = "-1em";
        }

        item.style.opacity = opacity.toString();
        item.style.transform = `scale(${
          scale > 1 ? 1 : scale
        }) translate(${transformX}, ${transformY})`;
        item.style.filter = `brightness(${
          brightness > 1 ? 1 : brightness
        }) saturate(${saturate > 1 ? 1 : saturate})`;
      });
    };

    // 使用节流函数优化滚动事件（约60fps）
    const throttledHandleScroll = throttle(handleScroll, 16);

    // 添加滚动事件监听器
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", throttledHandleScroll);
      scrollElement.addEventListener("touchmove", throttledHandleScroll);

      // 初始加载时触发一次
      handleScroll();
    }

    // 添加窗口大小变化事件监听器
    const handleResize = throttle(handleScroll, 16);
    window.addEventListener("resize", handleResize);

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", throttledHandleScroll);
        scrollElement.removeEventListener("touchmove", throttledHandleScroll);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 自动轮播逻辑
  const startAutoScroll = () => {
    if (!scrollRef.current) return;

    const scrollElement = scrollRef.current;
    const scrollItems = scrollElement.querySelectorAll<HTMLImageElement>(
      `.${styles["scroll-item"]}`
    );
    const totalItems = scrollItems.length;

    autoScrollIntervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % totalItems;

        // 计算下一个项目的位置并滚动
        if (scrollElement && scrollItems[nextIndex]) {
          // 获取滚动容器的滚动位置
          const scrollLeft = scrollElement.scrollLeft;
          // 获取下一个项目相对于容器的位置
          const itemOffsetLeft = scrollItems[nextIndex].offsetLeft;
          // 计算需要滚动的距离
          const scrollDistance = itemOffsetLeft - scrollLeft;

          scrollElement.scrollTo({
            left: scrollLeft + scrollDistance,
            behavior: "smooth",
          });
        }

        return nextIndex;
      });
    }, PlayInterval);
  };

  const stopAutoScroll = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  };

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
    if (isVisible) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }

    return () => {
      stopAutoScroll();
    };
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
          <div
            className={styles["scroll"]}
            ref={scrollRef}
            onTouchStart={stopAutoScroll}
            onTouchEnd={() => isVisible && startAutoScroll()}
            onMouseDown={stopAutoScroll}
            onMouseUp={() => isVisible && startAutoScroll()}
            onMouseLeave={() => isVisible && startAutoScroll()}
          >
            <img className={styles["scroll-item"]} src={scroll1} alt="" />
            <img className={styles["scroll-item"]} src={scroll2} alt="" />
            <img className={styles["scroll-item"]} src={scroll3} alt="" />
            <img className={styles["scroll-item"]} src={scroll4} alt="" />
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
