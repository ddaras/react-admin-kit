import { useState } from 'react';
import { useMutation } from '@apollo/client';

const useForm = (mutation: any, initialState: Object = {}) => {
	const [mutateLogin, { loading }] = useMutation(mutation);
	const [values, setValues] = useState<Object>(initialState);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValues({
			...values,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (
		onSuccess: any = () => {},
		onError: any = (): any => {}
	) => async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const res = await mutateLogin({
				variables: values
			});
			onSuccess(res);
		} catch (error) {
			onError(error);
		}
	};

	return { values, handleInputChange, handleSubmit, loading };
};

export default useForm;
