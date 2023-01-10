import React, { FC } from 'react';
import styles from './LoginComponent.module.css';

interface LoginComponentProps {}

const LoginComponent: FC<LoginComponentProps> = () => (
  <div className={styles.LoginComponent}>
    LoginComponent Component
  </div>
);

export default LoginComponent;
