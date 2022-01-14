import styled from 'styled-components'

export const Wrapper = styled.div`
    width: inherit;
    height: 100vh;
    overflow-y: scroll;

`
export const Subtotal = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding: 0 25px;
`
export const CheckoutBtn = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;

    button {
        width: 200px;
        height: 50px;
        border-radius: 10pc;
        border: unset;
        background-color: var(--blue);
        color: white;
        font-weight: bold;
        font-size: 1rem;

    }
`
export const CartItemContainer = styled.div`
    padding-bottom: 20%;
`
