import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '../pages/Login';

describe('Teste da página de Login', () => {
  test('Testa se o input de email aparece na tela de Login', () => {
    render(<Login />);
    const emailInput = screen.getAllByTestId('email-input');
    expect(emailInput.type).toBe('email');
    expect(emailInput).toBeInTheDocument();
  });
});
