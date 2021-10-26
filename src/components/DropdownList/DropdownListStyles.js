import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Text } from '../../globalStyles';

export const CountryInput = styled.input`
	width: 100%;
	border: none;
	outline: none;
	border-radius: 5px;
	background: #fff;
	padding: 5px 5px 0;
	margin: 0 0.7rem;
	margin-left: 1rem;
	font-size: 1.1rem;
	border-bottom: 1px solid #d1d1d1;
	height: 64px;
`;

export const Label = styled(Text)`
	color: #919191;
	margin: 0.5rem;
`;

export const List = styled(motion.ul)`
	width: 450px;
	max-height: 590px;
	border-radius: 5px;
	padding: 0 10px 10px;
	z-index: 99;
	right: 0;
	top: 0;
	background-color: #fdfdfd;
	overflow: auto;
	position: absolute;
	color: black;
	list-style-type: none;

	@media screen and (max-width: 960px) {
		bottom: 0;
		top: auto;
		width: 100vw;
		max-height: 50vh;
		height: 50vh;
		border-radius: none;
		padding: 0 40px;
		margin-bottom: 0;
	}
`;

export const ListItem = styled.li`
	display: flex;
	align-items: center;
	padding: ${({ padding }) => (padding ? padding : '6px')};
	cursor: ${({ noPointer }) => (noPointer ? 'auto' : 'pointer')};

	> span {
		margin: 5px;
	}

	&:hover {
		background-color: ${({ noHover }) => (noHover ? 'none' : '#d4d4d4')};
	}
`;
