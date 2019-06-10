import React, { Component } from 'react';
import styled from 'styled-components';
import QuestionCard from './QuestionCard';
import Control from './Control';
import questions from '../questions.json';

const Title = styled.h3`
	text-align: center;
	font-size: 3rem;
	font-weight: 300;
`;

class GameView extends Component {
	state = {
		questions: [],
		questionsCount: 0,
		currentQuestion: 0,
		quizIsRunning: true
	};

	componentDidMount() {
		console.log(questions);
		this.setState({ questions });
	}

	nextQuestion = () => {
		if (this.state.questions.length - 1 == this.state.currentQuestion) {
			// quiz is over
			this.setState({ quizIsRunning: false });
			return;
		}
		this.setState(prevState => ({
			currentQuestion: prevState.currentQuestion + 1
		}));
	};

	answerSelected = e => {
		console.log(e.target.className);
	};

	render() {
		return (
			<>
				<Title>Frage 1 von 10</Title>
				{this.state.quizIsRunning && (
					<QuestionCard
						question={this.state.questions[this.state.currentQuestion] || ''}
						answerSelected={this.answerSelected}
					/>
				)}
				<Control next={this.nextQuestion} />
			</>
		);
	}
}

export default GameView;
