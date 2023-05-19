import { useState } from 'react';
import { GrFilter } from 'react-icons/gr';
import { AiOutlineArrowDown } from 'react-icons/ai';
import css from '../Filter/Filter.module.css';

const Filter = ({ handleFilterChange, filterStatus }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFilter = () => {
    setIsOpen(prev => !prev);
  };

  const handleClick = e => {
    handleFilterChange(e);
    toggleFilter();
  };

  return (
    <div className={css.filters}>
      {/* <GrFilter /> */}
      {/* <div className={css.filterWrap}> */}
        <p>Filter</p>
        <button
          type="button"
          className={`${css.filterBtn} ${css.activeFilter}`}
          onClick={toggleFilter}
        >
          {filterStatus}
          <AiOutlineArrowDown />
        </button>

        {isOpen && (
          <>
            <button
              type="button"
              className={
                filterStatus === 'all'
                  ? `${css.filterBtn} ${css.activeFilter}`
                  : `${css.filterBtn}`
              }
              name="all"
              onClick={handleClick}
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
              onClick={handleClick}
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
              onClick={handleClick}
            >
              followings
            </button>
          </>
        )}
      {/* </div> */}
    </div>
  );
};
export default Filter;
