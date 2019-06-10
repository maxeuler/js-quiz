import React, { Component } from 'react';
import styled from 'styled-components';
import QuestionCard from './QuestionCard';
import Control from './Control';
import GameOver from './GameOver';
import questions from '../questions.json';

const Title = styled.h3`
	text-align: center;
	font-size: 3rem;
	font-weight: 300;
`;

const Explanation = styled.p`
	width: 40%;
	text-align: center;
	margin: 3rem auto;
	font-size: 2em;
	font-weight: 300;
`;

class GameView extends Component {
	state = {
		questions: [],
		questionsCount: 0,
		currentQuestion: 0,
		quizIsRunning: true,
		showExplanation: false,
		correctAnswers: 0,
		questionAnswered: false
	};

	componentDidMount() {
		this.setState({ questions, questionsCount: questions.length });
	}

	nextQuestion = () => {
		if (this.state.questionsCount - 1 == this.state.currentQuestion) {
			// quiz is over
			this.setState({ quizIsRunning: false });
			return;
		}
		this.setState(prevState => ({
			currentQuestion: prevState.currentQuestion + 1,
			questionAnswered: false,
			showExplanation: false
		}));
	};

	answerSelected = e => {
		console.log(e.target.className);
		this.setState({ questionAnswered: true, showExplanation: true });
		if (e.target.className === 'correct') {
			this.setState(prevState => ({
				correctAnswers: prevState.correctAnswers + 1
			}));
		}
	};

	render() {
		const currentQuestion =
			this.state.questions[this.state.currentQuestion] || '';
		return this.state.quizIsRunning ? (
			<>
				<Title>Frage 1 von 10</Title>
				<div
					style={this.state.questionAnswered ? { pointerEvents: 'none' } : null}
				>
					<QuestionCard
						question={this.state.questions[this.state.currentQuestion] || ''}
						answerSelected={this.answerSelected}
					/>
				</div>

				{this.state.showExplanation && (
					<Explanation>{currentQuestion.explanation}</Explanation>
				)}
				<Control next={this.nextQuestion} gameOver={this.props.gameOver} />
			</>
		) : (
			<GameOver
				gameOver={this.props.gameOver}
				correct={this.state.correctAnswers}
				questions={this.state.questionsCount}
			/>
		);
	}
}

export default GameView;
