import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
 *{
   margin: 0;
   padding:0;
   box-sizing: border-box;
	 font-family: 'Roboto', sans-serif;
 }

 body {
	 background-color: #ffe357;
 }
`;

export const Container = styled.div`
	width: 100%;
	max-width: 1300px;
	margin: ${({ margin }) => (margin ? margin : '0 auto')};
	padding: ${({ padding }) => (padding ? padding : '0 15px')};
`;
export const Header = styled.h1`
	color: ${({ color }) => (color ? color : 'blue')};
	text-align: center;
	margin: 2rem;
`;

const DEFAULT_DIV = styled.div`
	padding: ${({ padding }) => (padding ? padding : '')};
	padding-bottom: ${({ pb }) => (pb ? pb : '')};
	padding-top: ${({ pt }) => (pt ? pt : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : '')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : '')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '')};
	height: ${({ height }) => (height ? height : '')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : '')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : '')};
	background-color: ${({ background }) => (background ? background : '')};
`;

export const Row = styled(DEFAULT_DIV)`
	display: flex;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
`;

export const Column = styled(DEFAULT_DIV)`
	display: flex;
	flex-flow: column;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
`;

export const Text = styled.span`
	font-size: ${({ size }) => (size ? size : '')};
	font-weight: ${({ weight }) => (weight ? weight : '')};
	letter-spacing: ${({ spacing }) => (spacing ? spacing : '')};
	text-align: ${({ align }) => (align ? align : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : '')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '')};
	height: ${({ height }) => (height ? height : '')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : '')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : '')};
	color: ${({ color }) => (color ? color : '')};
`;

export default GlobalStyle;
