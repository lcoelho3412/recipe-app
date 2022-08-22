import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Teste de cobertura de 90%', () => {
  test('Teste se a pagina de Login e renderizando', () => {
    render(<App />);
    /* const email = screen.getAllByTestId('email-input'); */
    const linkElement = screen.getByText(/TRYBE/i);
    expect(linkElement).toBeInTheDocument();
  });
});
