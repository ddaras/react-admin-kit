import React from 'react';

import Loader from '@modules/Loader';

const LoaderCentered = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh'
			}}
		>
			<Loader />
		</div>
	);
};

LoaderCentered.defaultProps = {};

export default LoaderCentered;
