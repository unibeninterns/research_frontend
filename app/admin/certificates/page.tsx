import AdminInfoComponent from "@/components/admin/AdminInfoComponent";
import CertificateRequestLogTable from "@/components/admin/certificates/CertificateRequestLogTable";
import CertificateRequestOverviewPieChart from "@/components/admin/certificates/CertificateRequestOverviewPieChart";
import CertificateRequirement from "@/components/admin/certificates/CertificateRequirement";
import Certificate1 from "@/components/icons/Certificate1";
import ClipBoard from "@/components/icons/ClipBoard";
import Hourglass2 from "@/components/icons/Hourglass2";
import Prohibit from "@/components/icons/Prohibit";
import SessionsX from "@/components/icons/SessionsX";

const Certificates = () => {
  const cardInfo = [
    {
      icon: <ClipBoard size={25} />,
      param: "Total Requests",
      value: "154",
    },
    {
      icon: <Certificate1 size={25} />,
      param: "Active Courses",
      value: "1",
    },
    {
      icon: <Hourglass2 size={20} />,
      param: "Revenue This Month",
      value: "₦1,240,000",
    },
    {
      icon: <SessionsX />,
      param: "Certificate Requests",
      value: "5",
    },
    {
      icon: <Prohibit size={22} />,
      param: "Today’s New Signups",
      value: "23",
    },
  ];
  return (
    <div>
      <AdminInfoComponent cardInfo={cardInfo} />
      <CertificateRequestLogTable />
      <div className="mt-6 flex items-start justify-between gap-4">
        <CertificateRequestOverviewPieChart />
        <CertificateRequirement />
      </div>
    </div>
  );
};

export default Certificates;
