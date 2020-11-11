import React from 'react';
import { navigate } from 'hookrouter';

import s from './NotFoundPage.module.scss';
import RocketTeam from './assets/teamRocket.png';
import Button from '../../components/Button';

const NotFoundPage = () => {
  return (
    <div className={s.root}>
      <div className={s.error404}>404</div>
      <img className={s.rocketTeam} alt="ROcket Team" src={RocketTeam} />
      <div className={s.wording}>
        <div className={s.whiteText}>The rocket team</div>
        <div>Has won this time</div>
      </div>
      <Button
        onClick={() => {
          navigate('/');
        }}>
        Return
      </Button>
    </div>
  );
};

export default NotFoundPage;
