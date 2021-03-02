import styled from "styled-components";

export const Banner = styled.div`
  margin: 2rem auto;
  padding: 2rem;
  background-color: #ccc;

  @media screen and (min-width: 992px) {
    display: flex;
    align-items: center;

    div {
      display: inline-block;
    }
  }

  .close-icon {
    text-align: right;

    @media screen and (min-width: 992px) {
      display: none;
    }

    button {
      border: none;
      font-size: 2rem;
      background-color: inherit;
    }
  }

  .title {
    font-size: 1.5rem;
    margin-bottom: 1rem;

    @media screen and (min-width: 992px) {
      width: 25%;
      margin-bottom: 0;
      margin-right: 1rem;
    }
  }

  .content {
    font-size: 1.2rem;

    @media screen and (min-width: 992px) {
      width: 70%;
      margin-right: 1rem;
    }
  }

  .close-icon-md {
    display: none;

    @media screen and (min-width: 992px) {
      display: flex;
      align-self: flex-start;
      width: 5%;

      button {
        border: none;
        font-size: 2rem;
        background-color: inherit;
      }
    }
  }
`;
