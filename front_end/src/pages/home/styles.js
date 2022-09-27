import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
