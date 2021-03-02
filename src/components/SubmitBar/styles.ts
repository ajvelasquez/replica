import styled from "styled-components";
import nighSky from "./../../images/night-sky.jpeg";

export const Banner = styled.div`
  margin: 2rem auto;
  padding: 2rem;
  background-image: url(${nighSky});
  background-size: cover;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-size: 1.5rem;
  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.7);
  }

  div {
    z-index: 2;
  }

  @media screen and (min-width: 992px) {
    flex-direction: row;

    div {
      width: 50%;
    }

    div:last-child {
      display: flex;
      justify-content: flex-end;
    }
  }

  button {
    color: #fff;
    background-color: transparent;
    padding: 1rem;
    border: solid 0.3rem #fff;
    font-size: 1.5rem;
    font-weight: 700;
    width: 100%;

    @media screen and (min-width: 992px) {
      width: unset;
      min-width: 15rem;
    }
  }
`;
