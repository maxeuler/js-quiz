import React, { Component } from 'react';
import GameView from './GameView';

class Content extends Component {
	state = {
		gameMode: false
	};

	startGame = () => {
		this.setState({ gameMode: true });
	};

	gameOver = () => {
		this.setState({ gameMode: false });
	};

	render() {
		return this.state.gameMode ? (
			<GameView gameOver={this.gameOver} />
		) : (
			<div>
				Welcome!
				<button onClick={this.startGame}>Start Game</button>
			</div>
		);
	}
}

export default Content;
