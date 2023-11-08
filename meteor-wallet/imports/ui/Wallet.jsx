import React from "react";
import { Modal } from "./components/Modal";

export const Wallet = () => {
  const [open, setOpen] = React.useState(false);
  const [isTransferring, setIsTransferring] = React.useState(false);
  const [amount, setAmount] = React.useState(0);
  const [destinationWallet, setDestinationWallet] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const wallet = {
    _id: "123456",
    balance: 5,
    currency: 'USD'
  };

  const addTransaction = () => {
    console.log('New Transaction', amount, destinationWallet)
  }

  return (
    <>
    <div className="flex font-sans shadow-md my-10">
      <form className="flex-auto p-6">
        <div className="flex flex-wrap">
          <div className="w-full flex-none text-sm font-medium text-gray-500">
            Main Account
          </div>
          <div className="w-full flex-none text-sm font-medium text-gray-500 mt-2">
            Wallet ID:
          </div>
          <h1 className="flex-auto text-lg font-semibold text-gray-700">
            {wallet._id}
          </h1>
          <div className="text-2xl font-bold text-gray-700">
            {`${wallet.balance} ${wallet.currency}`}
          </div>
        </div>
        <div className="flex space-x-4 text-sm font-medium">
          <div className="flex-auto flex space-x-4 mt-4">
            <button
              type="button"
              className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
              onClick={()=> { 
                setIsTransferring(false);
                setOpen(true);
              }}
            >
              Add Money
            </button>
            <button
              type="button"
              className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
              onClick={()=> { 
                setIsTransferring(true);
                setOpen(true);
              }}
            >
              Transfer Money
            </button>
          </div>
        </div>
      </form>
    </div>

    <Modal
      open={open}
      setOpen={setOpen}
      title={
        isTransferring ? 'Transfer money to other wallet' : 'Add money to your wallet'
      }
      body={
        <>
        {isTransferring && (<div>
          <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
            Destination Wallet
          </label>
          <input
            type="string"
            id="destination"
            value={destinationWallet}
            onChange={(e) => setDestinationWallet(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        )}
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        </>
      }
      footer={
        <button
        type="button"
        className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
        onClick={addTransaction}
      >
        {/* The `isTransferring` state variable is used to determine whether the user wants to transfer
        money to another wallet or add money to their own wallet. It is initially set to `false`
        and is updated when the user clicks on the "Transfer Money" or "Add Money" buttons. */
        isTransferring ? "Transfer" : "Add"}
      </button>
      }
      errorMessage={errorMessage}
    />
    </>
  );
};