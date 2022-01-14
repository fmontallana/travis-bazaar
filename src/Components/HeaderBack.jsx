import React from 'react'
import styled from 'styled-components'
import {IoIosArrowBack} from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

const Wrapper = styled.div`

    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 20px;
    position: sticky;
    top: 0;
    

    svg {
        position: absolute;
    }

    > h3 {
        margin: 0 auto;
    }
`

export default function HeaderBack({title}) {
    let navigate = useNavigate()
    return (
        <Wrapper>
            <IoIosArrowBack size={30} onClick={()=> navigate(-1) } />
            <h3>{title}</h3>
        </Wrapper>
    )
}
