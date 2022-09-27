import styled from "styled-components";

export const SearchSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SearchDiv = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  width: 60%;
  justify-content: space-between;
`;

export const Input = styled.input`
  @media (max-width: 768px) {
    width: 200px;
  }
  width: 30%;
  height: 30px;
  font-size: 1.2rem;
  border-radius: 25px;
  text-align: center;
`;
export const Button = styled.button`
  @media (max-width: 768px) {
    width: 200px;
  }
  font-size: 1.2rem;
  background-color: #b056dc;
  width: 300px;
  height: 2rem;
  border-radius: 30px;
  margin: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const BookSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    justify-content: center;
  }
  margin-top: 40px;
  height: auto;
  justify-content: center;
`;

export const Book = styled.div`
  width: 40%;
  height: auto;
  border: 1px solid black;
  margin: 1px;
`;

export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  div {
    margin-right: 4px;
  }
`;

export const Error = styled.span`
  @media (max-width: 768px) {
    font-size: 20px;
  }
  font-size: 30px;
  color: red;
`;
