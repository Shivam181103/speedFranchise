import React, { Component } from "react";
import "./Footer.css";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { CgCopyright } from "react-icons/cg";

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="main-page">
          <div className="rectangle" />
          <div className="details">
            <div className="phone">
              <h2>Phone</h2>
              <span style={{ color: "red" }}>
                <h2>1800-232-1421</h2>
              </span>
            </div>
            <br />
            <div className="email">
              <h2>Email</h2>
              <span>
                <h2>info@speedforce.com</h2>
              </span>
            </div>
            <br />
            <div className="follow">
              <h2>Follow Us</h2>
              <div className="socialmedia">
                <div className="icons">
                  <BsInstagram />
                  <AiOutlineYoutube />
                  <FiFacebook />
                </div>
              </div>
            </div>
            <br />
          </div>

          <div className="logo">
            <hr />
            <div className="image">
              <div className="rectangle-1"></div>

              <img
                src="https://speedforce.in/wp-content/uploads/2020/07/logo.png"
                alt="image"
              />
            </div>
          </div>
          {/* <CgCopyright/> */}
        </div>
      </>
    );
  }
}
