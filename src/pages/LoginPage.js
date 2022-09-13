import React from 'react';
import Container from '../components/Container';
import { login } from '../assets/near/utils';

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };
  return (
    <Container className="flex justify-center items-center">
      <form onSubmit={handleSubmit} className="">
        <h1 className="text-3xl text-center mb-4">Neartify</h1>
        <button type="submit" className="submit-btn">
          Login in with your Near account
        </button>
      </form>
    </Container>
  );
};

export default LoginPage;
