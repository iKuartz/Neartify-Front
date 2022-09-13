import { useSelector } from 'react-redux';
import LoginPage from './LoginPage';
import VaccinationFormPage from './VaccinationFormPage';

const Homepage = () => {
  const user = useSelector((state) => state.user);

  return <>{user.isSignedIn ? <VaccinationFormPage /> : <LoginPage />}</>;
};

export default Homepage;
