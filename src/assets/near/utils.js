import { connect, Contract, WalletConnection } from 'near-api-js';
import getConfig from './config';

const nearConfig = getConfig(process.env.NODE_ENV || 'development');

// Initialize contract & set global variables
export const initContract = async () => {
  // Set a connection to the NEAR network
  window.near = await connect(nearConfig);

  // Initialize a Wallet Object
  window.walletConnection = new WalletConnection(window.near);

  // Initialize a Contract Object (to interact with the contract)
  window.contract = await new Contract(
    window.walletConnection.account(), // user's account
    nearConfig.contractName, // contract's account
    {
      viewMethods: ['beneficiary', 'get_donations', 'total_donations'],
      changeMethods: ['donate'],
    },
  );
};

export const login = () => {
  // Allows to make calls to the contract on the user's behalf.
  // Works by creating a new access key for the user's account
  // and storing the private key in localStorage.
  window.walletConnection.requestSignIn(nearConfig.contractName);
};
