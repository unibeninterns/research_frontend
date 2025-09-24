import AdminRevenueBarChart from "./AdminRevenueBarChart";
import RevenueTable from "./RevenueTable";

const RevenueComponent = () => {
  const info = {
    labels: [
      "Research Innovation",
      "Data Analysis",
      "Ui/UX Design",
      "Cybersecurity",
      "Artificial Intelligence",
      "CorelDraw",
      "InDesign",
      "Canva",
      "Webflow",
      "Affinity",
    ],
    earned: [
      350000, 80000, 380000, 320000, 370000, 170000, 140000, 245000, 300000,
      180000,
    ],
    payout: [
      165000, 295000, 267000, 310000, 175000, 300000, 100000, 155000, 295000,
      350000,
    ],
  };
  return (
    <div>
      <AdminRevenueBarChart info={info} />
      <RevenueTable info={info} />
    </div>
  );
};

export default RevenueComponent;
