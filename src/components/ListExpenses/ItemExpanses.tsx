import { FC } from "react";

interface ItemExpansesProps {
  name: string;
  amount: number;
  onDelete: () => void;
}
export const ItemExpanses: FC<ItemExpansesProps> = ({
  name,
  amount,
  onDelete,
}) => {
  return (
    <div className="flex justify-between p-2 border">
      <div>
        <span className="display-inline-block p-1 bg-blue-400">{name}</span>
      </div>
      <div>{amount.toFixed(2)} $</div>

      <button onClick={onDelete} className="border border-black rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.6}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};
