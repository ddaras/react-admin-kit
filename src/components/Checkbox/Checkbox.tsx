import React from 'react';

import Element from '@components/Element';
import { IProps } from '@components/Element/styled';
import Icon from '@components/Icon';

interface ICheckbox extends IProps {
	isChecked?: boolean;
	onChange?: () => void;
}

const Checkbox = ({ isChecked, onChange, ...rest }: ICheckbox) => {
	return (
		<Element {...rest} onClick={onChange}>
			<Icon
				name={isChecked ? 'CBChecked' : 'CBUnchecked'}
				color={isChecked ? 'indigo8' : 'grey5'}
			/>
		</Element>
	);
};

Checkbox.defaultProps = {
	checked: false,
	cursor: 'pointer',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
};

export default Checkbox;
