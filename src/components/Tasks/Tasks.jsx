import TaskItem from '../TaskItem/TaskItem';
import './Tasks.scss';

const Tasks = ({ title, icon, tasks, onToggleTask }) => {
  return (
    <section className="tasks">
      <div className="tasks__name">
        {icon}
        <h2 className="tasks__title">{title}</h2>
        <span className="tasks__number">14</span>
      </div>
      <ul className="tasks__list">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onToggleTask={onToggleTask} />
        ))}
      </ul>
    </section>
  );
};

export default Tasks;
