import StudentBarChart from "./StudentBarChart";
import StudentPieChart from "./StudentPieChart";
import StudentTable from "./StudentTable";

const StudentComponent = () => {
  return (
    <div>
      <div className="flex gap-4">
        <StudentPieChart />
        <StudentBarChart />
      </div>
      <StudentTable />
    </div>
  );
};

export default StudentComponent;
