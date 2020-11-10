import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const MyForm = styled.form`
  width: 100%;
  margin: 2rem auto;
  position: relative;
`;

export const MyFormInuput = styled.input`
  width: 100%;
  border: transparent;
  background: var(--clr-white);
  padding: 1.5rem 1.5rem 1.5rem 4rem;
  font-size: 1.7rem;
  color: var(--clr-grey-3);
  letter-spacing: var(--spacing);
  margin-top: 1rem;
  border-radius: 4rem;

  &:focus {
    outline: none;
    box-shadow: var(--dark-shadow);
  }
`;

export const SearchIcon = styled(FaSearch)`
  font-size: 2.5rem;
  position: absolute;
  top: 2rem;
  left: 0.5rem;
`;
