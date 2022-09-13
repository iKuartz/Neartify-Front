import stringValidator from '../validators/stringValidator';

const WALLET_REGEX = /^[a-z0-9][a-z0-9_-]{0,62}[a-z0-9].near|.testnet$/;

const walletValidator = (wallet) => {
  if (!stringValidator(wallet, WALLET_REGEX)) {
    return { status: false, message: 'Invalid wallet address' };
  }
  return { status: true, message: 'Valid wallet address' };
};

export default walletValidator;
