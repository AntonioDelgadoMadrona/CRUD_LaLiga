import styled from "styled-components";

export const ContainerInput = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-template-rows: repeat(2, auto);

  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  justify-content: space-between;
  box-shadow: 0 2px 2px rgb(0 0 0 / 10%);
  margin-bottom: 20px;

  & > div {
    margin-bottom: 20px;
    overflow: hidden;
  }
`;

export const StyledImg = styled.div`
  width: 100px;
  height: 100px;
  grid-column: 1 / -1;

  & img,
  & svg {
    position: relative;
    float: left;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 50%;
    box-shadow: 0 5px 5px rgb(0 0 0 / 25%);
  }
`;

export const ContainerButton = styled.div`
  width: max-content;
  display: flex;
  justify-content: center;
  margin: 0 auto;

  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 2px rgb(0 0 0 / 10%);

  & > button:first-child {
    margin-right: 20px
    
  }
`;
