import { FC } from "react";

interface BudgetInputProps {
  totalBudget: number;
  setTotalBudget: (budget: number) => void;
}
export const TotalBudget: FC<BudgetInputProps> = ({
  totalBudget,
  setTotalBudget,
}) => {
  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTotalBudget(Number(e.target.value));
  };
  return (
    <div className="mb-12">
      <input
        min={0}
        type="number"
        value={totalBudget}
        onChange={handleBudgetChange}
        className="border p-2"
        placeholder="Enter your total budget"
      />
      <div className="mt-2">You budget is {totalBudget}$</div>
    </div>
  );
};
