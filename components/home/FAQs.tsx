import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface FAQProps {
  question: string;
  answer: string;
}

const FAQ = ({
  question,
  answer,
  handleFocus,
  isFocused,
}: {
  question: string;
  answer: string;
  handleFocus: (question: string) => void;
  isFocused: boolean;
}) => {
  const handleClick = () => handleFocus(question);
  return (
    <div
      className={`mt-1 flex w-full items-center justify-between rounded-[16px] border-2 p-1 md:m-2 md:px-4 md:py-2 ${isFocused ? "border-[#800080]" : ""}`}
    >
      <div className="flex flex-col">
        <p className="text-[15px] font-semibold lg:text-[18px]">{question}</p>
        {isFocused && <p className="mt-2 text-sm lg:text-base">{answer}</p>}
      </div>
      <div onClick={handleClick} className="text-[#800080 cursor-pointer">
        {isFocused ? <ChevronUp /> : <ChevronDown />}
      </div>
    </div>
  );
};

const FAQs = ({ faqs }: { faqs: FAQProps[] }) => {
  const [focus, setFocus] = useState(faqs[0].question);
  const handleFocus = (question: string) => {
    setFocus(focus === question ? "" : question);
  };
  return (
    <div className="flex w-full flex-col items-center px-4">
      {faqs.map(({ question, answer }) => (
        <FAQ
          key={question}
          question={question}
          answer={answer}
          isFocused={focus === question}
          handleFocus={handleFocus}
        />
      ))}
    </div>
  );
};

export default FAQs;
