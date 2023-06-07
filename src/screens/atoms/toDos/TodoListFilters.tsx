import { useRecoilState } from "recoil";
import { filterdTodoListState, todoListFilterState } from "../atoms";

export default function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const updateFilter = (event: React.FormEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setFilter(value);
  };
  return (
    <>
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Complete">Completed</option>
        <option value="Show UnCompleted">UnCompleted</option>
      </select>
    </>
  );
}
