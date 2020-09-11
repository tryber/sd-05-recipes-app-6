import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MadeReceipes() {
  return (
    <div>
      <Header title={'Receitas Feitas'} showSearchIcon={false} />
      <div>
        <h1>MadeReceipes</h1>
      </div>
      <Footer />
    </div>
  );
}

export default MadeReceipes;
