import Image from "next/image";
// import { QuizCompletedContext } from './ClassroomInteractiveComponent';
import image1 from "../../../public/student/classroom/eca6b6351bb12ea6e5a1a4cd759cda2ee10d5061.png";
import { ArrowLeft } from "lucide-react";
export interface Question {
  question: string;
  options: { checked: boolean; option: string }[];
}

export const Quiz = ({ question }: { question: Question }) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-[18px] font-semibold">{question.question}</h1>
      <div className="flex flex-col gap-2">
        {question.options.map((o) => (
          <div key={o.option} className="flex items-center">
            <input
              type="radio"
              id={o.option}
              name="options"
              value={o.option}
              checked
              className="mr-5 h-4 w-4 cursor-pointer appearance-none rounded-full border border-black p-0 checked:border-[#800080] checked:bg-[#800080]"
            />
            <label htmlFor={o.option} className="text-[16px]">
              {o.option}
            </label>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
};

export const QuizCompletedComponent = () => {
  // const removeCompletedComponent = useContext(QuizCompletedContext);
  return (
    <div className="flex h-full w-full flex-col items-center">
      <div className="flex h-full w-full items-center justify-center">
        <Image alt="trophy" src={image1} height={186} width={200} />
      </div>
      <div className="w-full">
        <div className="flex flex-col items-center">
          <h5 className="text-center text-[28px] font-semibold md:text-[40px]">
            Congratulation! You passed
          </h5>
          <p className="text-[18px] font-semibold md:text-2xl">
            Your Score: 4/5
          </p>
        </div>
        <div className="mt-10 flex w-full flex-col items-center gap-5">
          <button className="rounded-[5px] bg-[#800080] px-[24px] py-[6px] text-[18px] font-semibold text-white md:px-[60px] md:py-[12px] md:text-[24px]">
            Go to Next Module
          </button>
          <button className="rounded-[5px] border border-[#800080] px-[24px] py-[6px] text-[18px] text-[#800080] md:px-[60px] md:py-[12px] md:text-[24px]">
            Review Answers
          </button>
        </div>
        <button className="my-15 flex w-full items-center justify-center gap-5 text-[18px] text-[#800080] md:text-[24px]">
          <ArrowLeft />
          <p>Back to Module</p>
        </button>
      </div>
    </div>
  );
};

export default Quiz;
