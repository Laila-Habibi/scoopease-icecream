import { useState, useEffect } from 'react';

const ReverseAutomatedCounter: React.FC = () => {
  const [hours, setHours] = useState(23);
  const [minutes, setMinutes] = useState(59);
  const [seconds, setSeconds] = useState(59);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          setMinutes((prevMinutes) => {
            if (prevMinutes === 0) {
              setHours((prevHours) => (prevHours === 0 ? 23 : prevHours - 1));
              return 59;
            }
            return prevMinutes - 1;
          });
          return 59;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex md:justify-center md:items-center items-start">
      <div className="text-yellow-400">
       
        <div className="md:text-6xl text-4xl font-bold">
          {String(hours).padStart(2, '0')}:
          {String(minutes).padStart(2, '0')}:
          {String(seconds).padStart(2, '0')}
        </div>
      </div>
    </div>
  );
};

export default ReverseAutomatedCounter;