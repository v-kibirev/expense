import { FC, useState } from "react";
interface ExpenseFromProps {
  addExpense: ({ name, amount }: { name: string; amount: number }) => void;
}

export const ExpenseFrom: FC<ExpenseFromProps> = ({ addExpense }) => {
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  const resetFormFields = () => {
    setName("");
    setAmount(0);
  };

  const addHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (name === "" || amount === 0) {
      setError("Please enter a valid name and amount");
      return;
    }
    addExpense({ name, amount });
    resetFormFields();
    setError(null);
  };

  return (
    <form>
      <h3 className="text-sm font-bold text-gray-800 mb-4">
        Enter Your Expenses Here
      </h3>
      <div>
        <label
          className="block text-black-700 text-sm font-bold mb-1"
          htmlFor="name"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mr-2 w-full"
        />
        <label
          className="block text-black-500 text-sm font-bold mb-1"
          htmlFor="amount"
        >
          Amount
        </label>
        <input
          min={0}
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="border p-2 mr-2 w-full"
          placeholder="Amount"
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex justify-end">
        <button
          onClick={addHandler}
          className="p-2 mt-5 px-5 bg-blue-500 text-white"
        >
          Add
        </button>
      </div>
    </form>
  );
};
