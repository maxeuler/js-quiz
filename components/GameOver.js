import React from 'react';
import styled from 'styled-components';
import { Card } from './QuestionCard';

const GameOver = props => (
	<Card>
		<h1>Game Over</h1>
		<p>
			{props.correct} of {props.questions} Questions
		</p>
		<button onClick={props.gameOver} className="home">
			Home
		</button>
	</Card>
);

export default GameOver;
