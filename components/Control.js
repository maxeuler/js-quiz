import React, { Component } from 'react';
import styled from 'styled-components';

const Buttons = styled.div`
	width: 40%;
	margin: 0 auto;
	margin-bottom: 2rem;
	display: flex;
	justify-content: space-around;
	button {
		padding: 1.5rem;
		background: ${props => props.theme.primary};
		color: #fff;
		font-size: 1.5rem;
		border: none;
		border-radius: 3px;
		cursor: pointer;
		width: 100px;
		margin: 0 0.5rem;
		:hover {
			background: rgba(211, 84, 0, 0.8);
		}
		:disabled {
			background: rgba(211, 84, 0, 0.8);
		}
	}
`;

class Control extends Component {
	render() {
		return (
			<Buttons>
				<button onClick={this.props.gameOver}>Cancel</button>
				<button onClick={this.props.next}>
					{this.props.lastQuestion ? 'Review' : 'Next'}
				</button>
			</Buttons>
		);
	}
}

export default Control;
