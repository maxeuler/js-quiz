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
			outline: none;
			border: 2px solid #2ecc71;
		}
	}
`;

class QuestionCard extends Component {
	render() {
		return (
			<Card>
				<p>Frage</p>
				<div className="answers">
					<button>Answer gds svwsd vwse evwsvw</button>
					<button>Answer</button>
					<button>Answer</button>
					<button>Answer</button>
				</div>
			</Card>
		);
	}
}

export default QuestionCard;
