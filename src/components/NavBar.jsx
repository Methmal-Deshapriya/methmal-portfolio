import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import React from "react";
import logo from "../assets/des.png";
const NavBar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-3xl font-normal text-neutral">Md</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/methmal-deshapriya-988b3b2a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
          target="_blank"
        >
          <FaLinkedin className="cursor-pointer" />
        </a>
        <a href="https://github.com/Methmal-Deshapriya" target="_blank">
          <FaGithub className="cursor-pointer" />
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=100081456306006&mibextid=ZbWKwL"
          target="_blank"
        >
          <FaFacebook className="cursor-pointer" />
        </a>

        <a href="https://www.instagram.com/methmaldeshapriya/profilecard/?igsh=eXdweHE3cmdlbzI5 ">
          <FaInstagram className="cursor-pointer" />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
