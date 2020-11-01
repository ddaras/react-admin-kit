import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Transition } from 'react-transition-group';

import Element from '@components/elements/Element/Element';
import { IProps } from '@components/elements/Element/styled';

interface ICollapse extends IProps {
	in: boolean;
}

const duration = 175;

// const Collapse = ({ children, in: inProp, ...rest }: ICollapse) => {
// 	const innerRef = useRef<HTMLDivElement>(null);
// 	const [height, setHeight] = useState<number | 'auto'>('auto');

// 	const transitionStyles = {
// 		entering: {
// 			opacity: 0,
// 			transform: 'scale(0.9)'
// 		},
// 		entered: {
// 			opacity: 1,
// 			transform: 'translateX(0)',
// 			transition: 'opacity 300ms, transform 300ms'
// 		},
// 		exiting: {
// 			opacity: 1
// 		},
// 		exited: {
// 			opacity: 0,
// 			transform: 'scale(0.9)',
// 			transition: 'opacity 300ms, transform 300ms'
// 		}
// 	} as any;

// 	return (
// 		<Transition in={inProp} timeout={duration} unmountOnExit>
// 			{state => (
// 				<Element {...transitionStyles[state]} {...rest}>
// 					<div ref={innerRef}>{children}</div>
// 				</Element>
// 			)}
// 		</Transition>
// 	);
// };

const Collapse = ({ children, in: inProp, ...rest }: ICollapse) => {
	const innerRef = useRef<HTMLDivElement>(null);

	return (
		<Element
			transition="all 300ms"
			transform={inProp ? 'scale(1)' : 'scale(0.9)'}
			opacity={inProp ? 1 : 0}
			visibility={inProp ? 'visible' : 'hidden'}
			{...rest}
		>
			<div ref={innerRef}>{children}</div>
		</Element>
	);
};

Collapse.defaultProps = {
	in: false
};

export default Collapse;
