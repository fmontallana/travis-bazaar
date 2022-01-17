import React, { useState } from "react";
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
import ProductDetails from '../Components/ProductDetails'
import { useNavigate } from 'react-router-dom'
import {sweaterSmiley, hoodieSk8, hoodieDevil, hoodieCry, hoodiePurple } from '../Assets/index'



export default function Dashboard() {

  let navigate = useNavigate()
  const [isMenu, setIsMenu] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const [productList, setProductList] = useState([
    {
      title: "Sweater Smiley",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt alias non mollitia, maiores cum quo quae necessitatibus itaque magni libero iusto exercitationem inventore doloribus deleniti quas aliquid pariatur iste? Commodi",
      img: [sweaterSmiley],
      price: 699,
      colors: ["black", "yellow"]
    },
    {
      title: "Sk8",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, a quos. Quam fugit repellat esse dignissimos mollitia beatae vitae debitis ab eveniet commodi? Sequi iusto numquam saepe mollitia dolor eum!",
      img: [hoodieSk8],
      price: 699,
      colors: ["black"]
    }, 
    {
      title: "Hoodie Purple",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, a quos. Quam fugit repellat esse dignissimos mollitia beatae vitae debitis ab eveniet commodi? Sequi iusto numquam saepe mollitia dolor eum!",
      img: [hoodiePurple],
      price: 699,
      colors: ["black"]
    }, 
    {
      title: "Hoodie Cry",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt alias non mollitia, maiores cum quo quae necessitatibus itaque magni libero iusto exercitationem inventore doloribus deleniti quas aliquid pariatur iste? Commodi",
      img: [hoodieCry],
      price: 899,
      colors: ["black", "yellow"]
    },
    {
      title: "Hoodie Devil",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt alias non mollitia, maiores cum quo quae necessitatibus itaque magni libero iusto exercitationem inventore doloribus deleniti quas aliquid pariatur iste? Commodi",
      img: [hoodieDevil],
      price: 999,
      colors: ["black", "yellow"]
    },
    {
      title: "Sweater Smiley",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt alias non mollitia, maiores cum quo quae necessitatibus itaque magni libero iusto exercitationem inventore doloribus deleniti quas aliquid pariatur iste? Commodi",
      img: [sweaterSmiley],
      price: 699,
      colors: ["black", "yellow"]
    },
    {
      title: "Sk8",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, a quos. Quam fugit repellat esse dignissimos mollitia beatae vitae debitis ab eveniet commodi? Sequi iusto numquam saepe mollitia dolor eum!",
      img: [hoodieSk8],
      price: 699,
      colors: ["black"]
    }, 
    {
      title: "Hoodie Purple",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, a quos. Quam fugit repellat esse dignissimos mollitia beatae vitae debitis ab eveniet commodi? Sequi iusto numquam saepe mollitia dolor eum!",
      img: [hoodiePurple],
      price: 699,
      colors: ["black"]
    }, 
    {
      title: "Hoodie Cry",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt alias non mollitia, maiores cum quo quae necessitatibus itaque magni libero iusto exercitationem inventore doloribus deleniti quas aliquid pariatur iste? Commodi",
      img: [hoodieCry],
      price: 899,
      colors: ["black", "yellow"]
    },
    {
      title: "Hoodie Devil",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt alias non mollitia, maiores cum quo quae necessitatibus itaque magni libero iusto exercitationem inventore doloribus deleniti quas aliquid pariatur iste? Commodi",
      img: [hoodieDevil],
      price: 999,
      colors: ["black", "yellow"]
    },
    
  ])

  console.log(productList)
  const handleHideMenu = () => {
    setIsMenu(true);
    console.log(isMenu);
  };

  const handleShowProduct = () => {
    setShowProduct(showProduct ? false : true)
    console.log(showProduct)
  }


  return (
    <Wrapper>
      {isMenu && (
        <Menu
          setIsMenu={setIsMenu}
          isMenu={isMenu}
        />
      )}
      {showProduct && <ProductDetails setShowProduct={setShowProduct} />}
      <Header>
        <RiMenu4Fill onClick={() => handleHideMenu()} size={30} />
        <img src={travisBranding} alt="travis branding logo" />
        <BsCart4 onClick={() => navigate('/cart')} size={30} />
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
        {productList.map((product, index) => (
          <Product
            key={index}
            onClick={() => handleShowProduct()}
            productName={product.title}
            price={product.price}
            src={product.img[0]}
            like={'#21C6E9'}
          />
        ))}
      </ContainerProduct>
      <Footer />
    </Wrapper>
  );
}
