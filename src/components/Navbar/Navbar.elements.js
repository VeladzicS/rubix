import styled from "styled-components";

export const Nav = styled.nav`
  margin-top: 5rem;
  width: 20rem;
  height: 2rem;
  display: flex;
  border: 1px solid var(--clr-black);
`;

export const NavItem = styled.button`
  width: 10rem;

  color: var(--clr-black);
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  font-weight: 400;
  transition: var(--transition);
  font-size: 0.875rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

  &:focus {
    background: var(--clr-primary-5);
    outline: none !important;
    color: var(--clr-white);
  }
`;
