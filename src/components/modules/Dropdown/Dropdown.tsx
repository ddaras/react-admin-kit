import React from 'react';

import Element from '@components/elements/Element/Element';
import { IProps } from '@components/elements/Element/styled';
import Button from '@components/elements/Button';
import Fade from '@components/modules/Fade';
import Paper from '@components/modules/Paper';
import Icon from '@components/collections/Icon';

interface IDropdwn extends IProps {
	onClick?: () => void;
	trigger: React.ReactNode;
	content: React.ReactNode;
}

const Dropdwn = ({ trigger, content, onClick, ...rest }: IDropdwn) => {
	const dropDownRef = React.useRef<HTMLDivElement>(null);
	const [showDropdown, setShowDropdown] = React.useState(false);

	const cursor = onClick ? 'pointer' : 'inherit';

	const handleHideDropdown = () => setShowDropdown(false);

	const handleOutsideClick = React.useCallback(
		e => {
			if (dropDownRef.current) {
				if (!dropDownRef.current.contains(e.target)) handleHideDropdown();
			}
		},
		[dropDownRef.current]
	);

	React.useEffect(() => {
		document.addEventListener('mousedown', handleOutsideClick);
		return () => document.removeEventListener('mousedown', handleOutsideClick);
	}, []);

	return (
		<Element
			ref={dropDownRef}
			position="relative"
			width="100%"
			{...rest}
			cursor={cursor}
			onClick={onClick}
		>
			<Button
				kind={showDropdown ? 'secondary' : 'ghost'}
				px={3}
				isFluid
				onClick={() => setShowDropdown(!showDropdown)}
			>
				{trigger}
			</Button>

			<Fade in={showDropdown} position="absolute">
				<Paper my={1} width="100%">
					{content}
				</Paper>
			</Fade>

			<Element
				position="absolute"
				right={1}
				top={1}
				transition="transform 300ms ease"
				transform={`rotate(${showDropdown ? '180deg' : '0deg'})`}
				transformOrigin="40% 40%"
			>
				<Icon name="ChevronDown" size={24} />
			</Element>
		</Element>
	);
};

Dropdwn.defaultProps = {};

export default Dropdwn;
