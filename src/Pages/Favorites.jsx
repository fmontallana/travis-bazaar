import React from 'react'
import styled from 'styled-components'
import Footer from '../Components/Footer'
import HeaderBack from '../Components/HeaderBack'
import Product from '../Components/Product'
import { ContainerProduct } from './Dashboard.styled'

 

export default function Favorites() {
    return (
        <div>
            <HeaderBack title="Favorites" />
            <ContainerProduct>
                <Product like="tomato" />
                <Product like="tomato" />
                <Product like="tomato" />
                <Product like="tomato" />
                <Product like="tomato" />
                <Product like="tomato" />
                <Product like="tomato" />
                <Product like="tomato" />
                <Product like="tomato" />
                <Product like="tomato" />
                
            </ContainerProduct>
            <Footer />
        </div>
    )
}
