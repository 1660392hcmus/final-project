import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';
import menu from '../scss/menu.png';
import close from '../scss/btn_close.png';
import s from '../scss/Header.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

function Header(props) {
    const { isLogin, logout, history, firstName, lastName } = props;
    const currentLocation = '/';
    // const currentLocation = props.location.pathname;
    const [active, setActive] = useState(false);

    return (
        <div className={classNames(s.menuBar, { [s.active]: active })}>
        <Link to="/" className={s.logo}>
          Home
        </Link>
        <div className={classNames(s.menu)}>
          {lastName !== '' && firstName !== '' && (
            <Link to="/myCGV/info" className={s.username}>
              {lastName}
              {firstName}My Account
            </Link>
          )}
          <img
            src={close}
            alt="모바일메뉴 닫힘 버튼"
            className={s.menuClose}
            onClick={() => this.handleMenuActive()}
          />
          <Link
            to="/movies"
            className={classNames([s.link], {
              [s.HeaderFocus]:
                currentLocation === '/movies' || currentLocation === '/movies/',
            })}
          >
            Movie
          </Link>
          <Link
            to="/reservation"
            className={classNames([s.link], {
              [s.HeaderFocus]: currentLocation === '/reservation',
            })}
          >
            Reservation
          </Link>
          {isLogin ? (
            <>
              <button
                onClick={() => {
                  logout();
                  history.push('/');
                }}
                className={s.link}
              >
                Logout
              </button>
              <Link
                to="/myCGV"
                className={classNames([s.link], {
                  [s.HeaderFocus]: currentLocation === '/myCGV',
                })}
              >
                myCGV
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className={classNames([s.link], {
                  [s.HeaderFocus]: currentLocation === '/login',
                })}
              >
                Login
              </Link>

              <Link
                to="/register"
                className={classNames([s.link], {
                  [s.HeaderFocus]: currentLocation === '/register',
                })}
              >
                Join
              </Link>
            </>
          )}
          <Link
            to="/about"
            className={classNames([s.link], {
              [s.HeaderFocus]: currentLocation === '/about',
            })}
          >
            About
          </Link>
        </div>
      </div>
    )
}

Header.propTypes = {

}

export default Header

