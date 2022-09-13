import { useSelector } from 'react-redux';
import { useState } from 'react';
import Container from '../components/Container';
import Navbar from '../components/Navbar';
import VaccinesTable from '../components/VaccinesTable';

const VaccinatedSearch = () => {
  const NULL = '';
  const FOUND = 'FOUND';
  const NOT_FOUND = 'NOT_FOUND';

  const vaccinatedList = useSelector(
    (state) => state.vaccinated.vaccinatedList,
  );
  const [search, setSearch] = useState({ status: NULL, value: '', data: null });

  const handleChange = (e) => {
    setSearch({ ...search, status: NULL, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (vaccinatedList[search.value]) {
      setSearch({
        ...search,
        status: FOUND,
        data: vaccinatedList[search.value],
      });
    } else {
      setSearch({
        ...search,
        status: NOT_FOUND,
        data: null,
      });
    }
  };

  return (
    <Container>
      <Navbar />
      <h2 className="font-extrabold text-2xl text-center mt-16 mb-4">
        Search Vaccinated
      </h2>
      <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <form
            onSubmit={handleSubmit}
            className="input-group relative flex flex-wrap items-stretch w-full mb-4"
          >
            <input
              type="search"
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
              onChange={handleChange}
            />
            <button
              className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
              type="submit"
              id="button-addon2"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
      <div id="result">
        {search.status === FOUND && (
          <div className="border-2 flex flex-col">
            <h3 className="text-center text-xl">
              Name:
              <strong>{` ${search.data.person}`}</strong>
            </h3>
            <h5 className="text-center">Vaccines:</h5>
            <VaccinesTable vaccines={search.data.vaccines} />
          </div>
        )}
        {search.status === NOT_FOUND && <p>Not found</p>}
      </div>
    </Container>
  );
};

export default VaccinatedSearch;
