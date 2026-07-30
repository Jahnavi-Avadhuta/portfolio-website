import { GitHubCalendar } from "react-github-calendar";

const Calendar = () => {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-6">
      <GitHubCalendar
        username="Jahnavi-Avadhuta"
        blockSize={14}
        blockMargin={5}
        fontSize={14}
      />
    </div>
  );
};

export default Calendar;