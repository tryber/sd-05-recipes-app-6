import React, { useState, useEffect } from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Profile() {
  const [email, setEmail] = useState('email');

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('user'));
    if (storage) setEmail(storage.email);
  }, []);
  const goToDone = () => {
    const history = createBrowserHistory({ forceRefresh: true });
    history.push('/receitas-feitas');
  };
  const goToFavorites = () => {
    const history = createBrowserHistory({ forceRefresh: true });
    history.push('/receitas-favoritas');
  };
  const goToLogin = () => {
    localStorage.clear();
    const history = createBrowserHistory({ forceRefresh: true });
    history.push('/');
  };
  return (
    <div>
      <Header title={'Perfil'} showSearchIcon={false} />
      <div>
        <div data-testid="profile-email">{email}</div>
        <button
          type="button"
          data-testid="profile-done-btn"
          onClick={() => goToDone()}
        >
          Receitas Feitas
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={() => goToFavorites()}
        >
          Receitas Favoritas
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={() => goToLogin()}
        >
          Sair
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
