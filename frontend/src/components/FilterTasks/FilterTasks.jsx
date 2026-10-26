import './FilterTasks.scss';

const FilterTasks = ({ filter, handleFilterChange }) => {
  const handleFilterAllBtn = () => {
    handleFilterChange('all');
  };
  const handleFilterPendingBtn = () => {
    handleFilterChange('pending');
  };
  const handleFilterCompletedBtn = () => {
    handleFilterChange('completed');
  };

  return (
    <section className="filter">
      <h2 className="filter__title">Filtros</h2>
      <div className="filter__btns">
        <button
          className={`filter__btn ${filter === 'all' ? 'filter__btn--active' : ''}`}
          onClick={handleFilterAllBtn}
        >
          Todas
        </button>
        <button
          className={`filter__btn ${filter === 'pending' ? 'filter__btn--active' : ''}`}
          onClick={handleFilterPendingBtn}
        >
          Pendientes
        </button>
        <button
          className={`filter__btn ${filter === 'completed' ? 'filter__btn--active' : ''}`}
          onClick={handleFilterCompletedBtn}
        >
          Completadas
        </button>
      </div>
    </section>
  );
};

export default FilterTasks;
