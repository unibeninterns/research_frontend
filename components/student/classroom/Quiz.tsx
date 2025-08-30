import Image from 'next/image';
import { useContext } from 'react';
// import { QuizCompletedContext } from './ClassroomInteractiveComponent';
import image1 from '../../../public/student/classroom/eca6b6351bb12ea6e5a1a4cd759cda2ee10d5061.png';
import { ArrowLeft } from 'lucide-react';
interface Question {
  question: string;
  options: { checked: boolean; option: string }[];
}

export const Quiz = ({ question }: { question: Question }) => {
  return (
    <div className='mb-5'>
      <h1 className='text-[24px] font-semibold mb-3'>{question.question}</h1>
      <div className='flex flex-col gap-2'>
        {question.options.map((o) => (
          <div key={o.option} className='flex items-center'>
            <input
              type='radio'
              id={o.option}
              name='options'
              value={o.option}
              checked
              className='appearance-none rounded-full mr-5 border-[#800080] h-6 w-6 p-0 cursor-pointer border-2 checked:bg-[#800080]'
            />
            <label htmlFor={o.option}>{o.option}</label>
            <br></br>
          </div>
        ))}
      </div>
    </div>
  );
};

export const QuizCompletedComponent = () => {
  // const removeCompletedComponent = useContext(QuizCompletedContext);
  return (
    <div className='h-full w-full flex flex-col items-center'>
      <div className='h-full w-full flex justify-center items-center'>
        <Image
          alt='trophy'
          src={image1}
          height={186}
          width={200}
        />
      </div>
      <div className='w-full'>
        <div className='flex flex-col items-center'>
          <h5 className='text-[40px] font-semibold'>
            Congratulation! You passed
          </h5>
          <p className='text-2xl font-semibold'>Your Score: 4/5</p>
        </div>
        <div className='w-full flex flex-col gap-5 items-center mt-10'>
          <button className='rounded-[5px] bg-[#800080] text-white px-[60px] py-[12px] text-[24px] font-semibold'>
            Go to Next Module
          </button>
          <button className='rounded-[5px] border border-[#800080] text-[#800080] px-[60px] py-[12px] text-[24px]'>
            Review Answers
          </button>
        </div>
        <button className='my-15 justify-center items-center text-[24px] flex gap-5 text-[#800080] w-full'>
          <ArrowLeft />
          <p>Back to Module</p>
        </button>
      </div>
    </div>
  );
};

export default Quiz;
