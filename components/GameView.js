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
		questionAnswered: false,
		showError: false,
		success: false
	};

	componentDidMount() {
		const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
		this.setState({
			questions: shuffledQuestions,
			questionsCount: questions.length
		});
	}

	nextQuestion = () => {
		if (!this.state.questionAnswered) {
			return this.setState({ showError: true });
		}
		if (this.state.questionsCount - 1 == this.state.currentQuestion) {
			// quiz is over
			this.setState({ quizIsRunning: false });
			return;
		}
		this.setState(prevState => ({
			currentQuestion: prevState.currentQuestion + 1,
			questionAnswered: false,
			showExplanation: false,
			showError: false,
			success: false
		}));
	};

	answerSelected = e => {
		this.setState({ questionAnswered: true, showExplanation: true });
		if (e.target.className === 'correct') {
			this.setState(prevState => ({
				correctAnswers: prevState.correctAnswers + 1,
				success: true
			}));
		}
	};

	render() {
		const currentQuestion =
			this.state.questions[this.state.currentQuestion] || '';
		return this.state.quizIsRunning ? (
			<>
				<Title>
					Frage {this.state.currentQuestion + 1} von {this.state.questionsCount}
				</Title>
				<div
					style={this.state.questionAnswered ? { pointerEvents: 'none' } : null}
				>
					{this.state.showError && (
						<Explanation>
							Select an answer before going to the next question!
						</Explanation>
					)}
					<QuestionCard
						question={this.state.questions[this.state.currentQuestion] || ''}
						answerSelected={this.answerSelected}
					/>
				</div>

				{this.state.showExplanation && (
					<>
						<Explanation>
							{this.state.success ? 'Correct! 💯' : 'Oooohps 😮'}
						</Explanation>
						<Explanation>{currentQuestion.explanation}</Explanation>
					</>
				)}
				<Control
					disabled={!this.state.questionAnswered}
					next={this.nextQuestion}
					gameOver={this.props.gameOver}
					lastQuestion={
						this.state.currentQuestion + 1 === this.state.questionsCount
					}
				/>
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
