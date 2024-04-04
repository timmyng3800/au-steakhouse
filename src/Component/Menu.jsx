import React from "react";
import styles from "../mystyle.module.css";

import meal2 from "../asset/Menu/2.png";
import meal3 from "../asset/Menu/3.png";
import meal4 from "../asset/Menu/4.png";
import meal5 from "../asset/Menu/5.png";
import meal6 from "../asset/Menu/6.png";
import meal7 from "../asset/Menu/7.png";
import meal8 from "../asset/Menu/8.png";
import meal9 from "../asset/Menu/9.png";
import meal10 from "../asset/Menu/10.png";
import meal11 from "../asset/Menu/11.png";
import meal12 from "../asset/Menu/12.png";
import meal13 from "../asset/Menu/13.png";
import meal14 from "../asset/Menu/14.png";
import meal16 from "../asset/Menu/16.png";
import meal17 from "../asset/Menu/17.png";
import meal18 from "../asset/Menu/18.png";
import meal19 from "../asset/Menu/19.png";
import meal20 from "../asset/Menu/20-update.png";

import logo from "../asset/logo.png";

import { PacmanLoader } from "react-spinners";
const Menu = () => {
  const menu = [
    {
      picture: meal2,
    },
    {
      picture: meal3,
    },
    {
      picture: meal4,
    },
    {
      picture: meal5,
    },
    {
      picture: meal6,
    },
    {
      picture: meal7,
    },
    {
      picture: meal8,
    },
    {
      picture: meal9,
    },
    {
      picture: meal10,
    },
    {
      picture: meal11,
    },
    {
      picture: meal12,
    },
    {
      picture: meal13,
    },
    {
      picture: meal14,
    },
    {
      picture: meal16,
    },
    {
      picture: meal17,
    },
    {
      picture: meal18,
    },
    {
      picture: meal19,
    },
    {
      picture: meal20,
    },
  ];

  return (
    <div>
      <div className="bg-black flex content-center  justify-center ">
        <a href="/">
          <img
            className="p-8 rounded-t-lg w-96 md:w-100 "
            src={logo}
            alt="logo"
          />
        </a>
      </div>
      <div className={styles.backgroundMenu}>
        <div className=" border-gray-200 flex-col items-center  grid md:grid-cols-2 lg:grid-cols-3 ">
          {menu.map((item) => {
            return (
              <img
                className="p-8 rounded-t-lg w-96 md:w-100 hover:scale-110 duration-200 "
                src={item.picture}
                alt="menu"
                key={item.picture}
              />
            );
          })}
        </div>
      </div>
      <div className="bg-black text-white  flex content-center  justify-center ">
        <p className="mb-6">© 2023, AU steakhouse. All rights reserved</p>
      </div>
    </div>
  );
};

export default Menu;
