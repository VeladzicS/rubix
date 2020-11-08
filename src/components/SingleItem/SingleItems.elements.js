import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

export const SingleItemDiv = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1144px;
  height: 100vh;
  padding-top: 5rem;
  position: relative;
`;

export const SingleItemImg = styled.img`
  width: 25rem;
  height: auto;
  padding: 2rem 0;
`;

export const SingleItemTitle = styled.h2`
  font-size: 1.7rem;
  justify-self: flex-start;
  align-self: flex-start;
  color: var(--clr-grey-2);
`;
export const SingleItemDesc = styled.p`
  font-size: 1.3rem;
  text-align: justify;

  h2 {
    font-size: 1.7rem;
    color: var(--clr-grey-2);
    margin-top: 2rem;
  }
`;

export const BackIcon = styled(IoIosArrowBack)`
  font-size: 2rem;
`;

export const SingleItemItemsDiv = styled.div`
  margin: 2rem 0;
`;

export const SingleItemNav = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--clr-grey-1);
  font-weight: bold;
  text-decoration: none;
  position: absolute;
  top: 1rem;
  left: 0;
`;
