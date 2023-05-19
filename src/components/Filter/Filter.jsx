import { GrFilter } from 'react-icons/gr';
import css from '../Filter/Filter.module.css';

const Filter = ({ handleFilterChange }) => {
  return (
    <div className={css.filters}>
      <GrFilter />
      <button
        type="button"
        className={css.filterBtn}
        name="all"
        onClick={handleFilterChange}
      >
        show all
      </button>
      <button
        type="button"
        className={css.filterBtn}
        name="follow"
        onClick={handleFilterChange}
      >
        follow
      </button>
      <button
        type="button"
        className={css.filterBtn}
        name="followings"
        onClick={handleFilterChange}
      >
        followings
      </button>
    </div>
  );
};
export default Filter;
