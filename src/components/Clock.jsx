import React, { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const inter = setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  let hours = time.getHours();
  let min = time.getMinutes();

  return (
    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 font-semibold">
      {" "}
      <span>{`${hours <10 ? `0${hours}` : hours}:`}</span>{" "}
      <span className="text-violet-500 ">
        {`${min < 10 ? `0${min}` : min}`}
      </span>{" "}
    </div>
  );
}

export default Clock;
