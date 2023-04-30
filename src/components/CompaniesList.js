import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const CompaniesList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    fetch('https://project-express-api-cvzekbgn3q-lz.a.run.app/companies')
      .then((res) => res.json())
      .then((data) => {
        setList(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) { // render loading state if data is being fetched
    return <p>Loading companies...</p>;
  }

  return (
    <div className="popularList">
      {list.map((company) => (
        <Link key={company.company_name} to={`/companies/${company.company_name}`}>
          <div className="details">
            <h1>{company.company_name}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
};