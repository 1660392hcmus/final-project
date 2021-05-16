import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';
import MainCarouselView from '../components/MainCarouselView';
import s from '../scss/HomePage.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import MovieList from '../containers/MovieList';
import VideoView from '../components/VideoView';

function HomePage(props) {
    const [movie, setMovie] = useState('movies');

    return (
        <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Cinema Ticket</title>
        </Helmet>
        <main>
          <section className={s.carousel}>
            <MainCarouselView />
          </section>
          <section className={s.trailer}>
            <span className={s.subTitle}>Trailer</span>
            <div className={s.trailerVideo}>
              <VideoView trailer="EVWdzVtSh1I" />
            </div>
          </section>
          <section className={s.event}>
            <span className={s.subTitle}>Event</span>
            <div className={s.eventImages}>
              <div className={s.firstEvent} />
              <div className={s.secondEvent} />
              <div className={s.thirdEvent} />
            </div>
          </section>
        </main>
      </Layout>
    )
}

HomePage.propTypes = {

}

export default HomePage

