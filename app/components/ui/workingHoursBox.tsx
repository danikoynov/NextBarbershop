type WorkingHoursBoxProps = {
  day: string;
  hours: string;
};

const WorkingHoursBox = ({ day, hours }: WorkingHoursBoxProps) => {
  return (
    <div className="flex items-center justify-center w-16 h-14 sm:w-18 sm:h-16 md:w-32 md:h-30 bg-amber-400 rounded-xl shadow-md">
      <div className="text-center">
        <p className="text-[10px] font-semibold text-lg sm:text-sm md:text-lg text-white">
          {day}
        </p>
        <p className="text-[10px] sm:text-xs md:text-sm text-white">{hours}</p>
      </div>
    </div>
  );
};

export default WorkingHoursBox;
