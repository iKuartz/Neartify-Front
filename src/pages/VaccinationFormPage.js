import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Container from '../components/Container';
import Navbar from '../components/Navbar';
import validator, {
  WALLET_INPUT_NAME,
} from '../helpers/formValidator/validator';
import { setVaccine } from '../redux/reducers/vaccinated';

export default function VaccinationFormPage() {
  const dispatch = useDispatch();
  const validStatus = { status: true, message: '' };
  const dateNow = new Date();
  const vaccinesAvailable = [
    {
      id: 0,
      name: 'DTP',
    },
    {
      id: 1,
      name: 'Hep A',
    },
    {
      id: 2,
      name: 'Hep B',
    },
    {
      id: 3,
      name: 'covid19',
    },
  ];

  const [formData, setFormData] = useState({
    walletAddress: null,
    name: vaccinesAvailable[0].name,
    person: null,
    date: null,
    dose: null,
  });

  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(formData).every((key) => formData[key])) {
      dispatch(setVaccine(formData));
      return alert('Form submitted!');
    }
    return alert('Please fill all fields!');
  };

  const handleChange = (e) => {
    const valid = validator(e.target);
    if (valid.status) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      setFormErrors({ ...formErrors, [e.target.name]: validStatus });
    } else {
      setFormData({ ...formData, [e.target.name]: null });
      setFormErrors({ ...formErrors, [e.target.name]: valid });
    }
  };

  return (
    <Container className="flex flex-col">
      <Navbar />
      <div className="mt-16 mx-auto block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <div className="w-full">
          <h2 className="text-2xl text-center mx-auto font-bold uppercase text-gray-700 mb-3">
            Add New Vaccinated
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-6">
            <label
              htmlFor={WALLET_INPUT_NAME}
              className="form-label inline-block mb-2 text-gray-700"
            >
              Wallet
            </label>
            <input
              type="text"
              className={`form-control input-form-text ${
                formErrors[WALLET_INPUT_NAME]
                && !formErrors[WALLET_INPUT_NAME].status
                  ? 'input-error'
                  : ''
              }`}
              name={WALLET_INPUT_NAME}
              id={WALLET_INPUT_NAME}
              placeholder="wallet.near"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-6">
            <label
              htmlFor="name"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Vaccine
            </label>
            <select
              name="name"
              id="name"
              className="form-control input-form-text"
              onChange={handleChange}
              defaultValue={vaccinesAvailable[0].name}
            >
              {vaccinesAvailable.map((vaccine) => (
                <option key={vaccine.id} value={vaccine.name}>
                  {vaccine.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group mb-6">
            <label
              htmlFor="person"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Vaccinated Person
            </label>
            <input
              type="text"
              className="form-control input-form-text"
              name="person"
              id="person"
              placeholder="Vaccinated Person"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-6">
            <label
              htmlFor="date"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Date
            </label>
            <input
              type="date"
              max={dateNow.toLocaleDateString('en-CA')}
              className="form-control input-form-text"
              name="date"
              id="date"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-6">
            <label
              htmlFor="dose"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Dose
            </label>
            <input
              type="number"
              className="form-control input-form-text"
              name="dose"
              id="dose"
              max={9}
              min={1}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </Container>
  );
}
