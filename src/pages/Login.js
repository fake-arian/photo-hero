import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaGoogle, FaEnvelope, FaLock } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';

// Styled components
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background-color: var(--background-color);
`;

const LoginCard = styled.div`
  background-color: var(--secondary-background);
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  margin-top: 60px;
`;

const LoginHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const LoginTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  
  span {
    color: var(--primary-color);
  }
`;

const LoginSubtitle = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 0.9rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  padding-left: 2.5rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid var(--border-color);
  background-color: var(--background-color);
  color: var(--text-color);
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const InputIcon = styled.div`
  position: absolute;
  top: 40px;
  left: 10px;
  color: var(--text-secondary);
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary-dark);
    transform: translateY(-2px);
  }
  
  &:disabled {
    background-color: var(--border-color);
    cursor: not-allowed;
    transform: none;
  }
`;

const GoogleButton = styled(LoginButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 1px solid var(--primary-color);
  color: var(--text-color);
  margin-top: 1rem;
  
  svg {
    margin-right: 0.5rem;
  }
  
  &:hover {
    background-color: rgba(138, 43, 226, 0.1);
  }
`;

const OrSeparator = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  
  &::before, &::after {
    content: "";
    flex: 1;
    height: 1px;
    background-color: var(--border-color);
  }
  
  span {
    margin: 0 0.5rem;
    color: var(--text-secondary);
    font-size: 0.9rem;
  }
`;

const ErrorMessage = styled.div`
  background-color: rgba(244, 67, 54, 0.1);
  color: var(--error-color);
  padding: 0.75rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  text-align: center;
`;

const ForgotPassword = styled(Link)`
  text-align: right;
  font-size: 0.85rem;
  color: var(--primary-color);
  margin-top: -1rem;
  margin-bottom: 1.5rem;
  display: block;
`;

const RegisterLink = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
  
  a {
    color: var(--primary-color);
    font-weight: 600;
  }
`;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get redirect path from location state or default to dashboard
  const from = location.state?.from?.pathname || '/dashboard';
  
  async function handleSubmit(e) {
    e.preventDefault();
    
    try {
      setError('');
      setLoading(true);
      await login(email, password);
      navigate(from);
    } catch (error) {
      setError('Failed to sign in. Please check your credentials.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  
  async function handleGoogleSignIn() {
    try {
      setError('');
      setLoading(true);
      await loginWithGoogle();
      navigate(from);
    } catch (error) {
      setError('Failed to sign in with Google.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  
  return (
    <>
      <Navbar />
      <LoginContainer>
        <LoginCard>
          <LoginHeader>
            <LoginTitle>Welcome to <span>Photo Hero</span></LoginTitle>
            <LoginSubtitle>Sign in to continue to your account</LoginSubtitle>
          </LoginHeader>
          
          {error && <ErrorMessage>{error}</ErrorMessage>}
          
          <LoginForm onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel htmlFor="email">Email</FormLabel>
              <InputIcon>
                <FaEnvelope />
              </InputIcon>
              <FormInput 
                type="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="password">Password</FormLabel>
              <InputIcon>
                <FaLock />
              </InputIcon>
              <FormInput 
                type="password" 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormGroup>
            
            <ForgotPassword to="/forgot-password">Forgot password?</ForgotPassword>
            
            <LoginButton type="submit" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign In'}
            </LoginButton>
          </LoginForm>
          
          <OrSeparator>
            <span>OR</span>
          </OrSeparator>
          
          <GoogleButton type="button" onClick={handleGoogleSignIn} disabled={loading}>
            <FaGoogle /> Sign in with Google
          </GoogleButton>
          
          <RegisterLink>
            Don't have an account? <Link to="/register">Sign up</Link>
          </RegisterLink>
        </LoginCard>
      </LoginContainer>
    </>
  );
}

export default Login; 