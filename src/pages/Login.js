import React, { useState } from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
// import '../styles/App.css';

export default function Login() {
  const [disableButton, setButton] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const validateInputs = (emailParam, passwordParam) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (passwordParam.length >= 6 && re.test(emailParam)) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  const submitUser = () => {
    const history = createBrowserHistory({ forceRefresh: true });
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/comidas');
  };
  const btnDisabled = () => (
    <button disabled type="button" data-testid="login-submit-btn">Entrar</button>
  );
  const btnAbled = () => (
    <button type="button" data-testid="login-submit-btn" onClick={() => submitUser()}>
      Entrar
    </button>
  );
  return (
    <div className="login">
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
      {disableButton ? btnDisabled() : btnAbled()}
    </div>
  );
}
