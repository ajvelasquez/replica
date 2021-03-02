import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #ccc;

  .container {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media screen and (min-width: 992px) {
      flex-direction: row;

      div {
        width: 50%;
      }
    }

    div:first-child {
      ul li {
        margin-bottom: 1rem;
        text-align: center;
      }

      ul {
        @media screen and (min-width: 992px) {
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 100%;

          li {
            margin-bottom: 0;
          }
        }
      }
    }

    div:last-child {
      ul {
        display: flex;
        justify-content: space-around;
        align-items: center;

        a {
          font-size: 2rem;
        }
      }
    }
  }

  ul {
    list-style: none;
  }

  a {
    color: #000;
    text-decoration: none;
    font-size: 1.3;
  }
`;
