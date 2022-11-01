import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";

const Footer = () => {
    return (
        <footer className="footer  bg-slate-700  text-white p-32">
            <div>
                <Link to="/">
                    <img src={logo} alt="logo" className="w-16 h-16"></img>
                </Link>
                <p>
                    ACME Industries Ltd.
                    <br />
                    Providing reliable tech since 1992
                </p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <Link className="link link-hover">Branding</Link>
                <Link className="link link-hover">Design</Link>
                <Link className="link link-hover">Marketing</Link>
                <Link className="link link-hover">Advertisement</Link>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link className="link link-hover">About us</Link>
                <Link className="link link-hover">Contact</Link>
                <Link className="link link-hover">Jobs</Link>
                <Link className="link link-hover">Press kit</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link className="link link-hover">Terms of use</Link>
                <Link className="link link-hover">Privacy policy</Link>
                <Link className="link link-hover">Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;
