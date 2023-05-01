import React from 'react';
import styled from 'styled-components';

const StyledStartPageContent = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 5%;

    h2 {
      font-size: 1.3em;
      margin-bottom: 10%;
    }

    p {
        display: flex;
        flex-direction: column;
        word-break: break-word;
        font-weight: bold;
        margin-bottom: 5%;

        a {
            font-weight: normal;
            text-decoration: none;
            color: black;
            margin-top: 2%;

            &:hover {
                font-weight: bold;
            }
        }
    }

    @media (min-width: 667px) {
        h2 {
          font-size: 1.5em;
        }

        p {
            font-size: 1.2rem;
        }
    }
`;

export const StartPage = () => {
  return (
    <StyledStartPageContent>
      <h2>Find information about the top 50 tech companies in the US</h2>
      <p>Data coming from: <a href="https://www.kaggle.com/datasets/lamiatabassum/top-50-us-tech-companies-2022-2023-dataset" target="_blank" rel="noopener noreferrer">https://www.kaggle.com/datasets/lamiatabassum/top-50-us-tech-companies-2022-2023-dataset</a></p>
      <p>API coming from: <a href="https://project-express-api-cvzekbgn3q-lz.a.run.app/" target="_blank" rel="noopener noreferrer">https://project-express-api-cvzekbgn3q-lz.a.run.app/</a></p>
      <p>API-docs: <a href="https://project-express-api-cvzekbgn3q-lz.a.run.app/api-docs" target="_blank" rel="noopener noreferrer">https://project-express-api-cvzekbgn3q-lz.a.run.app/api-docs</a></p>
    </StyledStartPageContent>
  )
}
