import React from "react";
import { NavBar } from "./NavBar"
import { Socials } from './Socials'
import logoBigWhite from "../assets/img/logos/logoBigWhite.svg";
import glasses from "../assets/img/logos/glasses.svg";

export const Header = () => {
  return (
    <header className="h-20 flex bg-black items-center fixed top-0 w-full text-white z-10">
      <div className="container mx-auto h-full flex items-center justify-center lg:justify-between">
        <NavBar/>
        <Socials/>
      </div>
    </header>
  )
};