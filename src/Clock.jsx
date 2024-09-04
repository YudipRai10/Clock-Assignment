import React, { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatTime = () => {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )} ${meridiem}`;
  };

  const padZero = (number) => {
    return (number < 10 ? "0" : "") + number;
  };
  // const [time, setTime] = useState(new Date());

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setTime(new Date());
  //   }, 1000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  // const formatTime = () => {
  //   let hours = time.getHours();
  //   const minutes = time.getMinutes();
  //   const seconds = time.getSeconds();

  //   const meridiem = hours >= 12 ? "PM" : "AM";
  //   hours = hours % 12 || 12;

  //   return `${padZero(hours)}:${padZero(minutes)}:${padZero(
  //     seconds
  //   )} ${meridiem}`;
  // };

  // const padZero = (number) => {
  //   return (number < 10 ? "0" : "") + number;
  // };

  return (
    <div className="backdrop-sepia w-[100vw] px-2">
      <div className="text-center">
        <span className="text-white text-8xl font-bold font-mono">
          {formatTime()}
        </span>
      </div>
    </div>
  );
}

export default Clock;
