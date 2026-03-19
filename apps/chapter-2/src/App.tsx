import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
import AuthPage from './AuthPage';
import HRDashboard from './HRDashboard';
import EmployeeDashboard from './EmployeeDashboard';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Routes>
          <Route path="/login" element={<AuthPage />} />
          <Route path="/hr-dashboard/*" element={<HRDashboard />} />
          <Route path="/employee-dashboard/*" element={<EmployeeDashboard />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
