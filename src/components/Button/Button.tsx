import React from 'react';
import { Link } from 'react-router-dom';

import Element from '@components/Element';
import { IProps } from '@components/Element/styled';
import Text from '@components/Text';
import Loader from '@modules/Loader';

interface IButton extends IProps {
	to?: string;
	onClick: () => void;
	isLoading: boolean;
	isDisabled: boolean;
	isFluid: boolean;
}

const Button = ({
	to,
	as,
	children,
	isLoading,
	isDisabled,
	isFluid,
	...rest
}: IButton) => {
	const width = isFluid ? '100%' : 'auto';

	return (
		<Element
			as={to ? Link : as}
			to={to}
			disabled={isDisabled}
			{...rest}
			width={width}
		>
			<div
				style={{
					position: 'relative'
				}}
			>
				<Element opacity={isLoading ? 0 : 1}>{children}</Element>
				{isLoading && <Loader color="white" kind="filled" />}
			</div>
		</Element>
	);
};

Button.defaultProps = {
	as: 'button',
	role: 'button',
	onClick: null,
	isLoading: false,
	isDisabled: false,
	isFluid: false,
	size: 'md',
	transition: 'background-color 300ms',
	sizes: {
		xs: {
			px: 2,
			py: 1,
			fontSize: 'sm',
			borderRadius: 'sm'
		},
		sm: {
			px: 3,
			py: 1,
			fontSize: 'sm',
			borderRadius: 'sm'
		},
		md: {
			px: 4,
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
			bg: 'indigo8',
			'&:hover': {
				color: 'white'
			}
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
		},
		ghostDanger: {
			bg: 'transparent',
			color: 'danger5',
			'&:hover': {
				bg: 'grey1'
			}
		},
		danger: {
			color: 'white',
			bg: 'danger8'
		}
	}
};

export default Button;
