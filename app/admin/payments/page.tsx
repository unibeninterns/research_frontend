import AdminInfoComponent from "@/components/admin/AdminInfoComponent";
import Coins from "@/components/icons/Coins";
import Pending from "@/components/icons/Pending";
import Revenue from "@/components/icons/Revenue";
import SessionsTick from "@/components/icons/SessionsTick";
// import Steps from "@/components/icons/steps";
import Steps from "@/components/icons/Steps";

const Payment = () => {
  const cardInfo = [
    {
      icon: <Revenue />,
      param: "Revenue This Month",
      value: "₦1,240,000",
    },
    {
      icon: <Coins />,
      param: "Revenue This Month",
      value: "₦350,000",
    },
    {
      icon: <SessionsTick />,
      param: "Total Payouts",
      value: "₦200,000",
    },
    {
      icon: <Pending />,
      param: "Pending Payouts",
      value: "₦200,000",
    },
    {
      icon: <Steps />,
      param: "Total Transactions",
      value: 100,
    },
  ];
  return (
    <div>
      <AdminInfoComponent cardInfo={cardInfo} />
      <div></div>
    </div>
  );
};
export default Payment;
