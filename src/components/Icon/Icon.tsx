import React from 'react';
import Loadable from 'react-loadable';

import Spinner from '@components/Icon/Spinner';

const Icon = ({ name, ...rest }: any) => {
	const LoadableIcon = Loadable({
		loader: () => import(/* webpackChunkName: 'Icon' */ `./${name}`),
		loading: Spinner as any
	});

	return <LoadableIcon {...rest} />;
};

Icon.defaultProps = {
	size: 18,
	viewBox: '0 0 24 24'
};

export default Icon;
