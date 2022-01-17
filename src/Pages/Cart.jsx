import React, {useState} from 'react'
import Footer from '../Components/Footer'
import HeaderBack from '../Components/HeaderBack'
import { Wrapper, CartItemContainer, Subtotal, CheckoutBtn } from './Cart.styled'
import CartItem from '../Components/CartItem'
import Checkout from './Checkout'
import { useNavigate } from 'react-router-dom'

export default function Cart() {
    let navigate = useNavigate()
    
    return (
        <Wrapper>
            <HeaderBack title="Cart" />
            <CartItemContainer>
                <CartItem src={'https://picsum.photos/seed/9/300'} />
                <CartItem src={'https://picsum.photos/seed/8/300'} />
                <CartItem src={'https://picsum.photos/seed/7/300'} />
                <CartItem src={'https://picsum.photos/seed/5/300'} />
            </CartItemContainer>
            <Subtotal>
                <p>Subtotal:</p>
                <h3>₱0</h3>
            </Subtotal>
            <CheckoutBtn>
                <button onClick={()=>navigate('/checkout')}>Checkout</button>
            </CheckoutBtn>
            <Footer />
        </Wrapper>
    )
}
