import React from 'react';

import Text from '@components/Text';
import Divider from '@components/Divider';
import Input from '@components/Input';
import Button from '@components/Button';
import Paper from '@modules/Paper';
import Container from '@components/Container';
import Row from '@modules/Grid/Row';
import Col from '@modules/Grid/Col';
import UploadPhoto from '@modules/UploadPhoto';

import useAuth from '@/hooks/useAuth';
import useUpload from '@/hooks/useUpload';
import useForm from '@/hooks/useForm';
import useModal from '@/hooks/useModal';
import useToasts from '@/hooks/useToasts';

import UPDATE_USER from '@graphql/mutation/updateUser';
import UPLOAD_FILE from '@graphql/mutation/uploadFile';

import EditShopModal from './EditShopModal';
import ShopForm from './ShopForm';

const Account = () => {
	const { me, logout, refetch: refetchMe } = useAuth();

	const { addToast } = useToasts();

	const {
		isOpen: editShopVisible,
		showModal: showEditForm,
		hideModal: hideEditForm
	} = useModal();

	const {
		values,
		setValue,
		change: changeValue,
		submit: submitForm,
		submitting
	} = useForm(UPDATE_USER, {
		initialState: {
			id: me.id,
			picture: me.picture,
			shopName: me.shopName,
			shopDescription: me.shopDescription
		},
		hasInput: true,
		onSuccess: () => {
			refetchMe();
			hideEditForm();
			addToast('Updated', {
				kind: 'success'
			});
		}
	});

	const { upload, uploading } = useUpload(UPLOAD_FILE, {
		onSuccess: file => {
			submitForm({
				picture: file.path
			});
		}
	});

	return (
		<Container>
			<Text as="h2">Account</Text>

			<Divider size="lg" isHidden />

			<Paper>
				<Text as="h3">Your Shop</Text>
				<Divider size="sm" isHidden />
				<Row>
					<Col width={{ md: 6 / 12 }}>
						<UploadPhoto
							files={values.picture ? [{ id: 1, src: values.picture }] : null}
							onInputChange={upload}
							uploading={uploading}
							onRemove={() => setValue('picture', '')}
							rounded
						/>
						<Divider size="xs" isHidden />

						<Row>
							<Col width={{ md: 12 / 12 }}>
								<Text as="label">Shop Name</Text>
								<Text>{me.shopName}</Text>
								<Divider size="xs" isHidden />

								<Text as="label">Shop Description</Text>
								<Text>{me.shopDescription}</Text>
								<Divider size="xs" isHidden />

								<Text as="label">Shop Email</Text>
								<Text>{me.email}</Text>
								<Divider size="xs" isHidden />
							</Col>
						</Row>

						<Divider />

						<div style={{ display: 'flex' }}>
							<Button onClick={showEditForm}>Edit Shop</Button>
							<Button ml={2} kind="ghost" onClick={logout}>
								Logout
							</Button>
						</div>
					</Col>
				</Row>
			</Paper>

			<Divider size="lg" />

			<Paper>
				<Text as="h3">API Keys</Text>
				<Divider size="sm" isHidden />
				<Row>
					<Col width={{ md: 6 / 12 }}>
						<Text as="label">API Access Token</Text>
						<Input name="accessToken" value={me.accessToken} readOnly />
						<Divider size="xs" isHidden />
					</Col>
					<Col width={{ md: 6 / 12 }} justifyContent="flex-start"></Col>
				</Row>
			</Paper>

			<EditShopModal
				title="Edit Shop"
				renderForm={() => (
					<ShopForm values={values} onInputChange={changeValue} />
				)}
				isOpen={editShopVisible}
				onClose={hideEditForm}
				onSubmit={() => submitForm()}
				submitting={submitting}
			/>
		</Container>
	);
};

export default Account;
