import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 30%;
  height: 30px;
  font-size: 1.2rem;
  border-radius: 25px;
  text-align: center;
  margin: 10px;
`;

export const Error = styled.span`
  font-size: 12px;
  color: red;
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
