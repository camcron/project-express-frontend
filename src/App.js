/* eslint-disable max-len */
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from 'components/Header'
import { NavBar } from 'components/NavBar';
import { CompaniesList } from 'components/CompaniesList';
import { StartPage } from 'components/StartPage';
import { CompanyDetails } from 'components/SingleCompany';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/index" element={<StartPage />} />
        <Route path="/companies" element={<CompaniesList />} />
        <Route path="/companies/:name" element={<CompanyDetails />} />
        {/* Other routes */}
        <Route path="*" element={<Navigate to="/index" />} />
      </Routes>
    </BrowserRouter>
  );
}

