import { FC } from "react";
import { IExpenseList } from "../../App";
import { ItemExpanses } from "./ItemExpanses";

interface ListExpansesProps {
  list: IExpenseList[];
  onDelete: (id: number) => void;
}
export const ListExpanses: FC<ListExpansesProps> = ({ list, onDelete }) => {
  const title = (
    <h3 className="mb-16 center font-bold text-center text-sm">
      List Of Expenses
    </h3>
  );

  if (list.length === 0) {
    return (
      <>
        {title}
        <p className="mb-7">Expenses list is empty</p>
      </>
    );
  }

  return (
    <div className="mb-7">
      {title}
      {list.map((item) => (
        <ItemExpanses
          key={item.id}
          name={item.name}
          amount={item.amount}
          onDelete={() => onDelete(item.id)}
        />
      ))}
    </div>
  );
};
