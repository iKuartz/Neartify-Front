import walletValidator from './walletValidator';

// Input names
export const WALLET_INPUT_NAME = 'walletAddress';
export const VACCINE_INPUT = 'vaccine';
export const PERSON_INPUT = 'person';
export const DATE_INPUT = 'date';
export const DOSE_INPUT = 'dose';

const validator = (input) => {
  switch (input.name) {
    case WALLET_INPUT_NAME:
      return walletValidator(input.value);
    default:
      return { status: true, message: '' };
  }
};

export default validator;
