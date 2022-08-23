import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../pages/Login';

describe('Testes da página de login', () => {
  it('Verifica se o input de email aparece na tela de Login', () => {
    render(<Login />);
    const emailInput = screen.getByTestId('email-input');

    expect(emailInput.type).toBe('email');
    expect(emailInput).toBeInTheDocument();
  });

  it('Verifica se o input de senha aparece na tela de Login', () => {
    render(<Login />);
    const passwordInput = screen.getByTestId('password-input');

    expect(passwordInput.type).toBe('password');
    expect(passwordInput).toBeInTheDocument();
  });

  it('Verifica se o botão de "Entrar" inicia desabilitado', () => {
    render(<Login />);
    const button = screen.getByTestId('login-submit-btn');

    expect(button).toHaveProperty('disabled', true);
  });

  it('Verifica se o botão de "Entrar" é habilitado quando bota a senha e o email', () => {
    render(<Login />);
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const button = screen.getByTestId('login-submit-btn');

    userEvent.type(emailInput, 'teste@teste.com');
    userEvent.type(passwordInput, 'password');
    expect(button).toHaveProperty('disabled', false);
  });
});
