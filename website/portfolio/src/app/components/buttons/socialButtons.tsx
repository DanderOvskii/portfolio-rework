import React from "react";
import Link from "next/link";
import { socialItems } from "@/components/buttons/socialConfig";
import { SocialButtonProps } from "@/types";


  const SocialButtons = ({text = false,horizontal = false}:SocialButtonProps) => {
     return (
    <div className={` flex gap-1 ${horizontal ? 'flex-col' : 'flex-row'}  `}>
      {socialItems.map((item, index) => {
        const Icon = item.icon

        return (
          <Link
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="flex flex-row gap-2.5 alighn-center "
          >
            <Icon  />
            {text &&<p className="subtitle transition-all duration-500 hover:tracking-[8px] hover:text-ds-yellow">{item.label}</p>}
          </Link>
        )
      })}
    </div>
  )
  }
  export default SocialButtons;
