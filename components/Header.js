import React from 'react';
import Link from 'next/link';
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
	a {
		text-decoration: none;
		color: #000;
		margin: 0 1rem;
		cursor: pointer;
	}
	nav {
	}
`;

const Header = props => (
	<StyledHeader>
		<h3>JS-Quiz</h3>
		<nav>
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/add">
				<a>Add Question</a>
			</Link>
		</nav>
	</StyledHeader>
);

export default Header;
