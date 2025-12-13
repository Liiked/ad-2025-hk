import { useEffect } from "react";
import "../App.css";
import styles from "./Main.module.scss";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";

export default function Main() {
  useEffect(() => {
    document.title = "活动页";
  }, []);
  return (
    <div className={styles["app"]}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
}
