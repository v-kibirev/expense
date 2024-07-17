import { FC, useMemo } from "react";
import { IExpenseList } from "../App";

interface RemainingBudgetProps {
  totalBudget: number;
  expenses: IExpenseList[];
}
export const RemainingBudget: FC<RemainingBudgetProps> = ({
  totalBudget,
  expenses,
}) => {
  const totalExpenses = useMemo(() => {
    return expenses.reduce((sum, expense) => sum + expense.amount, 0);
  }, [expenses]);

  const remainingBudget = totalBudget - totalExpenses;
  return (
    <div className="bg-blue-500 text-white px-4 py-2  flex justify-between">
      <span>Remaining Budget:</span>
      <span>{remainingBudget}</span>
    </div>
  );
};
