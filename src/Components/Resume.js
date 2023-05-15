import React from "react";
import logo from "./ResumeNew.png"



export  default function Resume() {
    return (
        <div className="dhall">
        <img src={logo} alt="resume" className="bg-image hover-overlay hover-zoom hover-shadowv dhall " height={350}
    width={700}
    style={{ alignSelf: 'center' }} />
    </div>
    );
}
