import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CountryInput = styled.input`
	width: 100%;
	border: none;
	outline: none;
	border-radius: 5px 0 0 5px;
	background-color: #fff;
	padding: 5px 5px 0;
	margin: 0 10px;
	margin-left: 1rem;
	font-size: 1.1em;
	border-bottom: 1px solid #d1d1d1;
	border-radius: 0;
	height: 64px;
`;

export const Label = styled.span`
	position: ${({ absolute }) => (absolute ? 'absolute' : 'static')};
	font-size: ${({ fontSize }) => (fontSize ? fontSize : '0.8em')};
	font-weight: ${({ bold }) => (bold ? '600' : '400')};
	color: #919191;
	margin: 7px;
`;

export const CurrencyDropdown = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 72px;
	background-color: #00155c96;
	border: none;
	border-radius: 0 5px 5px 0;
	padding: 15px;

	&:hover {
		background-color: #374881f0;
		border: 1px solid #c2c2c2;
	}

	> span {
		margin-right: 0.8em;
		font-size: 1.1em;
		color: #dfdfdf;
	}

	> img {
		margin-right: 4px;
	}
`;

export const List = styled(motion.ul)`
	width: 450px;
	max-height: 590px;
	border-radius: 5px;
	padding: 0 10px 10px;
	z-index: 1000;
	right: 0;
	top: 0;
	background-color: #fdfdfd;
	overflow: auto;
	position: absolute;
	color: black;
	list-style-type: none;

	@media screen and (max-width: 960px) {
		right: 0;
		bottom: 0;
		top: auto;
		width: 100vw;
		max-height: 50vh;
		height: 50vh;
		border-radius: 0;
		padding: 0 40px;
		margin-bottom: 0;
	}
`;

export const ListItem = styled.li`
	display: flex;
	align-items: center;
	padding: ${({ padding }) => (padding ? padding : '6px')};
	border-radius: 4px;
	cursor: ${({ noPointer }) => (noPointer ? 'auto' : 'pointer')};

	> span {
		margin: 5px;
	}

	&:hover {
		background-color: ${({ noHover }) => (noHover ? 'none' : '#d4d4d4')};
	}
`;
