import { useState } from 'react';
import { useMutation } from '@apollo/client';

const useForm = (mutation: any, initialState: Object = {}) => {
	const [mutate, { loading }] = useMutation(mutation);
	const [values, setValues] = useState<Object>(initialState);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// one step nested keys
		let pair;
		const key: any = e.target.name.split('.');
		const val = e.target.value;
		if (key.length > 1) {
			pair = {
				[key[0]]: {
					[key[1]]: val
				}
			};
		} else {
			pair = {
				[key]: val
			};
		}

		setValues({
			...values,
			...pair
		});
	};

	const handleSubmit = (onSubmit: any = () => {}) => async (
		e: React.FormEvent<HTMLFormElement>
	) => {
		e.preventDefault();
		try {
			const res = await mutate({
				variables: values
			});
			onSubmit(res);
		} catch (error) {
			onSubmit(error);
		}
	};

	return { values, handleChange, handleSubmit, loading };
};

export default useForm;
