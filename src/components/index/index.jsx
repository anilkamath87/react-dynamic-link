import React from 'react';
import PropTypes from 'prop-types';
import style from './home.css';
import DynamicHrefLink from '../dynamicLink';

const Home = ({ title }) => (
  <div className={style.demo}>
    {title}
    <DynamicHrefLink />
  </div>
);

Home.propTypes = {
  title: PropTypes.string,
};

export default Home;
