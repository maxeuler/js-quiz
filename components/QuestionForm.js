import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
	padding: 2rem;
	margin: 2rem 0;
	fieldset {
		display: flex;
		flex-direction: column;
		padding: 4rem;
		border: 1px solid ${props => props.theme.primary};
		border-radius: 4px;
		label {
			margin-bottom: 2rem;
			font-size: 1.6rem;
			input,
			textarea {
				display: block;
				width: 100%;
				line-height: 1.5;
				font-size: 1.6rem;
				padding: 0.5rem;
				margin-top: 1rem;
				border: 1px solid ${props => props.theme.border};
			}
		}
		button {
			padding: 1rem 2rem;
			font-size: 1.5rem;
			border: none;
			border-radius: 3px;
			background: ${props => props.theme.primary};
			color: #fff;
			margin: 0 auto;
			cursor: pointer;
		}
	}
`;

class QuestionForm extends Component {
	state = {
		question: '',
		correct: '',
		wrong1: '',
		wrong2: '',
		wrong3: '',
		explanation: ''
	};

	handleChange = e => {
		const { value, name } = e.target;
		this.setState({
			[name]: value
		});
	};

	submit = e => {
		e.preventDefault();
		this.props.addQuestion({ ...this.state });
		this.setState({
			question: '',
			correct: '',
			wrong1: '',
			wrong2: '',
			wrong3: '',
			explanation: ''
		});
	};

	render() {
		return (
			<Form method="POST" onSubmit={this.submit}>
				<fieldset>
					<label htmlFor="">
						Question
						<input
							type="text"
							name="question"
							onChange={this.handleChange}
							value={this.state.question}
						/>
					</label>
					<label htmlFor="correct">
						Correct Answer
						<input
							type="text"
							name="correct"
							onChange={this.handleChange}
							value={this.state.correct}
						/>
					</label>
					<label htmlFor="wrong1">
						Wrong Answer
						<input
							type="text"
							name="wrong1"
							onChange={this.handleChange}
							value={this.state.wrong1}
						/>
					</label>
					<label htmlFor="wrong2">
						Wrong Answer
						<input
							type="text"
							name="wrong2"
							onChange={this.handleChange}
							value={this.state.wrong2}
						/>
					</label>
					<label htmlFor="wrong3">
						Wrong Answer
						<input
							type="text"
							name="wrong3"
							onChange={this.handleChange}
							value={this.state.wrong3}
						/>
					</label>
					<label htmlFor="explanation">
						Explanation
						<textarea
							type="text"
							name="explanation"
							rows="5"
							onChange={this.handleChange}
							value={this.state.explanation}
						/>
					</label>
					<button>Submit</button>
				</fieldset>
			</Form>
		);
	}
}

export default QuestionForm;
