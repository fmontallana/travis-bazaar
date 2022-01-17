import styled from "styled-components"

export const Wrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    background: linear-gradient(333deg, #ffffff, #f6fdfe, #eefafd, #e5f8fc, #ddf5fb, #d4f3fa, #ccf0f9, #c3eef8);
    height: 100vh;
    width: 360px;
    z-index: 3;
`
export const ProductPhoto = styled.div`
    display: flex;
    flex-direction: column;
    height: 60vh;
    padding: 0 20px;
    padding-top: 10px;

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: -40px;
        z-index: 1;

        svg:last-of-type {
            color: var(--blue);
        }
    }

    >img {
        display: block;
        /* border-radius: 1.5pc 1.5pc 0 0; */
        height: 46vh;
        width: auto;
        margin: auto;
        margin-bottom: -10px;
    }

`
export const ProductDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    margin: 0 auto;
    margin-top: -10px;
    padding: 0 20px;
    height: 100%;
    width: 340px;
    border-radius: 1.5pc 1.5pc 0 0;
    box-shadow: 1px 1px 3px  gray;

    > div:first-child {
        display: flex;
        align-items: baseline;
        justify-content: space-between;

        span {
            font-size: .85rem;
        }

        h3 {
            font-size: 1.25rem;
        }
    }

    > p {
        margin: 0;
        height: 17vh;
        overflow-y: scroll;
        padding: 0;
        color: var(--gray);
    }



`

export const ColorsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
    p {
        padding-right: 10px;
        color: var(--gray);
    }
`

export const AddToCartBtn = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
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