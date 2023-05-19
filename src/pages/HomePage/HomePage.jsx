import css from '../HomePage/HomePage.module.css';

import { Link } from "react-router-dom";

const HomePage = () => {
    return (
      <div className={css.container}>
        {/* <img src={require('assets/imeges/wawe.jpg')} alt='wawe' /> */}
        <h1 className={css.title}>welcome to</h1>
        <Link className={css.btn} to="/tweets">
          Tweets
        </Link>
      </div>
    );
}
export default HomePage