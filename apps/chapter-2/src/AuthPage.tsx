import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Radio, 
  RadioGroup, 
  FormControlLabel, 
  FormControl, 
  FormLabel,
  Paper,
  Link
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState('Employee');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Minimal Mock Authentication
    // In a real app, this would validate against a backend. 
    // Here we just save the role to simulate a session.
    localStorage.setItem('auth_role', role);
    localStorage.setItem('auth_user', username);

    if (role === 'Hr') {
      navigate('/hr-dashboard');
    } else {
      navigate('/employee-dashboard');
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 10 }}>
      <Paper elevation={0} sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h4" sx={{ mb: 4, fontWeight: 700 }}>
          {isLogin ? 'Login' : 'Sign Up'}
        </Typography>
        
        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <FormControl sx={{ mt: 2, width: '100%', alignItems: 'center' }}>
            <RadioGroup
              row
              name="role-group"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <FormControlLabel value="Employee" control={<Radio size="small" />} label="Employee" />
              <FormControlLabel value="Hr" control={<Radio size="small" />} label="Hr" />
            </RadioGroup>
          </FormControl>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, py: 1.5 }}
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </Button>

          <Box sx={{ textAlign: 'center' }}>
            <Link 
              component="button" 
              type="button"
              variant="body2" 
              onClick={() => setIsLogin(!isLogin)}
              sx={{ textDecoration: 'none', fontWeight: 500 }}
            >
              {isLogin ? 'Sign Up' : 'Already have an account? Login'}
            </Link>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default AuthPage;
