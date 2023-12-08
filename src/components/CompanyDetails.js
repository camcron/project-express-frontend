import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NumericLabel from 'react-pretty-numbers';
import styled from 'styled-components';
import { Loader } from './Loader';

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;

  li {
    display: flex;
    list-style-type: none;
    flex-direction: row;
    margin: 2%;

    span {
        font-weight: bold;
        margin-right: 5px;
        color: var(--primary-color);
    }
  }
`;

export const CompanyDetails = () => {
  const [company, setCompany] = useState();
  const [loading, setLoading] = useState(false);
  const { name } = useParams();

  // react-pretty-numbers npm-package to change large number to include a comma
  const numericOptions = {
    commafy: true
  };

  useEffect(() => {
    setLoading(true);
    fetch(`https://project-express-api-up7t32af6a-lz.a.run.app//companies/${encodeURIComponent(name)}`)
      .then((res) => res.json())
      .then((data) => {
        setCompany(data.body.company);
      })
      .catch((error) => {
        console.error(console.error(error))
      })
      .finally(() => {
        setLoading(false);
      })
  }, [name]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      {company && (
        <div>
          <StyledUl>
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
        </div>
      )}
    </div>
  );
};