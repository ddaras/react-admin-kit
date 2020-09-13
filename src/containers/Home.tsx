import React from 'react';

import Element from '@components/Element';
import Segment from '@components/Segment';
import Anchor from '@components/Anchor';

const menu = ['Dashboard', 'Search Talent', 'Candidates'];

const Home = () => {
	return (
		<Element minH="100vh" d="flex">
			<Element pos="fixed" top={0} left={0} w={260} h="100vh" kind="ghost">
				<Element m="34px 0">
					{menu.map(item => (
						<Element key={item} p="0 24px">
							<Anchor to="/sad">{item}</Anchor>
						</Element>
					))}
				</Element>
			</Element>
			<Element
				m="0 0 0 260px"
				p="24px"
				kind="default"
				d="flex"
				direction="column"
				flex="1"
				align="flex-start"
			>
				<Segment w="100%">Main</Segment>
				<Segment w="100%">Main</Segment>
				<Segment w="100%">Main</Segment>
				<Segment w="100%">Main</Segment>
				<Segment w="100%">Main</Segment>
				<Segment w="100%">Main</Segment>
				<Segment w="100%">Main</Segment>
				<Segment w="100%">Main</Segment>
				<Segment w="100%">Main</Segment>
				<Segment w="100%">Main</Segment>
				<Segment w="100%">Main</Segment>
				<Segment w="100%">Main</Segment>
				<Segment w="100%">Main</Segment>
				<Segment w="100%">Main</Segment>
				<Segment w="100%">Main</Segment>
			</Element>
		</Element>
	);
};

export default Home;
