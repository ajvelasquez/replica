import styled from "styled-components";

export const ShowcaseContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  color: #fff;

  & h1 {
    font-size: 2rem;
  }

  & .burguer-menu {
    width: 2rem;
    height: 1.4rem;
    position: relative;
    cursor: pointer;

    @media screen and (min-width: 992px) {
      display: none;
    }

    & .burguer-menu__line {
      width: 100%;
      height: 3px;
      background-color: #fff;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      transform: ${(props) => (props.click ? "rotate(45deg)" : "")};

      &::before,
      &::after {
        content: "";
        width: 100%;
        height: 3px;
        background-color: #fff;
        position: absolute;
        top: ${(props) => (props.click ? "unset" : "calc(-0.7rem + 1.5px)")};
        transform: ${(props) => (props.click ? "rotate(90deg)" : "")};
      }

      &::after {
        top: calc(0.7rem - 1.5px);
        display: ${(props) => (props.click ? "none" : "")};
      }
    }
  }
`;

export const NavLinks = styled.ul`
  list-style: none;
  position: absolute;
  top: ${(props) => (props.click ? "0" : "-100vh")};
  left: 0;
  background-color: #000;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: top 0.3s ease-in-out;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 1.2rem;
    margin: 1rem auto;
  }

  @media screen and (min-width: 992px) {
    display: flex;
    position: unset;
    background-color: unset;
    height: unset;
    width: unset;
    display: flex;
    flex-direction: unset;
    justify-content: unset;
    align-items: unset;

    & li {
      margin-left: 2rem;
    }
  }
`;

export const ShowcaseCard = styled.div`
  background-color: rgba(50, 50, 50, 0.5);
  margin-bottom: 2rem;

  @media screen and (min-width: 992px) {
    max-width: 40%;
  }
`;

export const ShowcaseCardContent = styled.div`
  padding: 1rem;

  h2,
  p,
  a {
    color: #fff;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.3rem;
  }

  .subtitle {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .summary {
    font-size: 1.2rem;
    text-align: justify;
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 992px) {
    .wiki-link {
      display: inline-block;
      margin-bottom: 1rem;
    }
  }
`;

export const ShowcaseCardButton = styled.div`
  width: 100%;

  button {
    width: 50%;
    padding: 1rem 0;
    font-size: 1.5rem;
    color: #fff;
    border: none;

    &.bg-primary {
      background-color: var(--secondary-color);
    }

    &.bg-secondary {
      background-color: var(--primary-color);
    }
  }
`;

export const BarBottom = styled.div`
  width: 100%;

  div {
    display: inline-block;
    width: 50%;
    padding: 1rem;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 300;

    span {
      font-weight: 700;
    }
  }

  div:first-child {
    text-align: right;
    background-color: rgba(50, 50, 50, 0.5);

    @media screen and (min-width: 992px) {
      width: 30%;
    }
  }

  div:last-child {
    background-color: rgba(10, 10, 10, 0.7);

    @media screen and (min-width: 992px) {
      width: 70%;
    }
  }
`;
