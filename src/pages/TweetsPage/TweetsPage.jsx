import { useEffect, useRef, useState } from 'react';
import { getUsers } from 'servises/getUsers';
import { updateUser } from 'servises/updateUser';
import ReactPaginate from 'react-paginate';
import { UsersList } from 'components/UsersList/UsersList';
import css from '../TweetsPage/TweetsPage.module.css';
import { MdKeyboardBackspace } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import Filter from 'components/Filter/Filter';
import { getVisibleUsers } from 'servises/getVisibleUsers';

const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const [filterStatus, setfilterStatus] = useState('all'); //
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;

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

  useEffect(() => {
    const visibleUsers = getVisibleUsers(users, filterStatus);
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(visibleUsers.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(visibleUsers.length / itemsPerPage));
  }, [filterStatus, itemOffset, users]);

  const handlePageClick = event => {
    const newOffset =
      (event.selected * itemsPerPage) %
      getVisibleUsers(users, filterStatus).length;
    setItemOffset(newOffset);
  };

  const handleFilterChange = e => {
    const filter = e.target.name;
    setfilterStatus(filter);
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
      </div>
      <Filter
        handleFilterChange={handleFilterChange}
        filterStatus={filterStatus}
      />
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
