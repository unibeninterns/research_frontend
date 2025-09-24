import ExpensesBreakdownOverview from "./ExpensesBreakdownOverview";
import ExpensesLineArea from "./ExpensesLineArea";
import ExpensesTable from "./ExpensesTable";

const ExpensesComponent = () => {
  return (
    <div >
      <ExpensesLineArea />
      <ExpensesTable />
      <ExpensesBreakdownOverview />
    </div>
  );
};

export default ExpensesComponent;
