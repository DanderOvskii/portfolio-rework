import React from "react";
import SocialButtons from "@/components/buttons/socialButtons";

const Footer = () => {
    return (
        <>
            <footer className="h-150 w-screen bg-black z-9  pl-align-left pr-align-left justify-between relative flex flex-col md:flex-row md:h-75"> 

                <div className="screen relative w-full flex flex-col items-start ">
                     <p className="text-ds-yellow font-jose title text-[50px] mt-5">socials</p>
                   
                <SocialButtons horizontal={ true} text={true}/>
                </div>

                
                <div className="screen relative w-full flex flex-col items-start md:items-end">
                    <div className="text-right">
                        <p className="title mb-25px text-[50px] ">let&apos;s work <br/> together</p>
                        <a href="/contact" className=" no-underline text-just-white text-subtitle transition-all ease-in-out duration-200 hover:text-header-color " >
                            <button className="button48" role="button"><span>contact me</span></button>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};
export default Footer;