import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Curve, AddToCartBtn, ColorsContainer, ProductDetailsContainer, ProductPhoto, Wrapper } from './ProductDetailsStyled'
import { VscCircleFilled } from 'react-icons/vsc'
import { IoIosArrowBack } from 'react-icons/io'
import { AiFillHeart } from 'react-icons/ai'
import longSleeve from '../Assets/long-sleeve.png'

export default function ProductDetails({ setShowProduct }) {

    const handleHideProduct = () => {
        setShowProduct(false)
    }

    return (
        <>
            <Wrapper>
                <ProductPhoto>
                    <div>
                        <IoIosArrowBack size={30} onClick={() => handleHideProduct()} />
                        <AiFillHeart size={30} />
                    </div>
                    <img src={longSleeve} alt="" />
                </ProductPhoto>
                <ProductDetailsContainer>
                    <div>
                        <h4>Casual Henley Long Sleeve</h4>
                        <h3>₱800</h3>
                    </div>
                    <p>TRAVIS MENG have curated a selection of T-Shirts designed by some of London’s finest creatives. All profits go directly to The Childhood Trust, who help some of the 37% of children in London who are affected by issues surrounding poverty.</p>
                    <ColorsContainer>
                        <p>Colors: </p>
                        <VscCircleFilled size={30} color="gray" />
                        <VscCircleFilled size={30} color="black" />
                        <VscCircleFilled size={30} color="orange" />
                        <VscCircleFilled size={30} color="tomato" />
                    </ColorsContainer>
                    <AddToCartBtn>
                        <button>Add to Cart</button>
                    </AddToCartBtn>
                </ProductDetailsContainer>
            </Wrapper>
            <div className="custom-shape-divider-bottom-1642158847">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
        </>
    )
}
