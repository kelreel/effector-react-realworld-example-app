import React from 'react';
import { useStore } from 'effector-react';
import * as auth from '../../../../auth';
import { APP_NAME } from '../../../../config';
import { Container } from '../../../../ui';
import * as css from './index.css';

export const Banner: React.FC = () => {
  const isAuth = useStore(auth.model.$isAuthorized);

  return isAuth ? null : (
    <Container>
      <p className={css.title}>{APP_NAME.toLowerCase()}</p>
      <p>A place to share your knowledge.</p>
    </Container>
  );
};
