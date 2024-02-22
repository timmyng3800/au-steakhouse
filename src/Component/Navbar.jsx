import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const NavBar = () => {
  const nav1 = [
    {
      id: 1,
      description:
        "PT2.TV 161 Mega Grand World Ha Noi, Nghia Tru, Van Giang, Hung Yen",
      icon: <CiLocationOn className="text-white " size={23} />,
    },
    {
      id: 2,
      description: "0899 615 461",
      icon: <FiPhoneCall className="text-white " size={23} />,
      href: "tel:+84899615461",
    },
  ];

  const nav2 = [
    {
      icon: <FaFacebook size={23} />,
      link: "https://www.facebook.com/profile.php?id=61553612783945",
    },
    {
      icon: <FaInstagram il size={25} />,
      link: "https://www.instagram.com/au.steakhouse/?igsh=MWEyNGt4MHNyb3NuZw%3D%3D&utm_source=qr&fbclid=IwAR1Kd12k1i49tqE0AoLGAA1v9jCdHW9SBqtL2Gyc4jWrIkwpfBX1k8pvvpg",
    },
  ];

  return (
    <div className="bg-black py-6 flex flex-col justify-center items-center content-center md:flex-row ">
      <div className=" flex flex-col pb-5 md:pb-0 md:flex-row md:mr-48 ">
        {nav1.map((item) => {
          return (
            <div
              key={item.id}
              className=" flex flex-row mx-10 my-3 self-center "
            >
              <a
                href={item.href}
                className=" flex flex-row mx-10 my-3 self-center "
              >
                <p className="text-white text-center pr-4"> {item.icon}</p>
                <p className="text-white text-center">{item.description}</p>
              </a>
            </div>
          );
        })}
      </div>

      <div className="flex flex-row ">
        {nav2.map((item) => {
          return (
            <div key={item.id} className=" flex flex-row mx-4">
              <a href={item.link}>
                <p className="text-white mx-2"> {item.icon}</p>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
