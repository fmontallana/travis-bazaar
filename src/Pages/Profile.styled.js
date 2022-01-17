import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 360px;
    height: 100vh;
    overflow-y: scroll;
`
export const ProfilePhoto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

    img {
        height: 150px;
        width: 150px;
        border-radius: 100%;
        margin-bottom: -10px;
    }

    h3 {
        margin-bottom: -15px;
    }

`
export const ProfileIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 10px;
        background-color: white;
        border-radius: 10px;
        width: 100px;

        > svg {
            border-radius: 100%;
            height: 40px;
            width: 40px;
            padding: 2px;
        }

        > p {
            margin: 2px 0;
        }

        > h4 {
            color: var(--blue);
            margin: 5px 0;
        }
    }

`
export const ProfileDetails = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px;

`
export const Details = styled.div`

    height: 30vh;
    overflow-y: scroll;
    background-color: white;
    padding: 0 10px;
    border-radius: .5pc;
    border: .5px var(--gray) solid;
    margin-bottom: 50px;
    
    > div {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 10px;

        p {
            font-weight: bold;
            margin: 0;
            padding: 10px 0;

        }
    }

`

