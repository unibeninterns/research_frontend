import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

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

    <div className='flex items-center justify-between mt-1 md:m-2 rounded-[16px] border-2 border-[#800080] p-1 md:py-2 md:px-4 w-full'>
      <div className='flex flex-col'>
        <h1 className='text-[15px] lg:text-[20px] font-semibold'>{question}</h1>
        {isFocused && <p className='text-sm mt-2 lg:text-lg'>{answer}</p>}
      </div>
      <div onClick={handleClick} className='text-[#800080 cursor-pointer'>
        {isFocused ? <ChevronUp /> : <ChevronDown />}
      </div>
    </div>
  );
};

const FAQs = ({ faqs }: { faqs: FAQProps[] }) => {
  const [focus, setFocus] = useState('');
  const handleFocus = (question: string) => {
    setFocus(focus === question ? '' : question);
  };
  return (

    <div className='flex flex-col items-center  w-full'>
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
