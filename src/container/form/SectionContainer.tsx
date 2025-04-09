type SectionContainerProps = {
  children: React.ReactNode;
  containerClassName?: string;
  containerInnerClassName?: string;
};

const SectionContainer = ({
  children,
  containerClassName,
  containerInnerClassName,
}: SectionContainerProps) => {
  return (
    <div className={`${containerClassName}container`}>
      <div className={`${containerInnerClassName}max-w-[1440px] mx-auto`}>
        {children}
      </div>
    </div>
  );
};

export default SectionContainer;
