import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../pages/Login';

const renderWithRouter = (component) => {
  return {
    ...render(<MemoryRouter>{component}</MemoryRouter>),
  };
};

test('A pessoa deve conseguir escrever seu email no input de email', () => {
  const { getByPlaceholderText } = renderWithRouter(<Login />);

  const inputEmail = getByPlaceholderText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe('email');
});

test('A pessoa deve conseguir escrever sua senha no input de senha', () => {
  const { getByPlaceholderText } = renderWithRouter(<Login />);

  const inputSenha = getByPlaceholderText('Senha');
  expect(inputSenha).toBeInTheDocument();
  expect(inputSenha.type).toBe('password');
});

test('O botão deve estar desativado se o email for inválido', () => {
  const { getByText } = renderWithRouter(<Login />);

  const btnDisabledEmail = getByText('Entrar');
  expect(btnDisabledEmail).toBeDisabled();
});

// test('O botão deve estar desativado se a senha tiver 6 caracteres ou menos', () => {
//   const { getByText } = renderWithRouter(<Login />);

//   const btnDisabledPassword = getByText('Entrar');
//   expect(btnDisabledPassword).toBeDisabled();
// });
