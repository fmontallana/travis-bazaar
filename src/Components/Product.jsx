import React from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import noImgProduct from "../Assets/placeholder-product-image.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
  max-width: 155px;
  max-height: 250px;
  border-radius: 10px;

  > svg {
    color: white;
  }

  p,
  h3 {
    margin: 0;
    padding: 0;
  }

  h3 {
    margin-top: -10px;
  }
`;

const Img = styled.div`
  height: 150px;
  width: 150px;
  margin-top: -30px;
  
  > div {
    background: url(${({ src }) => src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
    border: 1px rgba(122, 122, 122, 0.397) solid;
    overflow: hidden;
    height: 150px;
    width: 150px;


      &:hover {
        
        cursor: pointer;
      }
  }

  

  img {
    height: 150px;
    width: 150px;
    border: 1px gray solid;
    border-radius: 10px;
  }
`;

export default function Product({
  onClick,
  src = noImgProduct,
  productName = "Product Name",
  price = 0,
  like
}) {
  return (
    <Container>
      {like == "tomato" ? <AiFillHeart 
        color={like}
        size={20}
        style={{
          position: "relative",
          transform: "translate(55px, 10px)",
        }}
      /> : <AiOutlineHeart
        color={like}
        size={20}
        style={{
          position: "relative",
          transform: "translate(55px, 10px)",
        }}
      />}

      <Img src={src}>
        {/* <img onClick={onClick} src={src} /> */}
        <div onClick={onClick}></div>
      </Img>

      <p>{productName}</p>
      <h3>₱ {price}</h3>
    </Container>
  );
}
