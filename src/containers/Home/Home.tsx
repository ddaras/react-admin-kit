import React, { useRef, useEffect, useState } from 'react';

import { useQuery, useMutation, useSubscription } from '@apollo/client';

import Text from '@components/elements/Text';
import Divider from '@components/elements/Divider';
import Button from '@components/elements/Button';
import Container from '@components/collections/Grid/Container';
import Row from '@components/collections/Grid/Row';
import Col from '@components/collections/Grid/Col';
import Loader from '@components/modules/Loader';

import CasesList from './HomeList';

import useToasts from '@hooks/useToasts';
import useForm from '@hooks/useForm';

import CASES from '@graphql/query/cases';
import UPLOAD_FILE from '@graphql/mutation/uploadFile';
import PARSE_CSV from '@graphql/mutation/parseCsv';
import PROGRESS_SUBSCRIPTION from '@graphql/subscription/progress';
import REGISTER_CASE from '@graphql/mutation/registerCase';
import CLOSE_CASE from '@graphql/mutation/closeCase';

const Home = () => {
	const { addToast } = useToasts();
	const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
	const [selectedCases, setSelectedCases] = useState<string[]>([]);

	const { data: casesRes = { cases: [] }, loading, refetch } = useQuery(CASES, {
		fetchPolicy: 'network-only'
	});
	const [upload, { loading: uploading }] = useMutation(UPLOAD_FILE);
	const [parse, { loading: parsing }] = useMutation(PARSE_CSV);

	const [handleRegister, { loading: registering }] = useMutation(REGISTER_CASE);
	const [handleClose, { loading: closing }] = useMutation(CLOSE_CASE);

	const {
		data: progressRes = { progress: { id: 0, value: 0 } },
		error: progressError
	} = useSubscription(PROGRESS_SUBSCRIPTION);

	const handleUpload = async ({
		target: {
			files: [file]
		}
	}: any) => {
		const res: any = await upload({ variables: { file } });

		await parse({
			variables: { id: res.data.uploadFile.id }
		});

		refetch();
	};

	const handleToggle = (id: string) => {
		setSelectedCases(prevCases =>
			prevCases.find((x: any) => x === id)
				? [...prevCases.filter((x: any) => x !== id)]
				: [...prevCases, id]
		);
	};

	const handleToggleAll = () => {
		selectedCases.length !== casesRes.cases.length
			? setSelectedCases(casesRes.cases.map((x: any) => x.id))
			: setSelectedCases([]);
	};

	const handleRegisterSelected = () => {
		if (!selectedCases.length) addToast('Please, select cases');
		if (
			casesRes.cases.length ===
			casesRes.cases.filter((x: any) => x.status === 1).length
		)
			addToast('All cases are already registered');

		selectedCases.map(async item => {
			// if status === 0 then register
			if (casesRes.cases.find((x: any) => x.id === item).status === 0) {
				try {
					await handleRegister({
						variables: {
							id: item
						}
					});
				} catch (error) {
					console.log(error);
				}
			}
		});
	};

	const handleCloseSelected = () => {
		if (!selectedCases.length) addToast('Please, select cases');
		if (
			casesRes.cases.length ===
			casesRes.cases.filter((x: any) => x.status === 2).length
		)
			addToast('All cases are already closed');

		selectedCases.map(async item => {
			const currentCase = casesRes.cases.find((x: any) => x.id === item);

			// if status === 0 then register
			if (currentCase.status === 1 && currentCase.codeICD) {
				try {
					await handleClose({
						variables: {
							id: item
						}
					});
				} catch (error) {
					console.log(error);
				}
			}
		});
	};

	useEffect(() => {
		if (progressRes.progress.value === 100) refetch();
		if (progressRes.errors) console.log(progressRes.errors);
	}, [progressRes]);

	useEffect(() => {
		if (progressError) {
			addToast(progressError.message);
		}
	}, [progressError]);

	return (
		<Container>
			<Row>
				<Col width={{ md: 6 / 12 }}>
					<Text as="h2">Cases</Text>
				</Col>
				<Col width={{ md: 6 / 12 }} alignItems="flex-end">
					<Button
						kind="primary"
						isLoading={uploading || parsing}
						// onClick={() => inputRef.current.click()}
						onClick={() => inputRef.current.click()}
					>
						Import CSV
					</Button>
					<input
						ref={inputRef}
						type="file"
						required
						onChange={handleUpload}
						style={{ display: 'none' }}
					/>
				</Col>
			</Row>

			<Divider size="lg" isHidden />

			{loading ? (
				<Loader kind="inline" />
			) : (
				<CasesList
					items={casesRes.cases}
					selectedItems={selectedCases}
					progress={progressRes.progress}
					onRegister={handleRegister}
					registering={registering}
					onClose={handleClose}
					onToggle={handleToggle}
					onToggleAll={handleToggleAll}
					onRegisterSelected={handleRegisterSelected}
					onCloseSelected={handleCloseSelected}
					closing={closing}
				/>
			)}
		</Container>
	);
};

export default Home;
