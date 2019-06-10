import React, { Component } from 'react';
import QuestionCard from './QuestionCard';
import Control from './Control';

class GameView extends Component {
	render() {
		return (
			<>
				<h3>Frage 1 von 10</h3>
				<QuestionCard />
				<Control />
			</>
		);
	}
}

export default GameView;
