import styled from "styled-components";

export const MovieListContainer = styled.section`
  width: 90%;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 10rem;
  grid-row-gap: 2rem;
`;

export const SingleShow = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--clr-black);
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
  text-align: center;
  color: var(--clr-grey-2);
  font-size: 1.5rem;
  padding: 1rem;
  margin: 0;
`;

export const EmptySearchMessage = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--clr-primary-5);
`;
