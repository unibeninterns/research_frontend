"use client";
import { Users, UserCheck, Hourglass, BookOpen } from "lucide-react";
import type React from "react";
import TutorsTable from "@/components/admin/tutor-components/tutors-table";
import ExpertInstructorsTable from "@/components/admin/tutor-components/expert-instructors-table";
import AssistantTutorsTable from "@/components/admin/tutor-components/assistant-tutors-table";
import TutorNotifications from "@/components/admin/tutor-components/tutor-notifications";
import TutorQuickActions from "@/components/admin/tutor-components/tutor-quick-actions";
import AdminInfoComponent from "@/components/admin/AdminInfoComponent";

const TutorsPage: React.FC = (): React.JSX.Element => {
  const cardInfo = [
    {
      icon: <Users />,
      param: "Total Tutors",
      value: "40",
    },
    {
      icon: <UserCheck />,
      param: "Active Tutors",
      value: "30",
    },
    {
      icon: <Hourglass />,
      param: "Pending Invitations",
      value: "5",
    },
    {
      icon: <BookOpen />,
      param: "Courses Assigned",
      value: "10",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="mx-auto w-full space-y-6">
        <AdminInfoComponent cardInfo={cardInfo} />

        <div className="grid grid-cols-1 gap-6">
          <TutorsTable />
          <ExpertInstructorsTable />
          <AssistantTutorsTable />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <TutorNotifications />
            <TutorQuickActions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorsPage;
