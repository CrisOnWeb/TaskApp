import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import NewTask from '../../components/NewTask/NewTask';
import Tasks from '../../components/Tasks/Tasks';
import PendingIcon from '../../components/icons/PendingIcon';
import CompletedIcon from '../../components/icons/CompletedIcon';
import FilterTasks from '../../components/FilterTasks/FilterTasks';
import TaskSummary from '../../components/TaskSummary/TaskSummary';

const TaskApp = ({
  search,
  setSearch,
  newTaskInput,
  setNewTaskInput,
  addTask,
  filter,
  handleFilterChange,
  pendingTasksSummary,
  completedTasksSummary,
  numberOfPendingTasks,
  numberOfCompletedTasks,
  searchedPendingTasks,
  searchedCompletedTasks,
  toggleTask,
  deleteTask,
}) => {
  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <main className="main central-column">
        <aside className="aside-menu">
          <NewTask
            newTaskInput={newTaskInput}
            setNewTaskInput={setNewTaskInput}
            onAddTask={addTask}
          />
          <FilterTasks
            filter={filter}
            handleFilterChange={handleFilterChange}
          />
          <TaskSummary
            pendingTasksSummary={pendingTasksSummary}
            completedTasksSummary={completedTasksSummary}
          />
        </aside>
        <div className="content">
          {(filter === 'pending' || filter === 'all') && (
            <Tasks
              title="Tareas pendientes"
              numberOfTasks={numberOfPendingTasks}
              icon={<PendingIcon />}
              tasks={searchedPendingTasks}
              onToggleTask={toggleTask}
              onDeleteTask={deleteTask}
              emptyMessage="🎉 ¡Bien hecho! No hay tareas pendientes."
            />
          )}
          {(filter === 'completed' || filter === 'all') && (
            <Tasks
              title="Tareas completadas"
              numberOfTasks={numberOfCompletedTasks}
              icon={<CompletedIcon />}
              tasks={searchedCompletedTasks}
              onToggleTask={toggleTask}
              onDeleteTask={deleteTask}
              emptyMessage="🌱 Tus tareas completadas aparecerán aquí."
            />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TaskApp;
