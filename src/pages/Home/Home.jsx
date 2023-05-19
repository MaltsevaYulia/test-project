// import { useEffect, useState } from 'react';
// import { getUsers } from 'servises/getUsers';
// import { updateUser } from 'servises/updateUser';
// import ReactPaginate from 'react-paginate';
// import { UsersList } from 'components/UsersList/UsersList';
import css from '../Home/Home.module.css';

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <h1 className={css.title}>welcome to Tweets</h1>
      <Link className={css.btn} to="/tweets">
        Tweets
      </Link>
    </div>
  );
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   getUsers()
  //     .then(res => {
  //       setUsers(res);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);

  // useEffect(() => {
    
  
    
  // }, [])
  

  // const handleFollow = user => {
  //   setUsers(prevState =>
  //     prevState.map(el => {
  //       if (el.id === user.id) {
  //         updateUser(user.id, {
  //           ...el,
  //           followers: !el.isFollow ? el.followers + 1 : el.followers - 1,
  //           isFollow: !el.isFollow,
  //         });
  //         return {
  //           ...el,
  //           followers: !el.isFollow ? el.followers + 1 : el.followers - 1,
  //           isFollow: !el.isFollow,
  //         };
  //       } else return el;
  //     })
  //   );
    
  // };

  // //pagination
  // const [currentItems, setCurrentItems] = useState([]);
  // const [pageCount, setPageCount] = useState(0);
  // const [itemOffset, setItemOffset] = useState(0);
  // const itemsPerPage = 3;

  // useEffect(() => {
  //   const endOffset = itemOffset + itemsPerPage;
  //   setCurrentItems(users.slice(itemOffset, endOffset));
  //   setPageCount(Math.ceil(users.length / itemsPerPage));
  // }, [itemOffset, users]);
  // const handlePageClick = event => {
  //   const newOffset = (event.selected * itemsPerPage) % users.length;
  //   setItemOffset(newOffset);
  // };

  //return (
    // <div className="container">
    //   <UsersList users={currentItems} handleFollow={handleFollow} />
    //   <ReactPaginate
    //     breakLabel="..."
    //     nextLabel=" >"
    //     onPageChange={handlePageClick}
    //     pageRangeDisplayed={5}
    //     pageCount={pageCount}
    //     previousLabel="< "
    //     renderOnZeroPageCount={null}
    //     className={css.pagination}
    //     pageLinkClassName={css.page}
    //     previousLinkClassName={css.page}
    //     nextLinkClassName={css.page}
    //     activeLinkClassName={css.active}
    //   />
    // </div>
  //);
};

export default Home;
