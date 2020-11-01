import styled from 'styled-components';
import {
	color,
	ColorProps,
	space,
	SpaceProps,
	typography,
	TypographyProps,
	layout,
	LayoutProps,
	border,
	BorderProps,
	flexbox,
	FlexboxProps,
	grid,
	GridProps,
	position,
	PositionProps,
	shadow,
	ShadowProps,
	variant,
	system
} from 'styled-system';

export type IProps = ColorProps &
	SpaceProps &
	TypographyProps &
	LayoutProps &
	BorderProps &
	FlexboxProps &
	GridProps &
	PositionProps &
	ShadowProps & {
		as?: any;
		ref?: any;
		children?: React.ReactNode;
		onClick?: () => void;
		src?: string;
		to?: string;
		color?: any;
		size?: string;
		sizes?: object;
		kind?: string;
		kinds?: object;
		placeholder?: string;
		type?: string;
		name?: string;
		cursor?: string;
		disabled?: boolean;
		transition?: string;
		value?: any;
		fill?: string;
		stroke?: string;
		strokeWidth?: number | string;
		strokeLinecap?: string;
		strokeLinejoin?: string;
		viewBox?: string;
		visibility?: string;
		transform?: string;
		transformOrigin?: string;
	};

const StyledElement = styled.div<IProps>`
	${props =>
		variant({
			prop: 'kind',
			variants: props.kinds
		})}
	${props =>
		variant({
			prop: 'size',
			variants: props.sizes
		})}
	${color}
	${space}
	${typography}
	${layout}
	${border}
	${flexbox}
	${grid}
	${position}
	${shadow}
	${system(
		{
			cursor: true
		}
	)}
	${system({
		transition: true
	})}
	${system({
		transform: true
	})}
	${system({
		transformOrigin: true
	})}
	${system({
		whiteSpace: true
	})}
	${system({
		textOverflow: true
	})}
	${system({
		visibility: true
	})}
`;

export { StyledElement };
