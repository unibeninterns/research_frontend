import Beaker from '@/components/icons/beaker';
import Hourglass from '@/components/icons/hourglass';
import { Progress } from '@/components/ui/progress';

const WelcomeHeader = () => {
  return (
    <>
      {/* Welcome Header */}
      <div className='flex items-center justify-between'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-[28px] font-semibold text-gray-900'>
            Welcome back, Raymond
          </h1>
          <div>
            <p className='text-gray-600 text-xs'>
              You&apos;re currently enrolled in:
            </p>
            <h2 className='text-lg font-semibold text-gray-900'>
              Research Technologies & Innovation
            </h2>
          </div>

          <div className='flex items-center space-x-2 text-sm text-gray-600 mt-2'>
            <Hourglass />
            <span className='text-xs'>
              You have 6 weeks remaining to complete this course
            </span>
          </div>
          {/* Progress Bar */}
          <div className='space-y-2 mt-6'>
            <Progress value={50} className='h-3' />
            <p className='text-xs text-gray-600'>
              You&apos;re doing great — just 6 modules to go!
            </p>
          </div>
        </div>
        <div className='hidden lg:block'>
          <Beaker />
        </div>
      </div>
    </>
  );
};

export default WelcomeHeader;
