import styled from "styled-components";

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
    margin-top: -10px;
    position: fixed;
    width: 270px;
    height: 100vh;
    background-color: white;
    z-index: 3;

    box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.5);
    -webkit-box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.5);
    -moz-box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.5);

    animation-name: show;
    animation-duration: .7s;
    animation-direction: normal;
    @keyframes show {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(0);
        }
    }

    >svg {
        color: var(--blue);
        position: absolute;
        right: 20px;
        top: 20px;
    }

    > div {
        margin-left: 40px;
        display: flex;
        justify-content: center;

        svg {
            color: var(--blue);
        }

        > a {
            padding-left: 10px ;
            text-decoration: none;
            color: var(--gray);
            
        }
    }

`;
export const MenuLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: inherit;
    margin-bottom: 20%;

    > div {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        svg {
            color: var(--blue);
        }

        > a {
            padding-left: 10px ;
            text-decoration: none;
            color: var(--gray);

        }
    }

`;
export const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;
    margin-left: 0;
    margin-top: 50px;
    margin-bottom: 20px;

    /* svg {
        width: inherit;
        align-self: flex-end;
        justify-self: flex-end;
    } */

    img {
        height: 50px;
        width: 50px;
        border-radius: 100%;
        margin-left: -90px;
    }

    > div {
        display: flex;
        flex-direction: column;
        height: inherit;

        h4, p {
            margin: 0;
            
        }

        h4 {
            width: 150px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        p {
            font-size: .75rem;
            text-transform: uppercase;
        }

    }
`;