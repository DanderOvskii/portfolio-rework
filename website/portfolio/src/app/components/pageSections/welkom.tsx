import React from "react";
import dynamic from "next/dynamic";

const PianoScene = dynamic(() => import("@/components/3d/scenes/pianoScene"), { ssr: false });
const Welkom = () => {
    return (
        <div id="welkom" className="container pl-0 pr-0  md:pl-align-left md:pr-align-right">
            <div className="half-container">
                <div className="md:mt-0 mt-[10vh]">
                    <p className="title">Hi! I Am</p>
                    <p className="title ">Dander Siegers</p>
                </div>
            </div>
            <div className="half-container">
                <PianoScene/>
            </div>
        </div>

    );
};
export default Welkom;