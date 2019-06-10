import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	border-bottom: 1px solid ${props => props.theme.primary};
	font-size: 2rem;
	padding: 0 2rem;
	h3 {
		color: ${props => props.theme.primary};
		font-size: 3rem;
		font-weight: 300;
	}
`;

const Header = props => (
	<StyledHeader>
		<h3>JS-Quiz</h3>
		<p>Add Question</p>
	</StyledHeader>
);

export default Header;
