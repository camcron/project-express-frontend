import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NumericLabel from 'react-pretty-numbers';
import { Loader } from './Loader';

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5% 2%;

  &:hover {
      font-weight: bold;
    }

  li {
    list-style-type: none;
    color: black;
    display: flex;
    flex-direction: row;
    margin: 0.5%;

    h3 {
        text-decoration: underline;
        color: var(--neutral-light);
        font-size: 1.3rem;
        margin-bottom: 1%;
        font-weight: bold;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const AllStats = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false)

  // react-pretty-numbers npm-package to change large number to include a comma
  const numericOptions = {
    commafy: true
  };

  useEffect(() => {
    setLoading(true);
    fetch('https://project-express-api-up7t32af6a-lz.a.run.app//companies')
      .then((res) => res.json())
      .then((data) => {
        setList(data.body.companies);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="popularList">
      {list.map((company) => (
        <StyledLink key={company.company_name} to={`/companies/${company.company_name}`}>
          <StyledUl>
            <li><h3>{company.company_name}</h3></li>
            <li><span>Name:</span>{company.company_name}</li>
            <li><span>Sector:</span>{company.sector}</li>
            <li><span>HQ state:</span>{company.hq_state}</li>
            <li><span>Founding year:</span>{company.founding_year}</li>
            <li><span>Annual revenue (2022-2023 (USD in Billions)):</span>
              {company.annual_revenue}
            </li>
            <li>
              <span>Number of employees:</span> {' '}
              <NumericLabel params={numericOptions}>{company.employee_size}</NumericLabel>
            </li>
            <li><span>Market cap (USD in Trillions):</span>{company.market_cap}</li>
            <li><span>Stock name:</span>{company.stock_name}</li>
            <li><span>Annual income tax (2022-2023 (USD in Billions)):</span>
              {company.annual_income_tax}
            </li>
          </StyledUl>
        </StyledLink>
      ))}
    </div>
  );
};