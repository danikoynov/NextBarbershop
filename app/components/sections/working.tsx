import React from "react";

import WorkingHoursBox from "../ui/workingHoursBox";
const Working = () => {
  return (
    <div
      className="w-full h-[230px] bg-neutral-900 flex items-center justify-center"
      id="working"
    >
      <div className="px-4 py-6 w-full max-w-7xl">
        {/* Flex container to make the boxes scale properly */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 md:gap-9">
          <WorkingHoursBox day="Понеделник" hours="9:00 - 19:00" />
          <WorkingHoursBox day="Вторник" hours="9:00 - 19:00" />
          <WorkingHoursBox day="Сряда" hours="9:00 - 19:00" />
          <WorkingHoursBox day="Четвъртък" hours="9:00 - 19:00" />
          <WorkingHoursBox day="Петък" hours="9:00 - 19:00" />
          <WorkingHoursBox day="Събота" hours="9:00 - 19:00" />
          <WorkingHoursBox day="Неделя" hours="Затворено" />
        </div>
      </div>
    </div>
  );
};

export default Working;
