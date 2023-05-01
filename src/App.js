/* eslint-disable max-len */
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from 'components/Header'
import { NavBar } from 'components/NavBar';
import { StartPage } from 'components/StartPage';
import { CompanyDetails } from 'components/CompanyDetails';
import { AllStats } from 'components/AllStats';
import { GlobalStyles } from 'components/GlobalStyles';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <NavBar />
      <Routes>
        <Route path="/index" element={<StartPage />} />
        <Route path="/companies" element={<AllStats />} />
        <Route path="/companies/:name" element={<CompanyDetails />} />
        {/* Other routes */}
        <Route path="*" element={<Navigate to="/index" />} />
      </Routes>
    </BrowserRouter>
  );
}

