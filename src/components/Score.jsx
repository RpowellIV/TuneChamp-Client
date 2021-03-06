import React from 'react';
import axios from 'axios';
import { useDataLayerValue } from '../DataLayer';
import '../styles/Score.css';
import { loginUrl } from '../spotify';
import { Button } from 'react-bootstrap';

function Score() {
  // eslint-disable-next-line no-unused-vars
  const [{ user, token, score }, dispatch] = useDataLayerValue();

  const sendScore = async () => {
    // eslint-disable-next-line no-unused-vars
    const res = await axios.put('https://tunechamp-server.herokuapp.com/userScore', {
      user: user,
      totalScore: score,
    });
  };

  sendScore();

  return (
    <div className="score">
      {token ? (
        <div className="score-post">
          <h1 className="you-score">
            <h1 className="you-score">{user.id},</h1> you scored {score} points!
          </h1>{' '}
          <br />
          <p>
            Go check the leaderboard to see how you favor against everyone else.
          </p>
        </div>
      ) : (
        <div className='score'>
        <Button href={loginUrl} className='boot__button' variant="outline-info">
          LOGIN WITH SPOTIFY
        </Button>
        </div>
      )}
    </div>
  );
}

export default Score;
