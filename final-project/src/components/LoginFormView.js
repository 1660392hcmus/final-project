import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Redirect, Link } from 'react-router-dom';
import cx from 'classnames';
import s from '../scss/LoginForm.module.scss';

function LoginFormView(props) {
    const [success, setSuccess] = useState(false);
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleFieldChange = (e, name) => {
        setUsername(e.target.value);
    }

    const handleLoginButtonClick = async () => {
        const { onLogin, onCheckId } = props;
        const msg = await onCheckId(username);
        if (msg === '이미 존재하는 아이디입니다.') {
          try {
            await onLogin(username, password);
            // 로그인이 성공적으로 끝났을 때
            setSuccess(true);
          } catch {
            alert('비밀번호가 틀렸습니다.');
            setPassword('');
          }
        } else {
          alert('가입된 사용자가 아닙니다.');
          setUsername('');
          setPassword('');
        }
      }

    return (
        success ? () => <Redirect to="/" /> : 
        <div className={cx(s.wrapper, s.loginWrapper)}>
          <div className={s.loginBox}>
            <h1>Đăng nhập</h1>
            <input
              onChange={e => handleFieldChange(e, 'username')}
              type="text"
              value={username}
              required
            />
            <input
              onChange={e => handleFieldChange(e, 'password')}
              type="password"
              value={password}
              required
            />
            <button
              onClick={() => handleLoginButtonClick()}
              className={s.loginBtn}
            >
              Đăng nhập
            </button>
            <Link to="/register">
              <div className={s.registerWrapper}>
                <span>Đăng ký</span>
              </div>
            </Link>
            <button className={s.facebook}>Đăng nhập bằng Facebook</button>
          </div>
        </div>
    )
}

LoginFormView.propTypes = {

}

export default LoginFormView

