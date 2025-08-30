import {
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  DivideSquare,
  Plus,
} from 'lucide-react';
import Image from 'next/image';
import { createContext, useContext, useState } from 'react';
import Note from './NotesComponents';
import Quiz, { QuizCompletedComponent } from './Quiz';

// interface ToggleCompletedFunctions {
//   showCompleted: () => void;
//   hideCompleted: () => void;
// }

export const QuizCompletedContext = createContext({
  showCompleted: () => {},
  hideCompleted: () => {},
  completed: false,
});
const ClassroomInteractiveComponent = ({
  currentTab,
  setTab,
}: {
  currentTab: string;
  setTab: (tab: string) => void;
}) => {
  const tabs = ['Overview', 'Notes', 'Resources', 'Quiz'];
  const [completed, setCompleted] = useState(true);
  const hideCompleted = () => setCompleted(false);
  const showCompleted = () => setCompleted(true);

  return (
    <QuizCompletedContext.Provider
      value={{ hideCompleted, showCompleted, completed }}
    >
      <div className='h-full w-full flex flex-col items-center'>
        {currentTab === 'Quiz' && (
          <button className='ml-5 my-3 flex gap-5 self-start'>
            <ArrowLeft />
            <p>Back to Module</p>
          </button>
        )}
        <div className='relative w-full shadow-xs'>
          <div className='flex w-full items-center justify-start gap-[36px] md:gap-[72px] mx-5'>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setTab(tab);
                  setCompleted(false);
                }}
                className={`text-[16px] font-semibold ${
                  currentTab === tab
                    ? 'text-[#800080] border-b-[#800080] border-b z-2 transition duration-100 ease-in-out transform scale-102'
                    : ''
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <hr className='absolute bottom-0 w-full' />
        </div>
        <div className='w-full h-full py-5'>
          {currentTab === 'Overview' ? (
            <OverviewComponent />
          ) : currentTab === 'Notes' ? (
            <NotesComponent />
          ) : currentTab === 'Resources' ? (
            <ResourcesComponent />
          ) : currentTab === 'Quiz' ? (
            <QuizComponent />
          ) : null}
        </div>
      </div>
    </QuizCompletedContext.Provider>
  );
};

const OverviewComponent = () => {
  const [showMore, setShowMore] = useState(false);
  const info = {
    show: `This module provides a comprehensive introduction to the technological tools and digital infrastructures that support modern research practices. It explores how innovation and technology intersect to improve research productivity, collaboration, and dissemination. From cloud-based tools and AI-assisted research to digital archiving and knowledge management systems, learners will gain insights into the evolving landscape of academic research.
    The goal is to familiarize students with emerging digital trends, demonstrate how to effectively leverage them in scholarly work, and encourage critical thinking around the ethical use of these technologies in research contexts.`,
    topics: [
      'Evolution of research technologies',
      'Tools for literature review and data analysis',
      'Digital research collaboraiton platforms',
      'Innovations in scientific publishing',
      'Ethics and Integrity in tech-assisted research',
    ],
    outcomes: [
      'Identify and evaluate key digital tools used in academic research',
      'Understand the role of technology in shaping research methodologies',
      'Apply innovative tools in coducting and presenting scholarly work',
      'Discuss ethical considerations in the use of digital research technologies',
    ],
  };
  return (
    <div className='w-full flex flex-col items-center px-2'>
      <div className='w-full text-[20px]'>{info.show}</div>
      {showMore ? (
        <div className='w-full mt-3 flex flex-col'>
          <div className='w-full'>
            <h5 className='text-[20px] font-bold mb-2'>Key Topics Covered</h5>
            <>
              {info.topics.map((topic) => (
                <li key={topic} className='text-[20px]'>
                  {topic}
                </li>
              ))}
            </>
          </div>
          <div className='w-full my-3'>
            <h5 className='text-[20px] font-bold mb-2'>
              Key Learning Outcomes
            </h5>
            <>
              {info.outcomes.map((topic) => (
                <li key={topic} className='text-[20px]'>
                  {topic}
                </li>
              ))}
            </>
          </div>
          <hr />
          <LecturerCard />
          <hr />
          <div className='flex flex-col w-full items-center mt-5 '>
            <p className='text-xs mb-3'>
              Get DRID certificate by completing entire course
            </p>
            <button className='text-[10px] text-[rgba(128,0,128,0.3)] border-[rgba(128,0,128,0.3)] border px-8 py-4 rounded-[5px]'>
              DRID Certificate
            </button>
          </div>
        </div>
      ) : null}
      <div className='text-[#800080] text-[20px] flex gap-5 self-start my-5'>
        <p>Show more</p>
        <button onClick={() => setShowMore((prev) => !prev)}>
          {showMore ? (
            <ChevronUp color='#800080' />
          ) : (
            <ChevronDown color='#800080' />
          )}
        </button>
      </div>
    </div>
  );
};

const LecturerCard = () => {
  const lecturer = {
    name: 'Dr. Trisha Okonkwo',
    description: 'Senior Researcher, Digital Innovation Lab',
    fullDescription:
      'Dr. Trisha Okonkwo is a Senior Research Fellow at the Digital Innovation Lab, where she specializes in the intersection of AI and social science. She has led over 15 international research projects and mentors early-career scholars across Africa. Her passion lies in using data to drive policy impact and inclusive innovation.',
    image: '969234aacd9ebc42fda5f7e9f5cb46d0c64ecd88.png',
  };
  return (
    <div className=' flex flex-row gap-3 w-full justify-center my-5'>
      <div className='h-[110px] w-[110px] z-20'>
        <Image
          src={`/lecturers/${lecturer.image}`}
          alt={lecturer.name}
          className='object-cover rounded-[10px]'
          height={110}
          width={110}
        />
      </div>
      <div className='flex flex-col w-[600px]'>
        <div className='flex justify-between'>
          <div className=''>
            <h3 className='text-2xl font-semibold'>{lecturer.name}</h3>
            <p className='text-[18px] font-light'>{lecturer.description}</p>
          </div>
          {/* <button
                  onClick={hide}
                  className='flex items-center justify-center'
                >
                  <X strokeWidth={2} />
                </button> */}
        </div>
        <div className='mt-4'>
          <p className='text-[20px]'>{lecturer.fullDescription}</p>
        </div>
      </div>
    </div>
  );
};

const NotesComponent = () => {
  const notes = [
    {
      module: '7: Data Analysis & Visualization',
      subModule: '1. Introduction to Data Analysis',
      note: 'The goal is to familiarize students with emerging digital trends, demonstrate how to effectively leverage them in scholarly work, and encourage critical thinking around the ethical use of these technologies in research contexts.',
    },
    {
      module: '5: Data Collection Methods',
      subModule: '1. Introduction to Data Collection',
      note: 'The goal is to familiarize students with emerging digital trends, demonstrate how to effectively leverage them in scholarly work, and encourage critical thinking around the ethical use of these technologies in research contexts. Evolution of research technologies Tools for literature review and data analysis Digital research collaboration platforms Innovations in scientific publishing Ethics and integrity in tech-assisted research',
    },
  ];
  return (
    <div className='flex flex-col w-full'>
      <div className='flex flex-col w-full'>
        <div className='flex items-start px-[12px] gap-[12px] border'>
          <textarea
            placeholder='Create a new note'
            className='w-full py-[12px] outline-0'
          />
          <button className='mt-[12px] bg-black p-[4px] rounded-full'>
            <Plus color='#FFFFFF' strokeWidth={3.5} />
          </button>
        </div>
        <div className='flex gap-10 mt-3'>
          <button className='flex gap-3 px-[16px] py-[8px] border-[#800080] border text-[12px] text-[#800080] items-center rounded-[5px]'>
            <span>Current Lecture</span>
            <ChevronDown />
          </button>
          <button className='flex gap-3 px-[16px] py-[8px] border-[#800080] border text-[12px] text-[#800080] items-center rounded-[5px]'>
            <span>Sort by Module</span>
            <ChevronDown />
          </button>
        </div>
      </div>
      <div className='flex flex-col h-full gap-5 mt-5'>
        {notes.length > 0 ? (
          notes.map((note) => <Note key={note.note} note={note} />)
        ) : (
          <div className='place-self-center my-10'>
            <p>{`Click the "Create a new note" box or the "+" button to make your first note.`}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const ResourcesComponent = () => {
  const resources = [
    {
      title: 'Lesson 1: Introduction to Data Analysis',
      text: 'The goal is to familiarize students with emerging digital trends, demonstrate how to effectively leverage them in scholarly work, and encourage critical thinking around the ethical use of these technologies in research contexts.',
    },
  ];
  return (
    <div className='w-full'>
      <div>
        {resources.map((resource) => (
          <>
            <div
              key={resource.title}
              className='rounded-[5px] border-[1.5px] border-[#800080] px-[16px] py-[12px] mb-3'
            >
              <h5 className='text-lg font-bold border-b mb-3'>
                {resource.title}
              </h5>
              <p>{resource.text}</p>
            </div>
            <div className='flex justify-end mr-5 text-[12px] font-bold gap-10'>
              <button className='rounded-[5px] border border-[#800080] text-[#800080] px-[16px] py-[10px]'>
                Cancel
              </button>
              <button className='rounded-[5px] border bg-[#800080] text-white px-[16px] py-[10px]'>
                Save Note
              </button>
            </div>
          </>
        ))}
      </div>
      <div className='flex gap-10 mt-5'>
        <button className='flex gap-3 px-[16px] py-[8px] border-[#800080] border text-[12px] text-[#800080] items-center rounded-[5px]'>
          <span>Current Lecture</span>
          <ChevronDown />
        </button>
        <button className='flex gap-3 px-[16px] py-[8px] border-[#800080] border text-[12px] text-[#800080] items-center rounded-[5px]'>
          <span>Sort by Module</span>
          <ChevronDown />
        </button>
      </div>
    </div>
  );
};

const QuizComponent = () => {
  const quizzes = [
    {
      question:
        'Q1: What is the main benefit of using digital tools in research?',
      options: [
        { option: 'Faster funding', checked: true },
        { option: 'Improved collaboration', checked: false },
        { option: 'Better typing', checked: false },
        { option: 'Less paperwork', checked: false },
      ],
    },
    {
      question:
        'Q2: What is the main benefit of using digital tools in research?',
      options: [
        { option: 'Faster funding', checked: true },
        { option: 'Improved collaboration', checked: false },
        { option: 'Better typing', checked: false },
        { option: 'Less paperwork', checked: false },
      ],
    },
    {
      question:
        'Q3: What is the main benefit of using digital tools in research?',
      options: [
        { option: 'Faster funding', checked: true },
        { option: 'Improved collaboration', checked: false },
        { option: 'Better typing', checked: false },
        { option: 'Less paperwork', checked: false },
      ],
    },
    {
      question:
        'Q4: What is the main benefit of using digital tools in research?',
      options: [
        { option: 'Faster funding', checked: true },
        { option: 'Improved collaboration', checked: false },
        { option: 'Better typing', checked: false },
        { option: 'Less paperwork', checked: false },
      ],
    },
    {
      question:
        'Q5: What is the main benefit of using digital tools in research?',
      options: [
        { option: 'Faster funding', checked: true },
        { option: 'Improved collaboration', checked: false },
        { option: 'Better typing', checked: false },
        { option: 'Less paperwork', checked: false },
      ],
    },
  ];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const { completed, showCompleted } = useContext(QuizCompletedContext);

  if (completed) {
    return (
      <div className='mt-20'>
        <QuizCompletedComponent />
      </div>
    );
  }

  return (
    <div>
      <Quiz question={quizzes[currentQuestionIndex]} />
      <hr className='border-[#800080]' />
      <div className='flex justify-between mt-3'>
        <p className='font-medium text-[20px]'>{`Question ${
          currentQuestionIndex + 1
        } of ${quizzes.length}`}</p>
        <div className='flex justify-end mr-5 text-[12px] font-bold gap-10'>
          {currentQuestionIndex > 0 && (
            <button
              onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
              className='rounded-[5px] border border-[#800080] text-[#800080] px-[16px] py-[10px]'
            >
              Prev
            </button>
          )}
          {currentQuestionIndex + 1 === quizzes.length ? (
            <button onClick={showCompleted} className='rounded-[5px] bg-[#800080] text-white px-[16px] py-[10px]'>
              Submit
            </button>
          ) : (
            <button
              onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
              className='rounded-[5px] border border-[#800080] text-[#800080] px-[16px] py-[10px]'
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassroomInteractiveComponent;
