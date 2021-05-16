import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';
import s from '../scss/LoginPage.module.scss';
import LoginForm from '../containers/LoginForm';

function LoginPage(props) {
    return (
        <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Login, CGV</title>
        </Helmet>
        <div className={s.loginWrapper}>
          <LoginForm />
        </div>
      </Layout>
    )
}

LoginPage.propTypes = {

}

export default LoginPage

