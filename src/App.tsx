import { useState } from "react";
import { ExpenseFrom } from "./components/ExpenseForm";
import { ListExpanses } from "./components/ListExpenses/ListExpanses";
import { RemainingBudget } from "./components/RemainingBudget";
import { TotalBudget } from "./components/TotalBudget";
import { ExpenseChart } from "./components/ExpenseChart";
export interface IExpenseList {
  id: number;
  name: string;
  amount: number;
}

function App() {
  const [totalBudget, setTotalBudget] = useState(10000);
  const [list, setList] = useState<IExpenseList[]>([]);

  const onDeleteHandler = (id: number) => {
    setList(list.filter((item) => item.id !== id));
  };

  const onAddHandler = (toAddObject: { name: string; amount: number }) => {
    setList((prev) => [...prev, { ...toAddObject, id: Date.now() }]);
  };

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-32">
      <div>
        <TotalBudget
          totalBudget={totalBudget}
          setTotalBudget={setTotalBudget}
        />
        <ExpenseFrom addExpense={onAddHandler} />
      </div>
      <div>
        <ListExpanses list={list} onDelete={onDeleteHandler} />
        <RemainingBudget totalBudget={totalBudget} expenses={list} />
      </div>
      <div>
        <ExpenseChart expenses={list} />
      </div>
    </div>
  );
}

export default App;
