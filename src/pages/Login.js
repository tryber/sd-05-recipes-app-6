import React, { useState } from 'react';

export default function Login() {
  const [disableButton, setButton] = useState(true);

  const checkPassword = (event) => {
    if (event.target.value.length > 6) {
      setButton(false);
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <input type="email" placeholder="Email" data-testid="email-input" />
      <input
        type="password"
        placeholder="Senha"
        data-testid="password-input"
        onChange={(event) => checkPassword(event)}
      />
      {
        disableButton ? <button disabled type="button" data-testid="login-submit-btn">Entrar</button>
        : <button type="button" data-testid="login-submit-btn">Entrar</button>
      }
    </div>
  );
}
