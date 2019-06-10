import React, { Component } from 'react';
import styled from 'styled-components';
import GameView from './GameView';

const Welcome = styled.div`
	width: 40%;
	margin: 4rem auto;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding: 2rem;
	height: 300px;
	border: 2px solid ${props => props.theme.primary};
	border-radius: 5px;
	h3 {
		text-align: center;
		font-weight: 300;
		font-size: 3rem;
	}
	button {
		padding: 1rem;
		margin: 0 auto;
		border: 1px solid ${props => props.theme.primary};
		border-radius: 3px;
		font-size: 1.4rem;
		cursor: pointer;
		:hover {
			background: rgba(0, 0, 0, 0.05);
		}
	}
`;

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
			<Welcome>
				<h3>Welcome!</h3>
				<button onClick={this.startGame}>Start Game</button>
			</Welcome>
		);
	}
}

export default Content;
