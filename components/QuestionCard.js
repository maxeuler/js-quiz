import React, { Component } from 'react';
import styled from 'styled-components';

const Card = styled.div`
	width: 40%;
	border: 2px solid ${props => props.theme.primary};
	border-radius: 10px;
	box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.05);
	margin: 4rem auto;
	p {
		text-align: center;
		font-size: 1.4rem;
		margin: 2rem;
	}
	.answers {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;
		margin: 3rem auto;
		width: 80%;
	}
	button {
		height: 8rem;
		width: 16rem;
		margin: 0 auto;
		border: 1px solid ${props => props.theme.primary};
		border-radius: 5px;
		font-size: 1.4rem;
		cursor: pointer;
		:hover {
			background: rgba(0, 0, 0, 0.05);
		}
		:focus {
			&.wrong {
				border: 2px solid red;
			}
			&.correct {
				border: 2px solid #2ecc71;
			}
			outline: none;
		}
	}
`;

class QuestionCard extends Component {
	render() {
		const { question } = this.props;
		const answers = [
			<button
				className="correct"
				key={Math.random()}
				onClick={this.props.answerSelected}
			>
				{question.correct}
			</button>,
			<button
				className="wrong"
				key={Math.random()}
				onClick={this.props.answerSelected}
			>
				{question.wrong1}
			</button>,
			<button
				className="wrong"
				key={Math.random()}
				onClick={this.props.answerSelected}
			>
				{question.wrong2}
			</button>,
			<button
				className="wrong"
				key={Math.random()}
				onClick={this.props.answerSelected}
			>
				{question.wrong3}
			</button>
		];
		return (
			<Card>
				<p>{question.question}</p>
				<div className="answers">{answers.sort(() => Math.random() - 0.5)}</div>
			</Card>
		);
	}
}

export default QuestionCard;
