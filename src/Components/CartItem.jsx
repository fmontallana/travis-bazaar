import React, {useState} from 'react'
import styled from 'styled-components'
import {AiOutlinePlusCircle,AiOutlineMinusCircle } from 'react-icons/ai'

const CartWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 10px;
    width: 90%;
    padding: 3px;
    margin: 10px auto;
    background-color: #f0f8ff2d;
    border-radius: 10px;

    img {
        height: 75px;
        width: 75px;
        border-radius: 10px;
    }

    >div {
        p {
            margin: 3px 0;
            width: 150px;
        }
    }
    
    >div :last-child {
        font-weight: bold;
    }
    >div :first-child {
        color: #516365;
    }


    >svg {
        height: 25px;
        width: 25px;
        color: var(--blue);
    }
`

export default function CartItem({
    src,productName="Product Name",price=0
}) {

    const [count, setCount] = useState(0)
   
    return (

        <CartWrapper>
            <img src={src} alt="" />
            <div>
                <p>{productName}</p>
                <p>₱{price}</p>
            </div>
            <AiOutlinePlusCircle />
            <h3>{count}</h3>
            <AiOutlineMinusCircle />
        </CartWrapper>
    )
}
