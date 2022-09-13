import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initContract } from './assets/near/utils';
import { setUserData } from './redux/reducers/user';
import { getVaccinateds } from './redux/reducers/vaccinated';
import Homepage from './pages/Homepage';
import VaccinatedSearch from './pages/VaccinatedSearch';

function App() {
  const dispatch = useDispatch();

  function flow() {
    if (window.walletConnection.isSignedIn()) {
      const userId = window.walletConnection.getAccountId();
      dispatch(setUserData(userId));
    }
  }
  useEffect(() => {
    if (localStorage.getItem('vaccinatedList')) {
      dispatch(
        getVaccinateds(JSON.parse(localStorage.getItem('vaccinatedList'))),
      );
    }

    window.nearInitPromise = initContract().then(flow).catch(console.error);
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<VaccinatedSearch />} />
      </Routes>
    </>
  );
}

export default App;
