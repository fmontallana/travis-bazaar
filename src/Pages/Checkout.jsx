import React from 'react'
import styled from 'styled-components'
import HeaderBack from '../Components/HeaderBack'
import { MdEdit } from 'react-icons/md'
import { IoMdCheckmarkCircle, IoIosArrowBack } from 'react-icons/io'
// import { IoIosArrowBack } from 'react-icons/io5'
import { MdPayment } from 'react-icons/md'
import { GrDeliver } from 'react-icons/gr'
import { FaCcApplePay, FaCcPaypal } from 'react-icons/fa'
import { Button } from '../Components/Button.styled'
import { useNavigate } from 'react-router-dom'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    gap: 10px;
`
const Address = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 20px;
    gap: 10px;

    * {
        margin: 0;
    }

    
`
const AddressContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: white;
    padding: 0 10px;
    border-radius: .5pc;
    color: var(--gray);
    box-shadow: 1px 1px 2px rgba(32, 32, 32, 0.5);

    > div {
        display: flex;
        flex-direction: column;
        padding: 15px;

        > p {
            width: 220px;
            padding: 2px 0;
            color: unset;
            font-size: .85rem;
        }

        > p:first-of-type {
            font-weight: bold;
            font-size: 1rem;
            color: var(--black);
        }
        
    }

`
const BillingInformation = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px;

    * {
        margin: 0;
    }

    > div {

        margin-top: 10px;
        background-color: white;
        padding: 10px 15px;
        border-radius: .5pc;
        box-shadow: 1px 1px 2px rgba(32, 32, 32, 0.5);

        
        > div {
            
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            color: var(--gray);
            
            &:last-child {
                margin-top: 20px;
            }

            > p:first-of-type {
                width: 130px;
            }

            > span {
                width: 100px;
            }

            > p:last-of-type {
                color: #202020c1;
                font-weight: bold;
            }

            
        }
    }
    
    
`
const PaymentMethod = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    gap: 10px;
    * {
        margin: 0;
    }

    > div {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        padding: 0 10px;

        > div {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            
            svg {
                height: 30px;
                width: 30px;
            }
            p {
                font-size: .8rem;
                font-weight: bold;
            }
        }
    }
`

const Header = styled.div`

    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 20px;
    top: 0;
    

    svg {
        position: absolute;
    }

    > h3 {
        margin: 0 auto;
    }
`


export default function Checkout({setShowCheckout}) {
    let navigate = useNavigate()

    const handleShowCheckout =()=>{
        setShowCheckout(false)
        console.log('close')
    }

    return (
        <Wrapper>
            <Header>
                <IoIosArrowBack size={30} onClick={()=>navigate(-1)} />
                <h3>Checkout</h3>
            </Header>
            <Address>
                <h4>Delivery address</h4>
                <AddressContainer>
                    <IoMdCheckmarkCircle color={"#21C6E9"} size={20} />
                    <div>
                        <p>Home</p>
                        <p>(+639) 561 236 652</p>
                        <p>Dasmariñas City, Cavite</p>
                    </div>
                    <MdEdit size={20} />
                </AddressContainer>
                <AddressContainer>
                    <IoMdCheckmarkCircle size={20} />
                    <div>
                        <p>Office</p>
                        <p>(+639) 561 236 652</p>
                        <p>Silang, Cavite</p>
                    </div>
                    <MdEdit size={20} />
                </AddressContainer>
            </Address>
            <BillingInformation>
                <h4>Billing information</h4>
                <div>
                    <div>
                        <p>Delivery Fee</p>
                        <span>:</span>
                        <p>₱150</p>
                    </div>
                    <div>
                        <p>Subtotal</p>
                        <span>:</span>
                        <p>₱1795</p>
                    </div>
                    <div>
                        <p>Total</p>
                        <span>:</span>
                        <p>₱1945</p>
                    </div>
                </div>
            </BillingInformation>
            <PaymentMethod>
                <h4>Payment Method</h4>
                <div>
                    <div>
                        <GrDeliver />
                        <p>COD</p>
                    </div>
                    <div>
                        <FaCcApplePay />
                        <p>Apple Pay</p>
                    </div>
                    <div>
                        <FaCcPaypal />
                        <p>Paypal</p>
                    </div>
                    <div>
                        <MdPayment />
                        <p>Credit Card</p>
                    </div>
                </div>
            </PaymentMethod>
            <Button>
                <button>Place Order</button>
            </Button>
        </Wrapper>
    )
}
