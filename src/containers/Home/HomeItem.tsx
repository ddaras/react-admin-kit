import React from 'react';
import moment from 'moment';

import Text from '@components/elements/Text';
import Button from '@components/elements/Button';
import Checkbox from '@components/elements/Checkbox';
import Tag from '@components/elements/Tag';
import Progress from '@components/modules/Progress';
import ListItem from '@components/collections/List/ListItem';
import Row from '@components/collections/Grid/Row';
import Col from '@components/collections/Grid/Col';

const CasesItem = ({
	id,
	number,
	caseId,
	avatarSrc,
	pid,
	historyNumber,
	registrationDate,
	closeDate,
	type,
	codeICD,
	codeNCSP,
	status,
	progress,
	onRegister,
	registering,
	onClose,
	closing,
	onToggle,
	hasBottomLine,
	isChecked
}: any) => {
	const [progressValue, setProgressValue] = React.useState(0);

	const renderStatus = () => {
		switch (status) {
			case 1:
				return <Tag kind="info">Registered</Tag>;
			case 2:
				return <Tag kind="success">Closed</Tag>;
			default:
				return <Tag>New</Tag>;
		}
	};

	const renderButtons = () => {
		if (status === 2) return caseId;

		if (progressValue > 0 && progressValue < 100)
			return <Progress value={progressValue} />;

		if (status === 0)
			return (
				<Button
					size="sm"
					kind="primary"
					isLoading={registering}
					onClick={() => onRegister({ variables: { id } })}
				>
					Register
				</Button>
			);

		return (
			<Button
				size="sm"
				kind="primary"
				isLoading={closing}
				onClick={() => onClose({ variables: { id } })}
			>
				Close
			</Button>
		);
	};

	React.useEffect(() => {
		if (progress.id === id) {
			setProgressValue(progress.value);
		}
	}, [progress]);

	return (
		<ListItem
			px={1}
			py={2}
			onClick={() => {}}
			borderBottom={hasBottomLine ? '1px solid' : 0}
			borderColor="grey0"
		>
			<Row>
				<Col width={{ md: 0.6 / 12 }}>
					<Checkbox isChecked={isChecked} onChange={() => onToggle(id)} />
				</Col>
				<Col width={{ md: 1 / 12 }}>{number}</Col>
				<Col width={{ md: 2 / 12 }} display="flex" flexDirection="column">
					<Text>{pid}</Text>
				</Col>
				<Col width={{ md: 2.4 / 12 }}>
					<Text>{historyNumber}</Text>
					<Text as="small" truncate>
						{codeICD} - {codeNCSP}
					</Text>
				</Col>
				<Col width={{ md: 2 / 12 }} display="flex" flexDirection="column">
					<Text>{moment(registrationDate).format('YYYY-MM-DD HH:mm')}</Text>
					<Text as="small">{moment(closeDate).format('YYYY-MM-DD HH:mm')}</Text>
				</Col>
				<Col width={{ md: 2 / 12 }}>{renderStatus()}</Col>
				<Col width={{ md: 2 / 12 }} alignItems="flex-end">
					{renderButtons()}
				</Col>
			</Row>
		</ListItem>
	);
};

export default CasesItem;
