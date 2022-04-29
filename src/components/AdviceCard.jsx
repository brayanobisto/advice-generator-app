import { useState, useEffect } from 'react';

function AdviceCard() {
  const [advice, setAdvice] = useState({});

  useEffect(() => {
    getAdvice();
  }, []);

  const getAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then((res) => res.json())
      .then((advice) => {
        const { slip } = advice;
        setAdvice(slip);
      });
  };

  return (
    <div className="bg-darkGrayishBlue shadow-lg rounded-xl flex flex-col items-center px-6 relative mobile:max-w-[350px] mobile:w-[350px] desktop:max-w-xl">
      <h1 className="uppercase text-neonGreen mt-12 mb-8 tracking-[0.2rem] text-xs">
        Advice #{advice.id}
      </h1>
      <q className="text-center text-lightCyan text-[28px] mb-16 mobile:mb-6 desktop:mb-8">
        {advice.advice}
      </q>

      <svg
        className="mb-16 hidden mobile:block"
        width="295"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fillRule="evenodd">
          <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
          <g transform="translate(138)" fill="#CEE3E9">
            <rect width="6" height="16" rx="3" />
            <rect x="14" width="6" height="16" rx="3" />
          </g>
        </g>
      </svg>

      <svg
        className="hidden desktop:block desktop:mb-16"
        width="444"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fillRule="evenodd">
          <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
          <g transform="translate(212)" fill="#CEE3E9">
            <rect width="6" height="16" rx="3" />
            <rect x="14" width="6" height="16" rx="3" />
          </g>
        </g>
      </svg>

      <button
        aria-label="Refresh Advice"
        onClick={getAdvice}
        type="button"
        className="bg-neonGreen h-16 w-16 flex overflow-hidden rounded-full absolute -bottom-8 left-1/2 -translate-x-1/2 cursor-pointer hover:shadow-[0px_0px_25px_0px] hover:shadow-neonGreen transition-all ease-in-out duration-300"
      >
        <svg className="m-auto" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          />
        </svg>
      </button>
    </div>
  );
}

export default AdviceCard;
