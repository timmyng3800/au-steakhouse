import React from "react";
import styles from "../mystyle.module.css";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}>
        <div className={styles.centered}>
          <a href="/menu">
            <button class="btn">
              <span class="icon">
                <svg viewBox="0 0 175 80" width="40" height="40">
                  <rect width="80" height="15" fill="#f0f0f0" rx="10"></rect>
                  <rect
                    y="30"
                    width="80"
                    height="15"
                    fill="#f0f0f0"
                    rx="10"
                  ></rect>
                  <rect
                    y="60"
                    width="80"
                    height="15"
                    fill="#f0f0f0"
                    rx="10"
                  ></rect>
                </svg>
              </span>
              <span class="text">MENU</span>
            </button>
          </a>
        </div>
        <div class={styles.textbottom}>
          © 2023, AU steakhouse. All rights reserved{" "}
        </div>
      </div>
    </div>
  );
};

export default Home;
