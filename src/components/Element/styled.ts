import styled from 'styled-components';

import { IProps } from './Element';

import { palette } from '@/utilities/palette';
import { spacing } from '@/utilities/spacing';
import { shaping } from '@/utilities/shaping';
import { sizing } from '@/utilities/sizing';
import { flexbox } from '@/utilities/flexbox';
import { positioning } from '@/utilities/positioning';
import {
	elevation,
	hoverElevation,
	activeElevation,
	focusElevation
} from '@/utilities/elevation';
import { typography } from '@/utilities/typography';
import { transition } from '@/utilities/transition';

const StyledElement = styled.div<IProps>`
	${palette}
	${spacing}
	${shaping}
	${elevation}
	${sizing}
	${flexbox}
	${positioning}
	${typography}
	${transition}

	&:hover {
		${hoverElevation}
	}

	&:active {
		${activeElevation}
	}

	&:focus {
		${focusElevation}
	}
`;

export { StyledElement };
