import styled from "styled-components";

export const Nav = styled.nav`
  margin-top: 5rem;
  width: 40rem;
  height: 4rem;
  display: flex;
  border: 1px solid var(--clr-black);

  @media screen and (max-width: 665px) {
    width: 30rem;
    margin: 5rem auto;
  }
`;

export const NavItem = styled.button`
  width: 20rem;
  color: var(--clr-black);
  padding: 0.5rem 1rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  font-weight: 400;
  transition: var(--transition);
  font-size: 1.8rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

  &:focus {
    background: var(--clr-primary-5);
    outline: none !important;
    color: var(--clr-white);
  }

  @media screen and (max-width: 665px) {
    width: 15rem;
  }
`;
