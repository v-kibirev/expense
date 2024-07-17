import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { FC } from "react";
import { IExpenseList } from "../App";

interface ExpenseChartProps {
  expenses: IExpenseList[];
}

export const ExpenseChart: FC<ExpenseChartProps> = ({ expenses }) => {
  const data = expenses.map((expense) => ({
    name: expense.name,
    y: expense.amount,
  }));

  const options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Chart Of Expenses",
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "{point.percentage:.1f} %",
          distance: -30, // Adjust this value as needed to place the labels inside the pie chart
          style: {
            color: "white",
            textOutline: "none",
          },
        },
        showInLegend: false,
      },
    },
    series: [
      {
        name: "Expenses",
        data,
      },
    ],
  };

  return (
    <div className="p-4">
      <HighchartsReact highcharts={Highcharts} options={options} />
      <div className="flex flex-wrap justify-center mt-4">
        {data.map((item, index) => {
          const color = Highcharts.getOptions().colors?.[
            index % (Highcharts.getOptions().colors?.length ?? 1)
          ] as string;
          return (
            <div key={index} className="flex items-center mx-2">
              <div
                className="w-4 h-4 rounded-full mr-2"
                style={{ backgroundColor: color }}
              ></div>
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
