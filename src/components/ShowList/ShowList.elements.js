import styled from "styled-components";

export const MovieListContainer = styled.section`
  width: 90%;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-column-gap: 15rem;
  grid-row-gap: 2rem;
  position: relative;

  @media screen and (max-width: 1169px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 8rem;
  }
  @media screen and (max-width: 905px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 5rem;
  }

  @media screen and (max-width: 665px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap: 2.5rem;
  }
  @media screen and (max-width: 530px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-column-gap: 2.5rem;
  }
`;

export const SingleShow = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--clr-black);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-15px);
    box-shadow: var(--dark-shadow);
  }
`;

export const SingleShowImg = styled.img`
  width: 100%;
  height: auto;
`;

export const SingleShowTitle = styled.h2`
  color: var(--clr-grey-2);
  padding: 1.7rem;
  font-size: 1.8rem;
  margin: 1rem 0;
`;

export const SingleShowTitleDiv = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

export const EmptySearchMessage = styled.h2`
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--clr-primary-5);
  font-size: 3rem;
  white-space: nowrap;
  text-align: center;

  @media screen and (max-width: 665px) {
    white-space: normal;
    font-size: 2rem;
  }
  @media screen and (max-width: 480px) {
    top: 3rem;
  }
`;
