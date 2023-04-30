import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const CompanyDetails = () => {
  const [company, setCompany] = useState();
  const [loading, setLoading] = useState(false);

  const { name } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`https://project-express-api-cvzekbgn3q-lz.a.run.app/companies/names?names=${name}`)
      .then((res) => res.json())
      .then((data) => {
        setCompany(data[0]);
      })
      .catch((error) => {
        console.error(console.error(error))
      })
      .finally(() => {
        setLoading(false);
      })
  }, [name]);

  if (loading) {
    return <p>Loading company details...</p>;
  }

  return (
    <div>
      {company && (
        <div>
          <h2>Name: {company.company_name}</h2>
          <p>Sector: {company.sector}</p>
          <p>HQ state: {company.hq_state}</p>
          <p>Founding year: {company.founding_year}</p>
          <p>Annual revenue: {company.annual_revenue}</p>
          <p>Employee size: {company.employee_size}</p>
          <p>Market cap: {company.market_cap}</p>
          <p>Stock name: {company.stock_name}</p>
          <p>Annual income tax: {company.annual_income_tax}</p>
        </div>
      )}
    </div>
  );
};