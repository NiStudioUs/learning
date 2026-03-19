import React, { useState, useEffect } from 'react';
import { 
  Container, Typography, Box, Paper, Table, TableBody, TableCell, 
  TableContainer, TableHead, TableRow, Button, Modal, TextField,
  AppBar, Toolbar, Tabs, Tab
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface Employee {
  id: string;
  name: string;
  department: string;
  email: string;
}

const HRDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [newEmp, setNewEmp] = useState({ name: '', department: '', email: '' });
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    // Check Auth
    if (localStorage.getItem('auth_role') !== 'Hr') {
      navigate('/login');
    }
    // Load existing employees
    const stored = localStorage.getItem('employees');
    if (stored) {
      setEmployees(JSON.parse(stored));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const handleSave = () => {
    if (!newEmp.name || !newEmp.department || !newEmp.email) return;
    const emp: Employee = { id: Date.now().toString(), ...newEmp };
    const updated = [...employees, emp];
    setEmployees(updated);
    localStorage.setItem('employees', JSON.stringify(updated));
    setOpenModal(false);
    setNewEmp({ name: '', department: '', email: '' });
  };

  return (
    <Box>
      <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: '1px solid #E2E8F0' }}>
        <Toolbar>
          <Typography variant="h6" color="primary" sx={{ flexGrow: 1, fontWeight: 700 }}>
            HR Portal
          </Typography>
          <Tabs value={tabIndex} onChange={(_, val) => setTabIndex(val)} sx={{ mr: 4 }}>
            <Tab label="Directory" />
            <Tab label="Leave Requests" />
          </Tabs>
          <Button variant="outlined" color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 5 }}>
        {tabIndex === 0 && (
          <>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
              <Typography variant="h5" fontWeight="600">Employee Directory</Typography>
              <Button variant="contained" onClick={() => setOpenModal(true)}>
                Add New Employee
              </Button>
            </Box>

            <TableContainer component={Paper} elevation={0}>
              <Table>
                <TableHead sx={{ bgcolor: '#F1F5F9' }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Department</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Email</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {employees.map((emp) => (
                    <TableRow key={emp.id} hover>
                      <TableCell>{emp.name}</TableCell>
                      <TableCell>{emp.department}</TableCell>
                      <TableCell>{emp.email}</TableCell>
                    </TableRow>
                  ))}
                  {employees.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={3} align="center" sx={{ py: 4, color: 'text.secondary' }}>
                        No employees found. Add one above.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}

        {tabIndex === 1 && (
          <Box>
            <Typography variant="h5" fontWeight="600" mb={3}>Leave Requests</Typography>
            <Paper elevation={0} sx={{ p: 4, textAlign: 'center', color: 'text.secondary' }}>
              <Typography>No leave requests pending approval.</Typography>
            </Paper>
          </Box>
        )}
      </Container>

      {/* Add Employee Modal */}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box sx={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: 400, bgcolor: 'background.paper', borderRadius: 2, p: 4, boxShadow: 24
        }}>
          <Typography variant="h6" fontWeight="600" mb={3}>Add New Employee</Typography>
          <TextField
            fullWidth label="Name" margin="normal" size="small"
            value={newEmp.name} onChange={e => setNewEmp({...newEmp, name: e.target.value})}
          />
          <TextField
            fullWidth label="Department" margin="normal" size="small"
            value={newEmp.department} onChange={e => setNewEmp({...newEmp, department: e.target.value})}
          />
          <TextField
            fullWidth label="Email" margin="normal" size="small"
            value={newEmp.email} onChange={e => setNewEmp({...newEmp, email: e.target.value})}
          />
          <Box display="flex" justifyContent="flex-end" gap={2} mt={4}>
            <Button variant="outlined" color="inherit" onClick={() => setOpenModal(false)}>Close</Button>
            <Button variant="contained" onClick={handleSave}>Save Employee</Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default HRDashboard;
