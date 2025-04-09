import { cn } from "@/lib/cn";
import { ReactNode, FC } from "react";

type TSectionContainerProps = {
  children: ReactNode;
  containerClassName?: string;
  containerInnerClassName?: string;
};

const SectionContainer: FC<TSectionContainerProps> = ({
  children,
  containerClassName = "",
  containerInnerClassName = "",
}) => {
  return (
    <div className={cn("w-full", containerClassName)}>
      <div
        className={cn(
          "max-w-[1240px] mx-auto overflow-hidden",
          containerInnerClassName
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default SectionContainer;
