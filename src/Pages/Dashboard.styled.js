import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 100%;
  padding: 30px 10px ;
  
  svg {
    color: var(--blue);
    filter: drop-shadow(2px 2px 1px #fff);
  }

  img {
      width: 120px;
  }
`;

export const ContainerSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px 10px;
  position: sticky;
  top: 0;
  z-index: 2;

  input {
    width: 100%;
    height: 32px;
    border-radius: 10px;
    padding: 19px 0;
    padding-left: 35px;
    margin-left: -20px;
    border: 1px var(--gray) solid;
    
  }

  svg {
    position: relative;
    left: 15px;
    color: var(--gray);
  }
`;

export const ContainerFilter = styled.div`
  margin: -10px 0;
  padding: 0 10px;
  display: flex;
  justify-content: flex-start;
  gap: 5px;
  position: sticky;
  top:50px;
  width: 100%;
  z-index: 2;

  button {
    border: unset;
    padding: 10px 10px;
    background-color: unset;
  }

  button:hover {
    color: var(--blue);
    border-bottom: 1px var(--blue) solid;
  }

  span {
      height: 20px;
      border-left: 1.5px var(--gray) solid;
      align-self: center;
  }
`;

export const ContainerProduct = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
  padding: 10px;
  margin-top: 5px;
  height: 70%;
  overflow-y: scroll;
`;

export const Wrapper = styled.div`
height:100vh;
`;