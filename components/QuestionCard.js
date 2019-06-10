import React, { PureComponent } from 'react';
import styled from 'styled-components';

export const Card = styled.div`
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
	h1 {
		text-align: center;
		font-weight: 300;
	}
	.answers {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;
		margin: 3rem auto;
		width: 80%;
	}
	.wrong,
	.correct {
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
		:focus,
		:active {
			&.wrong {
				border: 2px solid red;
			}
			&.correct {
				border: 2px solid #2ecc71;
			}
			outline: none;
		}
	}
	.home {
		width: 100%;
		height: 4rem;
		font-size: 2rem;
		border: none;
		background: none;
		margin: 2rem 0;
		color: ${props => props.theme.primary};
		font-weight: 500;
		cursor: pointer;
		:focus {
			outline: none;
		}
	}
`;

class QuestionCard extends PureComponent {
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
