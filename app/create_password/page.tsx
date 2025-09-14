'use client';
import Eye from '@/components/icons/eye';
import EyeSlash from '@/components/icons/eyeSlash';
import PadlockSmall from '@/components/icons/padlockSmall';
import { ArrowRight } from 'lucide-react';
import { useState, MouseEvent } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
const passwordSchema = z
  .object({
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(20, 'Password must be at most 20 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

type PasswordSchema = z.infer<typeof passwordSchema>;

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShow = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };
  const { register, formState, handleSubmit } = useForm({
    mode: 'onTouched',
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });
  const { errors, isDirty, isValid, isSubmitting } = formState;

  const submitData = (data: PasswordSchema) => console.log(data);

  return (
    <div className='bg-white flex items-center justify-center min-h-screen'>
      <div className='border-1 rounded-[16px] shadow-sm flex flex-col gap-6 py-8 px-6'>
        <div className='flex flex-col items-center gap-4'>
          <div>
            <h2 className='text-[28px] font-bold text-center'>
              Create New Password
            </h2>
            <p className='text-sm text-center'>
              {`Enter your email address and we'll send a`}
              <br />
              link to your email to reset your password.
            </p>
          </div>
        </div>
        <div>
          <form
            onSubmit={handleSubmit(submitData)}
            className='flex flex-col items-center w-full gap-6'
          >
            <div
              className={`flex flex-col items-start w-full ${
                errors.password
                  ? 'text-error'
                  : 'text-[#848484] focus-within:text-[#800080]'
              }`}
            >
              <div
                className={`p-4 pt-1 rounded-[20px] border bg-[#FBFBFB] border-[#F5F5F5] w-full flex flex-col gap-2 shadow-xs mt-1 ${
                  errors.password
                    ? 'border-error'
                    : 'focus-within:border-[#800080]'
                }`}
              >
                <label
                  htmlFor='password'
                  className='text-[10px] font-[500]  ml-3'
                >
                  New Password
                </label>
                <div className='flex w-full gap-2  items-center'>
                  <PadlockSmall />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Enter Password'
                    className='flex-1 outline-none text-[#848484] text-sm'
                    id='password'
                    {...register('password')}
                  />
                  <button onClick={toggleShow} className=''>
                    {showPassword ? <EyeSlash /> : <Eye />}
                  </button>
                </div>
              </div>
              {errors.password && (
                <p className='text-xs ml-3 mt-2'>{errors.password.message}</p>
              )}
            </div>
            <div
              className={`flex flex-col items-start w-full ${
                errors.confirmPassword
                  ? 'text-error'
                  : 'text-[#848484] focus-within:text-[#800080]'
              }`}
            >
              <div
                className={`p-4 pt-1 rounded-[20px] border bg-[#FBFBFB] border-[#F5F5F5] w-full flex flex-col gap-2 shadow-xs mt-1 ${
                  errors.confirmPassword
                    ? 'border-error'
                    : 'focus-within:border-[#800080]'
                }`}
              >
                <label
                  htmlFor='confirm_password'
                  className='text-[10px] font-[500]  ml-3'
                >
                  Confirm Password
                </label>
                <div className='flex w-full gap-2  items-center'>
                  <PadlockSmall />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Confirm Password'
                    className='flex-1 outline-none text-[#848484] text-sm'
                    id='confirm_password'
                    {...register('confirmPassword')}
                  />
                  <button onClick={toggleShow} className=''>
                    {showPassword ? <EyeSlash /> : <Eye />}
                  </button>
                </div>
              </div>
              {errors.confirmPassword && (
                <p className='text-xs ml-3 mt-2'>
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            <button
              type='submit'
              className='primary-button text-sm font-[600] py-4 px-12 rounded-[5px]'
              disabled={!isDirty || !isValid || isSubmitting}
            >
              Reset Password
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
