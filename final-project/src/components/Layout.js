import React from 'react'
import PropTypes from 'prop-types'
import Header from '../containers/Header';
import s from '../scss/Layout.module.scss';

function Layout(props) {
    return (
        <div className={s.layoutWrapper}>
        <header className={s.header}>
          <Header />
        </header>
        <div className={s.children}>{props.children}</div>
        <footer className={s.footer}>
          <div className={s.footerImg} />
          <div className={s.footerInfo}>
            React | SPA | Context API | RESTful API | SCSS | CSS module | Git &
            Github | Zenhub | Adobe photoshop CC | Adobe illustrator CC
            <span className={s.team}>
              <a
                href="https://github.com/U-Know-Yunho/Frontend"
                target="_blank"
                rel="noopener noreferrer"
              >
                Team Uknow-Yunho : CGV CLONE PROJECT
              </a>
            </span>
          </div>
        </footer>
      </div>
    )
}

Layout.propTypes = {

}

export default Layout

