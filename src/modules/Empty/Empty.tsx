import React from 'react';

import Text from '@components/Text';

const Empty = ({ content }: any) => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				minHeight: '200px'
			}}
		>
			<Text color="grey5">{content}</Text>
		</div>
	);
};

Empty.defaultProps = {
	content: 'Empty'
};

export default Empty;
