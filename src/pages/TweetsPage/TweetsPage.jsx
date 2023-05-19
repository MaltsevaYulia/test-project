import { useEffect, useRef, useState } from 'react';
import { getUsers } from 'servises/getUsers';
import { updateUser } from 'servises/updateUser';
import ReactPaginate from 'react-paginate';
import { UsersList } from 'components/UsersList/UsersList';
import css from '../TweetsPage/TweetsPage.module.css';
import { MdKeyboardBackspace } from 'react-icons/md';
// import { GrFilter } from 'react-icons/gr';
import { Link, useLocation } from 'react-router-dom';
import Filter from 'components/Filter/Filter';

const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const [filterStatus, setfilterStatus] = useState('all')//
  
  const handelFilterClick = (e) => {
  console.log("🚀 ~ handelFilerClick ~ e:", e)
  }
  

  useEffect(() => {
    getUsers()
      .then(res => {
        setUsers(res);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleFollow = user => {
    setUsers(prevState =>
      prevState.map(el => {
        if (el.id === user.id) {
          updateUser(user.id, {
            ...el,
            followers: !el.isFollow ? el.followers + 1 : el.followers - 1,
            isFollow: !el.isFollow,
          });
          return {
            ...el,
            followers: !el.isFollow ? el.followers + 1 : el.followers - 1,
            isFollow: !el.isFollow,
          };
        } else return el;
      })
    );
  };

  //pagination
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(users.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(users.length / itemsPerPage));
  }, [itemOffset, users]);
  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % users.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className={css.wrapper}>
        <Link className="goBack" to={backLinkLocationRef.current}>
          <div className={css.goBack}>
            {<MdKeyboardBackspace />}
            <span>Go back</span>
          </div>
        </Link>
        <Filter handelFilterClick={handelFilterClick} />
        {/* <div className={css.filters}>
          <GrFilter/>
          <button type='button' className={css.filterBtn}>show all</button>
          <button type='button' className={css.filterBtn}>follow</button>
          <button type='button' className={css.filterBtn}>followings </button>
        </div> */}
      </div>
      <div className="container">
        <UsersList users={currentItems} handleFollow={handleFollow} />
        <ReactPaginate
          breakLabel="..."
          nextLabel=" >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< "
          renderOnZeroPageCount={null}
          className={css.pagination}
          pageLinkClassName={css.page}
          previousLinkClassName={css.page}
          nextLinkClassName={css.page}
          activeLinkClassName={css.active}
        />
      </div>
    </>
  );
};
export default TweetsPage;
