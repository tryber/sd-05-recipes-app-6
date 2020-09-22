import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { goToDone, goToFavorites, goToLogin } from '../service/redirectProfile';

function Profile() {
  const [email, setEmail] = useState('email');

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('user'));
    if (storage) setEmail(storage.email);
  }, []);

  return (
    <div>
      <Header title={'Perfil'} showSearchIcon={false} />
      <div className="perfil">
        <div className="email-perfil" data-testid="profile-email">Olá <br/> {email}</div>
        <button
          className="profile-btn btn"
          type="button"
          data-testid="profile-done-btn"
          onClick={() => goToDone()}
        >
          Receitas Feitas
        </button>
        <button
          className="profile-btn btn"
          type="button"
          data-testid="profile-favorite-btn"
          onClick={() => goToFavorites()}
        >
          Receitas Favoritas
        </button>
        <button
          className="profile-btn btn"
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
