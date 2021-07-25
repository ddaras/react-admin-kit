import React from 'react';

import Element from '@components/Element';
import { IProps } from '@components/Element/styled';

interface IDivider extends IProps {
	isHidden?: boolean;
}

const Divider = ({ isHidden, ...rest }: IDivider) => {
	const borderProps = {
		borderBottom: '1px solid',
		borderColor: isHidden ? 'transparent' : 'grey1'
	};

	return <Element {...rest} {...borderProps} />;
};

Divider.defaultProps = {
	isHidden: false,
	size: 'md',
	sizes: {
		xs: {
			my: 1
		},
		sm: {
			my: 2
		},
		md: {
			my: 3
		},
		lg: {
			my: 4
		},
		xl: {
			my: 5
		}
	},
	kind: 'default',
	kinds: {
		default: {}
	}
};

export default Divider;
