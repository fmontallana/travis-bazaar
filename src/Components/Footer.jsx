import React from "react";
import { FooterContainer } from "./Footer.styled";
import {
  IoHomeOutline,
  IoCartOutline,
  IoHeartOutline,
  IoPersonCircleOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <FooterContainer>
      <Link to="/dashboard"><IoHomeOutline size={25} /> </Link>
      <Link to="/cart"><IoCartOutline size={25} /></Link>
      <Link to="/favorites"><IoHeartOutline size={25} /></Link>
      <Link to="/profile"><IoPersonCircleOutline size={25} /></Link>
    </FooterContainer>
  );
}
