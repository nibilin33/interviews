import { useState, useEffect, useRef } from "react";
import styles from "./feed.module.css";
const getData = async () => {
  const res = await fetch("./src/real-world/feed/sample.json");
  return await res.json();
};
const Feed = () => {
  const [feeds, setFeeds] = useState([]);
  const scrollRef = useRef(null);
  let totalFeeds = [];
  let currentSize = 21;
  let timeout = null;
  useEffect(() => {
    getData().then((res) => {
      totalFeeds = res.entries;
      setFeeds(totalFeeds.slice(0, currentSize));
    });
    scrollRef.current.parentElement.addEventListener("scroll", handleScroll);
    return () => {
      scrollRef.current &&
        scrollRef.current.parentElement.removeEventListener(
          "scroll",
          handleScroll
        );
      clearTimeout(timeout);
    };
  }, []);

  function handleScroll() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (currentSize < totalFeeds.length) {
        currentSize += 21;
      }
      setFeeds(totalFeeds.slice(0, currentSize));
    }, 500);
  }
  return (
    <div ref={scrollRef} className={styles.feed}>
      {feeds.map((item) => {
        const imgSrc = item.images["Poster Art"].url;
        return (
          <div className={styles["feed-item"]} key={item.title}>
            <img className={styles["feed-img"]} src={imgSrc}></img>
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};
export default () => {
  return <Feed></Feed>;
};
