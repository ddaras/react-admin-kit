import React from 'react';

import Element from '@components/elements/Element/Element';
import { IProps } from '@components/elements/Element/styled';
import Text from '@components/elements/Text';
import Loader from '@components/modules/Loader';

interface IButton extends IProps {
	onClick: () => void;
	isLoading: boolean;
	isDisabled: boolean;
	isFluid: boolean;
}

const Button = ({
	children,
	isLoading,
	isDisabled,
	isFluid,
	...rest
}: IButton) => {
	const width = isFluid ? '100%' : 'auto';

	return (
		<Element disabled={isDisabled} {...rest} width={width}>
			<div style={{ position: 'relative' }}>
				<Text as="span" opacity={isLoading ? 0 : 1}>
					{children}
				</Text>
				{isLoading && <Loader color="white" kind="filled" />}
			</div>
		</Element>
	);
};

Button.defaultProps = {
	as: 'button',
	onClick: null,
	isLoading: false,
	isDisabled: false,
	isFluid: false,
	size: 'md',
	transition: 'background-color 300ms',
	sizes: {
		sm: {
			px: 3,
			py: 1,
			fontSize: 'sm',
			borderRadius: 'sm'
		},
		md: {
			px: 5,
			py: 2,
			borderRadius: 'md'
		},
		lg: {
			px: 6,
			py: 3,
			borderRadius: 'lg'
		}
	},
	kind: 'secondary',
	kinds: {
		primary: {
			color: 'white',
			bg: 'indigo8'
		},
		secondary: {
			color: 'grey8',
			bg: 'grey2'
		},
		ghost: {
			bg: 'transparent',
			'&:hover': {
				bg: 'grey1'
			}
		}
	}
};

export default Button;
