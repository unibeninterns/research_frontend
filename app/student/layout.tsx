import type { Metadata } from "next";
import StudentLayout from "@/components/student/StudentLayout";
// import { AuthProvider } from "@/auth-context";
import UserInfoComponent from "@/context/UserContext";

export const metadata: Metadata = {
  title: "DRID - Learning Management System",
  description: "Student Dashboard",
};

export default function StudentRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserInfoComponent>
      <StudentLayout>{children}</StudentLayout>
    </UserInfoComponent>
  );
}
