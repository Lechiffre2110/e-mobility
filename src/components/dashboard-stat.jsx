import { useState, useEffect } from "react";
import * as Progress from "@radix-ui/react-progress";
export default function DashboardStat(props) {
  const [progress, setProgress] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(props.value*5), props.order * 200);
    return () => clearTimeout(timer);
  }, [props.value]);

  return (
    <>
      <div className="mt-4 w-full h-[90px] flex flex-col justify-around bg-white border rounded-xl px-3 py-1">
        <div className="flex flex-row items-start justify-between w-full">
          <img src={props.icon} className="w-[30px] h-[30px]" />
          <div>
            <h3>{props.title}</h3>
            <p className="text-2xl font-bold text-right">{props.value}</p>
          </div>
        </div>
        <Progress.Root
          className="relative overflow-hidden bg-blackA9 rounded-full w-full h-[5px]"
          style={{
            transform: "translateZ(0)",
          }}
          value={progress}
        >
          <Progress.Indicator
            className="bg-blue7 w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
            style={{ transform: `translateX(-${100 - progress}%)` }}
          />
        </Progress.Root>
      </div>
    </>
  );
}
