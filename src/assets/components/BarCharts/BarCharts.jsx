import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const BarCharts = () => {
  const overs = [
    { over: 1, runs: 6, fallOfWickets: 0 },
    { over: 2, runs: 12, fallOfWickets: 1 },
    { over: 3, runs: 8, fallOfWickets: 1 },
    { over: 4, runs: 10, fallOfWickets: 1 },
    { over: 5, runs: 7, fallOfWickets: 2 },
    { over: 6, runs: 5, fallOfWickets: 2 },
    { over: 7, runs: 14, fallOfWickets: 3 },
    { over: 8, runs: 11, fallOfWickets: 4 },
    { over: 9, runs: 9, fallOfWickets: 5 },
    { over: 10, runs: 13, fallOfWickets: 7 },
  ];
  return (
    <div>
      <div>
        <BarChart width={400} height={300} data={overs}>
          <Bar dataKey="runs" fill="green" />
          <Bar dataKey="fallOfWickets" fill="red" />
          <XAxis />
          <YAxis />
          <Legend></Legend>
        </BarChart>
      </div>
      <div>
        <BarChart width={500} height={300} data={overs}>
          <Bar dataKey="runs" fill="orange" />
          <CartesianGrid/>
          <XAxis />
          <YAxis />
          <Legend/>
          <Tooltip/>
        </BarChart>
      </div>
    </div>
  );
};

export default BarCharts;
