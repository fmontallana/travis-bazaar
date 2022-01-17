import React, {useEffect} from "react";
import { MenuContainer, MenuLinks, Profile } from "./Menu.styled";
import { IoIosExit } from "react-icons/io";
import { IoWallet } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import {
  BsHandbagFill,
  BsFillInfoCircleFill,
  BsFillShieldLockFill,
  BsGearFill,
} from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Menu({
  name = "Firstname Lastname",
  setIsMenu,
  isMenu,
}) {
  let src = "https://picsum.photos/seed/asd/300";
  const handleHideMenu = () => {
    setIsMenu(false);
    console.log(isMenu);
  };

  return (
    <MenuContainer>
      <MdClose size={20} onClick={()=>handleHideMenu()} />
      <Profile>
        <img src={src} alt="" />
        <div>
          <h4>{name}</h4>
          <p>Customer</p>
        </div>
      </Profile>
      <MenuLinks>
        <div>
          <AiFillHeart size={20} />
          <Link to={"/favorites"}>My favorites</Link>
        </div>
        <div>
          <IoWallet size={20} />
          <Link to={"/"}>Wallets</Link>
        </div>
        <div>
          <BsHandbagFill size={20} />
          <Link to={"/cart"}>My orders</Link>
        </div>
        <div>
          <BsFillInfoCircleFill size={20} />
          <Link to={"/about-us"}>About us</Link>
        </div>
        <div>
          <BsFillShieldLockFill size={20} />
          <Link to={"/privacy-policy"}>Privacy policy</Link>
        </div>
        <div>
          <BsGearFill size={20} />
          <Link to={"/settings"}>Settings</Link>
        </div>
      </MenuLinks>
      <div>
        <IoIosExit size={20} />
        <Link to={"/"}>Logout</Link>
      </div>
    </MenuContainer>
  );
}
