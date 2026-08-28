import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <main className="bg-ds-black pl-align-left pr-align-right">{children}</main>;
}
