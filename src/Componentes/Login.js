import React from 'react';

function Login() {
  return (
    <div>
      <form>
        <label htmlFor="email">
          <input
            id="email"
            name="email"
            data-testid="email-input"
            type="email"
            /* onChange={} */
          />
        </label>
        <label htmlFor="password">
          <input
            id="password"
            name="password"
            data-testid="password-input"
            type="password"
            /* onChange={} */
          />
        </label>
        <button
          type="submit"
          data-testid="login-submit-btn"
          /*  onClick={} */
        >
          Enter

        </button>
      </form>
    </div>
  );
}

export default Login;
