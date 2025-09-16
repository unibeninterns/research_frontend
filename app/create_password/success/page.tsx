import TickCircle from "@/components/icons/tickCircle";

const Success = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-white text-center">
      <TickCircle />
      <h2 className="mt-5 text-[42px]">Password Reset Successful</h2>
      <p className="mt-5 text-base">
        Your password has been updated. You can now log in with your new
        credentials.
      </p>
      <a href="#">
        <button className="primary-button mt-20 rounded-[5px] px-12 py-4 font-[600]">
          Login
        </button>
      </a>
    </div>
  );
};

export default Success;
