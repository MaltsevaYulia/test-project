import { useEffect, useState } from 'react';
import { getUsers } from 'servises/getUsers';
import { updateUser } from 'servises/updateUser';
import ReactPaginate from 'react-paginate';
// import { UsersList } from 'components/UsersList/UsersList';

const Home = () => {
  const [users, setUsers] = useState([]);

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
    updateUser(user.id, user);
    setUsers(prevState =>
      prevState.map(el => {
        if (el.id === user.id) {
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

  //const currentItems = users.slice(itemOffset, endOffset);
  //   
  useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(users.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(users.length / itemsPerPage))
    
  }, [itemOffset, users]);
    const handlePageClick = event => {
      const newOffset = (event.selected * itemsPerPage) % users.length;
      setItemOffset(newOffset);
    };

  return (
    <>
      <ul>
        {currentItems.length > 0 &&
          currentItems.map(
            ({ id, avatar, user, tweets, followers, isFollow }) => (
              <li key={id}>
                <h2>{user}</h2>
                <img src={avatar} alt={user} />
                <p>{tweets}</p>
                <p>{followers}</p>
                <button
                  type="button"
                  onClick={() =>
                    handleFollow({
                      id,
                      avatar,
                      user,
                      tweets,
                      followers,
                      isFollow: !isFollow,
                    })
                  }
                >
                  {isFollow ? 'Following' : 'Follow'}
                </button>
              </li>
            )
          )}
      </ul>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Home;
