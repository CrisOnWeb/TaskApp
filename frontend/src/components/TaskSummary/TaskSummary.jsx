import './TaskSummary.scss';
import SummaryItem from '../SummaryItem/SummaryItem';
import PendingSummaryIcon from '../icons/PendingSummaryIcon';
import AllSummaryIcon from '../icons/AllSummaryIcon';
import CompletedSummaryIcon from '../icons/CompletedSummaryIcon';

const TaskSummary = ({ pendingTasksSummary, completedTasksSummary }) => {
  return (
    <section className="summary">
      <h2 className="summary__title">Resumen</h2>
      <ul className="summary__list">
        <SummaryItem
          icon={<AllSummaryIcon />}
          number={pendingTasksSummary + completedTasksSummary}
          text="Total tareas"
        />
        <SummaryItem
          icon={<PendingSummaryIcon />}
          number={pendingTasksSummary}
          text="Tareas pendientes"
        />
        <SummaryItem
          icon={<CompletedSummaryIcon />}
          number={completedTasksSummary}
          text="Tareas completadas"
        />
      </ul>
    </section>
  );
};

export default TaskSummary;
