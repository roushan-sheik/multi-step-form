import React, { FC } from "react";

type TFormProgressProps = {
  progress: string; // e.g., '35%' or '100%'
};

const FormProgress: FC<TFormProgressProps> = ({ progress }) => {
  const isComplete = progress === "100%";

  return (
    <div className="w-full h-[30px] rounded-[33px] my-8 bg-[#e6e6e6] overflow-hidden">
      <div
        className={`h-[30px] rounded-[33px] transition-all duration-300 ease-in-out ${
          isComplete ? "bg-green-500" : "bg-[#f43676]"
        }`}
        style={{ width: progress }}
      ></div>
    </div>
  );
};

export default FormProgress;
