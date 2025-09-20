import Message from "@/components/icons/Message";
import Padlock from "@/components/icons/Padlock";
import { ArrowRight } from "lucide-react";

const ResetPassword = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col gap-6 rounded-[16px] border-1 px-6 py-8 shadow-sm">
        <div className="flex flex-col items-center gap-4">
          <Padlock />
          <div>
            <h2 className="text-center text-[28px] font-bold">
              Reset Password
            </h2>
            <p className="text-center text-sm">
              {`Enter your email address and we'll send a link to your email to`}
              <br />
              reset your password.
            </p>
          </div>
        </div>
        <div>
          <form action="" className="flex w-full flex-col items-center gap-6">
            <div className="flex w-full items-center gap-2 rounded-[20px] border border-[#F5F5F5] bg-[#FBFBFB] p-4 shadow-xs">
              <Message />
              <input
                type="text"
                placeholder="Email Address"
                className="flex-1 text-sm text-[#848484] outline-none"
              />
            </div>
            <button
              type="submit"
              className="primary-button rounded-[5px] px-12 py-4 text-sm font-[600]"
            >
              Send Reset Link
            </button>
            <div className="flex w-full items-center">
              <p className="flex-1 text-center text-sm">
                Remember your password?
              </p>
              <a href="#" className="tertiary-button">
                <button className="flex justify-between gap-4 self-center rounded-[4px] px-12 py-4 text-[#800080] lg:text-sm">
                  <p>Login</p>
                  <ArrowRight />
                </button>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
