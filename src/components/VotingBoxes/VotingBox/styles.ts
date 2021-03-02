import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  position: relative;
  color: #fff;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: inset 0 -15rem 5rem rgba(0, 0, 0, 0.9);

  @media screen and (min-width: 992px) {
    min-height: 550px;
    width: 48%;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
  }

  .title {
    position: relative;
    margin-bottom: 1rem;

    h2 {
      line-height: 0.9;
    }

    .title__icon {
      position: absolute;
      bottom: 0;
      background-color: var(--secondary-color);
      color: #fff;
      width: 1.5rem;
      height: 1.5rem;
      font-size: 0.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .title__container {
      max-width: 80%;
      margin: 0 auto;
      font-size: 1.5rem;
    }
  }

  .content {
    p:first-child {
      margin-bottom: 0.5rem;
      font-size: 1rem;
    }

    p:last-child {
      margin-bottom: 1.5rem;
      font-size: 1.3rem;
    }
  }

  .buttons {
    margin-bottom: 1rem;

    button {
      margin-right: 1rem;
      border: none;
      background-color: var(--secondary-color);
      color: #fff;
      padding: 0.5rem;
    }

    button:nth-child(2) {
      background-color: var(--primary-color);
    }

    button:nth-child(3) {
      background-color: transparent;
      border: solid 2px #fff;
    }
  }
`;

export const VotesCounter = styled.div`
  div {
    width: ${({ positivePercentage }) =>
      positivePercentage < 30
        ? "30%"
        : positivePercentage > 70
        ? "70%"
        : `${positivePercentage}%`};
    display: inline-block;
    padding: 1rem;
    background-color: var(--secondary-color);
  }

  div:last-child {
    width: ${({ positivePercentage }) =>
      positivePercentage < 30
        ? "70%"
        : positivePercentage > 70
        ? "30%"
        : `${100 - positivePercentage}%`};
    text-align: right;
    background-color: var(--primary-color);
  }
`;
