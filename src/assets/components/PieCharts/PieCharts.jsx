import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

const PieCharts = () => {
  const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 },
  ];

  return (
    <div>
      <PieChart width={300} height={200}>
        <Pie data={data01} dataKey="value" cx={"50%"} cy={"50%"} fill="violet" />
        <Tooltip/>
      </PieChart>
    </div>
  );
};

export default PieCharts;
