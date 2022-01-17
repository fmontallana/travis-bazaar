import React, { useState } from 'react'
import styled from 'styled-components'
import Footer from '../Components/Footer'
import HeaderBack from '../Components/HeaderBack'
import Product from '../Components/Product'
import { ContainerProduct } from './Dashboard.styled'
import { sweaterSmiley, hoodieSk8, hoodieDevil, hoodieCry } from '../Assets/index'



export default function Favorites() {

    const [productList, setProductList] = useState([
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
        }
    ])

   
    return (
        <div>
            <HeaderBack title="Favorites" />
            <ContainerProduct>
                {productList.map((product, index) => (
                    <Product
                        key={index}
                        productName={product.title}
                        price={product.price}
                        src={product.img[0]}
                        like="tomato"
                    />
                ))}

            </ContainerProduct>
            <Footer />
        </div>
    )
}
