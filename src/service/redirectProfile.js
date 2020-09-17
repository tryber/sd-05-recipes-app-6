import createBrowserHistory from 'history/createBrowserHistory';

export const goToDone = () => {
  const history = createBrowserHistory({ forceRefresh: true });
  history.push('/receitas-feitas');
};

export const goToFavorites = () => {
  const history = createBrowserHistory({ forceRefresh: true });
  history.push('/receitas-favoritas');
};

export const goToLogin = () => {
  localStorage.clear();
  const history = createBrowserHistory({ forceRefresh: true });
  history.push('/');
};
