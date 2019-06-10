import React, { Component } from 'react';
import styled from 'styled-components';
import QuestionCard from './QuestionCard';
import Control from './Control';

const Title = styled.h3`
	text-align: center;
	font-size: 3rem;
	font-weight: 300;
`;

class GameView extends Component {
	render() {
		return (
			<>
				<Title>Frage 1 von 10</Title>
				<QuestionCard />
				<Control />
			</>
		);
	}
}

export default GameView;
