import React from "react";
import dynamic from "next/dynamic";

const PianoScene = dynamic(() => import("@/components/3d/scenes/pianoScene"), { ssr: false });
const Welkom = () => {
    return (
        <div id="welkom" className="container">
            <div className="half-container">
                <div>
                    <p className="title">Hi! I Am</p>
                    <p className="title">Dander Siegers</p>
                </div>
            </div>
            <div className="half-container">
                <PianoScene/>
            </div>
        </div>

    );
};
export default Welkom;