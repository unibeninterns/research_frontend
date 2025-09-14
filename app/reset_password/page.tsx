import Message from '@/components/icons/message';
import Padlock from '@/components/icons/padlock';
import { ArrowRight } from 'lucide-react';

const ResetPassword = () => {
  return (
    <div className='bg-white flex items-center justify-center min-h-screen'>
      <div className='border-1 rounded-[16px] shadow-sm flex flex-col gap-6 py-8 px-6'>
        <div className='flex flex-col items-center gap-4'>
          <Padlock />
          <div>
            <h2 className='text-[28px] font-bold text-center'>
              Reset Password
            </h2>
            <p className='text-sm text-center'>
              {`Enter your email address and we'll send a link to your email to`}
              <br />
              reset your password.
            </p>
          </div>
        </div>
        <div>
          <form action='' className='flex flex-col items-center w-full gap-6'>
            <div className='p-4 rounded-[20px] border bg-[#FBFBFB] border-[#F5F5F5] w-full flex gap-2 items-center shadow-xs'>
              <Message />
              <input
                type='text'
                placeholder='Email Address'
                className='flex-1 outline-none text-[#848484] text-sm'
              />
            </div>
            <button
              type='submit'
              className='primary-button text-sm font-[600] py-4 px-12 rounded-[5px]'
            >
              Send Reset Link
            </button>
            <div className='flex items-center w-full'>
              <p className='flex-1 text-sm text-center'>
                Remember your password?
              </p>
              <a href='#' className='tertiary-button'>
                <button className='flex justify-between gap-4  px-12 py-4 self-center rounded-[4px] lg:text-sm text-[#800080]'>
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
