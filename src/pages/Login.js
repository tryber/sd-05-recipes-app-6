import React, { useState } from 'react';
import createBrowserHistory from 'history/createBrowserHistory';

export default function Login() {
  const [disableButton, setButton] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateInputs = (email, password) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (password.length >= 6 && re.test(email)) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  const submitUser = () => {
    const history = createBrowserHistory({forceRefresh:true});
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email: email }));
    history.push('/comidas');
    
  }

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        data-testid="email-input"
        onChange={(event) => setEmail(event.target.value) || validateInputs(email, password)}
      />
      <input
        type="password"
        placeholder="Senha"
        data-testid="password-input"
        onChange={(event) => setPassword(event.target.value) || validateInputs(email, password)}
      />
      {
        disableButton ? <button disabled type="button" data-testid="login-submit-btn">Entrar</button>
        : <button type="button" data-testid="login-submit-btn" onClick={() => submitUser()}>Entrar</button>
      }
    </div>
  );
}
