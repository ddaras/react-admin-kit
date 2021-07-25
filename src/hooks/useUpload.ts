import { useState } from 'react';
import { useMutation } from '@apollo/client';

interface IOptions {
	onSuccess?: (file: { id: string; path: string }) => void;
}

const useUpload = (mutation: any, { onSuccess }: IOptions = {}) => {
	const [input, setInput] = useState({
		files: []
	});
	const [mutate, { loading, error }] = useMutation(mutation);

	const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files && e.target.files[0];

		if (file) {
			const res = await mutate({
				variables: {
					file
				}
			});

			setInput((prevValues: any) => ({
				...prevValues,
				files: [
					...prevValues.files,
					{
						id: res.data.uploadFile.id,
						src: res.data.uploadFile.path
					}
				]
			}));

			onSuccess && onSuccess(res.data.uploadFile);
		}
	};

	return {
		files: input.files,
		uploading: loading,
		error,
		upload: handleUpload
	};
};

export default useUpload;
