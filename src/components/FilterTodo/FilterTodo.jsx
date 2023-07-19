import "./filter-todo.css";

const FilterTodo = ({ filterTodos, filter }) => {
  const handleFilter = (e) => {
    const filterVal = e.target.getAttribute("data-filter");
    filterTodos(filterVal);

    console.log(filter);
  };

  return (
    <div className="filter-tabs">
      <button data-filter="all" onClick={(e) => handleFilter(e)}>
        All
      </button>
      <button data-filter="active" onClick={(e) => handleFilter(e)}>
        Active
      </button>
      <button data-filter="completed" onClick={(e) => handleFilter(e)}>
        Completed
      </button>
    </div>
  );
};

export { FilterTodo };
