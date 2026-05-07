import './FilterTasks.scss';

const FilterTasks = () => {
  return (
    <section className="filter">
      <button className="filter__btn filter__all">Todas</button>
      <button className="filter__btn filter__pending">Pendientes</button>
      <button className="filter__btn filter__completed">Completadas</button>
    </section>
  );
};

export default FilterTasks;
