import {
  LineChart as LChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine
} from "recharts";

const LineChart = () => {
  const studentData = [
    { id: 1, name: "Student1", Math: 85, Physics: 88, Biology: 79 },
    { id: 2, name: "Student2", Math: 78, Physics: 83, Biology: 81 },
    { id: 3, name: "Student3", Math: 92, Physics: 91, Biology: 83 },
    { id: 4, name: "Student4", Math: 87, Physics: 86, Biology: 85 },
    { id: 5, name: "Student5", Math: 75, Physics: 78, Biology: 80 },
    { id: 6, name: "Student6", Math: 88, Physics: 85, Biology: 82 },
    { id: 7, name: "Student7", Math: 90, Physics: 93, Biology: 88 },
    { id: 8, name: "Student8", Math: 81, Physics: 87, Biology: 86 },
    { id: 9, name: "Student9", Math: 84, Physics: 89, Biology: 87 },
    { id: 10, name: "Student10", Math: 89, Physics: 82, Biology: 84 },
  ];

  return (
    <div>
      <div>
        <LChart width={500} height={300} data={studentData}>
          <CartesianGrid />
          <XAxis />
          <YAxis />
          <Tooltip />
          <Line dataKey="Math" stroke="red" />
        </LChart>
      </div>
      <div>
        <LChart width={600} height={400} data={studentData}>
          <CartesianGrid stroke="pink" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="Math" stroke="red" />
          <Line type="monotone" dataKey="Physics" stroke="green" />
        </LChart>
      </div>
      <div>
         <ResponsiveContainer width="90%"  height={300}>
            <LChart width={400} height={300} data={studentData}>
               <Line type="monotone"  dataKey="Biology" stroke="blue"  strokeDasharray="5 5"/>
               <XAxis dataKey="name"/>
               <YAxis/>
               <Tooltip/>
               <Legend/>
               <ReferenceLine x="Student7" label="Highest Marks in Biology" stroke="goldenrod"/>
            </LChart>
         </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChart;
