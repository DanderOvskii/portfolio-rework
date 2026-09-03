import React from "react";
import Link from "next/link";
import { socialItems } from "@/components/buttons/socialConfig";


  const SocialButtons = () => {
     return (
    <div className="flex gap-4 ">
      {socialItems.map((item, index) => {
        const Icon = item.icon

        return (
          <Link
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="fill-thai-yellow"
          >
            <Icon />
          </Link>
        )
      })}
    </div>
  )
  }
  export default SocialButtons;
