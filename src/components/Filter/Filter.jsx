import { GrFilter } from 'react-icons/gr';
import css from '../Filter/Filter.module.css';

const Filter = ({ handleFilterChange, filterStatus }) => {
  return (
    <div className={css.filters}>
      <GrFilter />
      <button
        type="button"
        className={
          filterStatus === 'all'
            ? `${css.filterBtn} ${css.activeFilter}`
            : `${css.filterBtn}`
        }
        name="all"
        onClick={handleFilterChange}
      >
        show all
      </button>
      <button
        type="button"
        className={
          filterStatus === 'follow'
            ? `${css.filterBtn} ${css.activeFilter}`
            : `${css.filterBtn}`
        }
        name="follow"
        onClick={handleFilterChange}
      >
        follow
      </button>
      <button
        type="button"
        className={
          filterStatus === 'followings'
            ? `${css.filterBtn} ${css.activeFilter}`
            : `${css.filterBtn}`
        }
        name="followings"
        onClick={handleFilterChange}
      >
        followings
      </button>
    </div>
  );
};
export default Filter;
