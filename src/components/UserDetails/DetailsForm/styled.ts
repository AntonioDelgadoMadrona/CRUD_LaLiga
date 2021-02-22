import styled from "styled-components";

export const ContainerInput = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-template-rows: repeat(2, auto);
  height: auto;
  min-height: 300px;

  background-color: #0C1B23;
  padding: 20px;
  border-radius: 10px;
  justify-content: space-between;
  box-shadow: 0 2px 2px rgb(0 0 0 / 10%);
  margin-bottom: 30px;
  box-sizing: border-box;

  & > div {
    margin-bottom: 20px;
    overflow: hidden;
    align-self: center;
  }
`;

export const StyledImg = styled.div`
  width: 120px;
  height: 120px;
  grid-column: 1 / -1;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: center;

  & img,
  & svg {
    position: relative;
    float: left;
    width: 90%;
    height: 90%;
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

  background-color: #0C1B23;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 2px rgb(0 0 0 / 10%);

  & > button:first-child {
    margin-right: 20px
    
  }
`;
