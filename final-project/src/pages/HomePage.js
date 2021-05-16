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
          <section className={s.movie}>
            <div className={s.movieNav}>
              <button
                onClick={() => this.handleMovie('movies')}
                className={classNames({ [s.active]: movie === 'movies' })}
              >
                현재 상영작
              </button>
              <button
                onClick={() => this.handleMovie('movies/pre')}
                className={classNames({ [s.active]: movie === 'movies/pre' })}
              >
                개봉 예정작
              </button>
            </div>
            {movie === 'movies' ? (
              <Link to="/movies" className={s.more}>
                + MORE
              </Link>
            ) : (
              <Link to="/movies/?movie=pre" className={s.more}>
                + MORE
              </Link>
            )}
            <MovieList page="home" movie={movie} key={movie} />
          </section>
          <section className={s.trailer}>
            <span className={s.subTitle}>예고편</span>
            <div className={s.trailerVideo}>
              <VideoView trailer="XTZko22Ze3o" />
            </div>
          </section>
          <section className={s.event}>
            <span className={s.subTitle}>이벤트</span>
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

