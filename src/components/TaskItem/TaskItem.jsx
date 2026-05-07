import './TaskItem.scss';

const TaskItem = ({ task, onToggleTask }) => {
  return (
    <li className="tasks__item">
      <input
        className="tasks__input"
        type="checkbox"
        name="task"
        id="task"
        checked={task.completed}
        onChange={() => {
          onToggleTask(task.id);
        }}
      />
      <label
        className={`tasks__label ${task.completed ? 'completed' : ''}`}
        htmlFor="task"
      >
        {task.task}
      </label>
      <button className="tasks__btn">
        <svg
          className="tasks__trash"
          xmlns="http://www.w3.org/2000/svg"
          width="256"
          height="256"
          viewBox="0 0 24 24"
        >
          <g>
            <path
              fillRule="evenodd"
              d="M17 5V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v1H4a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V7h1a1 1 0 1 0 0-2h-3Zm-2-1H9v1h6V4Zm2 3H7v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7Z"
              clipRule="evenodd"
            />
            <path d="M9 9h2v8H9V9Zm4 0h2v8h-2V9Z" />
          </g>
        </svg>
      </button>
    </li>
  );
};

export default TaskItem;
