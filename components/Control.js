import React, { Component } from 'react';
import styled from 'styled-components';

const Buttons = styled.div`
	width: 40%;
	margin: 0 auto;
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
		:hover {
			background: rgba(211, 84, 0, 0.8);
		}
	}
`;

class Control extends Component {
	render() {
		return (
			<Buttons>
				<button>Cancel</button>
				<button>Next</button>
			</Buttons>
		);
	}
}

export default Control;
