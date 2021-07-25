import { useState } from 'react';
import { useMutation } from '@apollo/client';

interface IOptions {
	initialState?: object;
	hasInput?: boolean;
	onSuccess?: (res: any) => void;
}

const useForm = (
	mutation: any,
	{ initialState = {}, hasInput = false, onSuccess }: IOptions = {}
) => {
	const [mutate, { loading }] = useMutation(mutation);
	const [values, setValues] = useState<any>(initialState);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const key: any = e.target.name;
		const val = e.target.value;

		setValues({
			...values,
			[key]: val
		});
	};

	const setValue = (key: string, val: any) => {
		setValues({
			...values,
			[key]: val
		});
	};

	const handleSubmit = async (values2?: any) => {
		const newValues = { ...values, ...values2 };

		if (hasInput && newValues.id) delete newValues.id;

		const variables = hasInput
			? { id: values.id || undefined, input: newValues }
			: newValues;

		// keep deleted id
		setValues({ ...values, ...values2 });

		try {
			const res = await mutate({
				variables
			});

			onSuccess && onSuccess(res);
		} catch (error) {
			// error
		}
	};

	return {
		values,
		change: handleChange,
		setValue,
		submit: handleSubmit,
		submitting: loading
	};
};

export default useForm;
