import React from 'react'
import PropTypes from 'prop-types'
import LoginFormView from '../components/LoginFormView';

function LoginForm(props) {
    const { login, checkId, socialLogin } = props;

    return (
        <div>
        <LoginFormView
          onLogin={login}
          onSocialLogin={socialLogin}
          onCheckId={checkId}
        />
      </div>
    )
}

LoginForm.propTypes = {

}

export default LoginForm

