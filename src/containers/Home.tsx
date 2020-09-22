import React from 'react';

import Element from '@components/elements/Element';
import Paper from '@components/modules/Paper';
import Anchor from '@components/elements/Anchor';

const menu = ['Dashboard', 'Search Talent', 'Candidates'];

const Home = () => {
	return (
		<Element>
			<Element
				position="fixed"
				top={0}
				left={0}
				bottom={0}
				width={260}
				borderRight="1px solid"
				borderColor="border"
			>
				<Element my={34}>
					{menu.map(item => (
						<Element key={item} p="0 24px">
							<Anchor to="/sad">{item}</Anchor>
						</Element>
					))}
				</Element>
			</Element>
			<Element ml={260} p={24}>
				<Paper>Main</Paper>
				<Paper>Main</Paper>
				<Paper>Main</Paper>
				<Paper>Main</Paper>
				<Paper>Main</Paper>
				<Paper>Main</Paper>
				<Paper>Main</Paper>
				<Paper>Main</Paper>
				<Paper>Main</Paper>
				<Paper>Main</Paper>
				<Paper>Main</Paper>
				<Paper>Main</Paper>
				<Paper>Main</Paper>
				<Paper>Main</Paper>
				<Paper>Main</Paper>
			</Element>
		</Element>
	);
};

export default Home;
