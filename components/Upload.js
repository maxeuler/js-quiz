import React, { Component } from 'react';
import styled from 'styled-components';
import QuestionForm from './QuestionForm';

const Title = styled.h3`
	font-size: 5rem;
	font-weight: 300;
	text-align: center;
	margin: 3rem;
`;

const Desc = styled.div`
	width: 90%;
	text-align: center;
	margin: 0 auto;
	font-size: 2rem;
	font-weight: 300;
`;

class Upload extends Component {
	state = {
		question: {}
	};
	addQuestion = question => {
		this.setState({ question: { ...question } });
	};

	render() {
		return (
			<>
				<Title>Expand the Game</Title>
				<Desc>
					PS: There is no backend, no validation and so on. This is just an
					frontend demo. Please submit only valid questions 🤞🏼
				</Desc>
				<br />
				<Desc>
					{Object.keys(this.state.question).length > 0 && (
						<div>
							Shooooot! I said there is no backend, so I can't save it 🤷🏼‍
							<p>{this.state.question.question}</p>
							<p>Correct: {this.state.question.correct}</p>
							<p>
								Wrong: {this.state.question.wrong1} &{' '}
								{this.state.question.wrong2} & {this.state.question.wrong3}
							</p>
							<p>{this.state.question.explanation}</p>
						</div>
					)}
				</Desc>
				<QuestionForm addQuestion={this.addQuestion} />
			</>
		);
	}
}

export default Upload;
