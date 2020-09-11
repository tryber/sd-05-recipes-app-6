import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Profile() {
  return (
    <div>
      <Header title={'Perfil'} showSearchIcon={false} />
      <div>
        <h1>Profile</h1>
      </div>
    </div>
  );
}

export default Profile;
