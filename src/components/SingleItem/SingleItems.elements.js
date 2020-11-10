import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

export const SingleItemDiv = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1144px;
  min-height: 100vh;
  padding-top: 5rem;
  @media screen and (max-width: 440px) {
    padding-top: 2rem;
  }
`;

export const SingleItemTrailerWrapper = styled.div`
  width: 100%;
  height: 550px;
  align-self: flex-start;

  @media screen and (max-width: 1169px) {
    width: 100%;
    height: 450px;
  }
  @media screen and (max-width: 905px) {
    width: 100%;
    height: 350px;
  }

  @media screen and (max-width: 665px) {
    width: 100%;
    height: 250px;
  }
  @media screen and (max-width: 440px) {
    width: 100%;
    height: 200px;
  }
`;

export const SingleItemImg = styled.img`
  width: 50%;
  height: auto;
  max-height: 650px;
  border: 3px solid var(--clr-black);
  margin: 0 auto;
  @media screen and (max-width: 550px) {
    width: 60%;
    height: auto;
  }

  @media screen and (max-width: 450px) {
    width: 80%;
    height: auto;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
    height: auto;
  }
`;

export const SingleItemTitle = styled.h2`
  width: 100%;
  font-size: 2.8rem;
  justify-self: flex-start;
  align-self: flex-start;
  color: var(--clr-grey-1);
  margin-top: 2rem;

  span {
    font-size: 1.7rem;
  }
`;
export const SingleItemDesc = styled.div`
  text-align: justify;
  width: 100%;

  h2 {
    font-size: 2rem;
    margin: 2rem 0;
    color: var(--clr-grey-1);
  }

  p {
    font-size: 1.8rem;
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
  font-size: 2.5rem;
  margin: 2.5rem 0;
  align-self: flex-start;
  justify-self: flex-start;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: var(--clr-grey-5);
  }

  @media screen and (max-width: 450px) {
    margin: 1.5rem 0;
  }
`;
