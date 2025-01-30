import React, { useState } from "react";
import "./nav.css";
import logo from "./pic/logo.png";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Nav = () => {

  const [Show, setShow] = useState(false);
  const close = (params) => {
    setShow(false)
  }
  return (
    <div className="nav d-flex">
      <div className="right">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="left">
        <ul>
          <li><a href="">Gallery</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">About</a></li>
          <li><a href="#services">Services</a></li>
        </ul>
      </div>
      <button
        className="icon-menu menu"
        onClick={(params) => {
          setShow(true);
        }}
      >
        <IoMenu />
      </button>
      {Show && (
        <div className="menulist">
          <ul className="model">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setShow(false);
                }}
              >
                {" "}
                <IoMdClose />
              </button>
            </li>
            <li >
            <a onClick={close} href="#about">About</a>
            </li>
            <li>
            <a onClick={close} href="#founder">founder</a>
            </li>
            <li>
            <a onClick={close} href="#contact">Contact</a>
            </li>
            <li>
            <a onClick={close} href="#Projects">Projects</a>
            </li>
          
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
