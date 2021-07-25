import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Transition } from 'react-transition-group';

import Element from '@components/Element/Element';
import { IProps } from '@components/Element/styled';

interface IFade extends IProps {
	in: boolean;
}

const duration = 125;

const Fade = ({ children, in: inProp, ...rest }: IFade) => {
	const innerRef = useRef<HTMLDivElement>(null);

	return (
		<Element
			transition={`all ${duration}ms`}
			transform={inProp ? 'scale(1)' : 'scale(0.9)'}
			opacity={inProp ? 1 : 0}
			visibility={inProp ? 'visible' : 'hidden'}
			{...rest}
		>
			<div ref={innerRef}>{children}</div>
		</Element>
	);
};

Fade.defaultProps = {
	in: false
};

export default Fade;
