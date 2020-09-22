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
	variant
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
		children?: React.ReactNode;
		color?: any;
		size?: string;
		kinds?: object;
		sizes?: object;
		placeholder?: string;
		type?: string;
	};

const StyledElement = styled.div<IProps>`
	${color}
	${space}
	${typography}
	${layout}
	${border}
	${flexbox}
	${grid}
	${position}
	${shadow}
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
`;

export { StyledElement };
