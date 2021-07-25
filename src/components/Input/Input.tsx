import React from 'react';

import Element from '@components/Element/Element';
import { IProps } from '@components/Element/styled';

interface IInput extends IProps {
	onChange?: any;
}

const Input = ({ ...rest }: IInput) => {
	return <Element {...rest} />;
};

Input.defaultProps = {
	as: 'input',
	width: '100%',
	size: 'md',
	sizes: {
		md: {
			py: 2,
			px: 3,
			borderRadius: 'md',
			width: '100%'
		}
	},
	kind: 'primary',
	kinds: {
		primary: {
			bg: 'white',
			border: '1px solid',
			borderColor: 'grey3',
			'&:focus': {
				borderColor: 'grey4'
			}
		}
	}
};

export default Input;
