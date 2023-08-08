import React, { useState, useEffect } from "react";
import "./FilterTodo.css";

export default function FilterTodo({ filterTodos }) {
  const [filter, setFilter] = useState("all");

  const handleFilter = (e) => {
    const filterVal = Number(e.target.getAttribute("data-filter"));
    setFilter(filterVal);
    return filter;
  };

  useEffect(() => {
    filterTodos(filter);
    // eslint-disable-next-line
  }, [filter]);

  return (
    <div className="filter-tabs">
      <button type="button" data-filter="0" onClick={(e) => handleFilter(e)}>
        All
      </button>
      <button type="button" data-filter="1" onClick={(e) => handleFilter(e)}>
        Active
      </button>
      <button type="button" data-filter="2" onClick={(e) => handleFilter(e)}>
        Completed
      </button>
    </div>
  );
}
