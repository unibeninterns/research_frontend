import { LoginForm } from "../../../components/login-form";
import { AuthProvider } from "@/auth-context";

export default function LoginPage() {
  return (
    <AuthProvider>
      <LoginForm />
    </AuthProvider>
  );
}
