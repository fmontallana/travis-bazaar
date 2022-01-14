import React, { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import { RiMenu4Fill } from "react-icons/ri";
import { BsCart4 } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import Product from "../Components/Product";
import travisBranding from "../Assets/travis-branding.png";
import {
  Header,
  ContainerSearch,
  ContainerFilter,
  ContainerProduct,
  Wrapper,
} from "./Dashboard.styled";
import Menu from "../Components/Menu";

export default function Dashboard() {
  const [isMenu, setIsMenu] = useState(false);

  
  const handleHideMenu = () => {
    setIsMenu(true);
    console.log(isMenu);
  };


  return (
    <Wrapper>
      {isMenu && (
        <Menu
          setIsMenu={setIsMenu}
          isMenu={isMenu}
        />
      )}

      <Header>
        <RiMenu4Fill onClick={() => handleHideMenu()} size={30} />
        <img src={travisBranding} alt="travis branding logo" />
        <BsCart4 size={30}  />
      </Header>
      <ContainerSearch>
        <BiSearchAlt size={25} />
        <input type="text" placeholder="Search product..." />
      </ContainerSearch>
      <ContainerFilter>
        <button>Popular</button>
        <span></span>
        <button>Latest</button>
        <span></span>
        <button>Top Sales</button>
      </ContainerFilter>
      <ContainerProduct>
        <Product
          productName="Jacket"
          price="200"
          src={"https://picsum.photos/seed/asd/300"}
        />
        <Product src={"https://picsum.photos/seed/as1d/300"} />
        <Product src={"https://picsum.photos/seed/as2d/300"} />
        <Product src={"https://picsum.photos/seed/as3d/300"} />
        <Product
          productName="Jacket"
          price="200"
          src={"https://picsum.photos/seed/asd/200/300"}
        />
        <Product src={"https://picsum.photos/seed/as1d/200/300"} />
        <Product src={"https://picsum.photos/seed/as2d/200/300"} />
        <Product src={"https://picsum.photos/seed/as3d/200/300"} />
      </ContainerProduct>

      <Footer />
    </Wrapper>
  );
}
