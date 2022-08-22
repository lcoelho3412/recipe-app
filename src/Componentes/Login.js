import React, { useContext } from 'react';
import RecipeContext from '../context/ContextApp';

function Login() {
  const {
    stateEmail,
    setStateEmail } = useContext(RecipeContext);
  const { email } = stateEmail;
  const onChangeInput = ({ target: { value } }) => {
    setStateEmail({ ...stateEmail, email: value,
    });
  };

  return (
    <div>
      <form>
        <label htmlFor="email">
          <input
            value={ email }
            id="email"
            name="email"
            data-testid="email-input"
            type="email"
            onChange={ onChangeInput }
          />
        </label>
        <label htmlFor="password">
          <input
            id="password"
            name="password"
            data-testid="password-input"
            type="password"
            onChange={ onChangeInput }
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
