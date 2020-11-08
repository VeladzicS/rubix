import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const MyForm = styled.form`
  width: 100%;
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  position: relative;
`;

export const MyFormInuput = styled.input`
  width: 100%;
  border: transparent;
  background: var(--clr-white);
  padding: 0.7rem 0.7rem 0.7rem 2.5rem;
  font-size: 1rem;
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
  font-size: 1.2rem;
  position: absolute;
  top: 1.5rem;
  left: 0.5rem;
`;
