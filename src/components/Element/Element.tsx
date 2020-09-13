import React from 'react';

import { StyledElement } from './styled';

import { Kinds, Sizes } from '@utilities/typing';

export interface IProps {
	as?: React.ElementType;
	children?: React.ReactNode;
	kind?: Kinds;
	size?: Sizes;
	sizescale?: number;
	textsize?: string | number;
	textColor?: string;
	bg?: string;
	elevation?: Sizes;
	rounded?: Sizes;
	h?: string | number; // h
	minH?: string | number;
	w?: string | number; // w
	pos?: string; // position
	top?: string | number;
	right?: string | number;
	bottom?: string | number;
	left?: string | number;
	m?: string; // margin
	p?: string; // padding
	d?: string; // display
	flex?: string;
	direction?: string; // flexDirection
	justify?: string;
	align?: string;
	placeholder?: string;
	hoverElevation?: Sizes;
	activeElevation?: Sizes;
	focusElevation?: Sizes;
	type?: string;
	to?: string;
}

const Element = ({ children, ...rest }: IProps) => {
	return <StyledElement {...rest}>{children}</StyledElement>;
};

Element.defaultProps = {
	as: 'div',
	size: 'none',
	sizescale: 1,
	kind: 'ghost',
	elevation: 'none'
};

export default Element;
