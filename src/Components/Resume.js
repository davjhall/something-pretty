import React from "react";
import logo from "./ResumeNew.png";
import Pdf from "../Components/MyResume.pdf";



export  default function Resume() {
    let url = "MyResume.pdf"
    return (
        <div className="dhall">
        <a href={Pdf}  target="_blank">
        <img src={logo} alt="resume" className="bg-image hover-overlay hover-zoom hover-shadow" 
        style={{ alignSelf: 'center' }} />
        </a>
    </div>
    );
}
