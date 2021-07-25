import React from 'react';

import Element from '@components/Element/Element';
import { IProps } from '@components/Element/styled';
import Icon from '@components/Icon';

import { colors } from '@src/theme';

interface ILoader extends IProps {}

const Loader = ({ children, color, ...rest }: ILoader) => {
	return (
		<Element {...rest}>
			<Icon name="Spinner" size={24} color={color} />
		</Element>
	);
};

Loader.defaultProps = {
	color: colors.light.indigo7,
	kind: 'default',
	kinds: {
		default: {},
		filled: {
			position: 'absolute',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		},
		inline: {
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		}
	}
};

export default Loader;
