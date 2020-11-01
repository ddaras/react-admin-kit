import React, { useState, useCallback } from 'react';

import Toast from '@components/modules/Toast';

type ToastManager = {
	addToast: (content: string, options?: any) => void;
	removeToast: (toastId: number) => void;
};

const ToastContext = React.createContext<ToastManager>({
	addToast: () => {},
	removeToast: () => {}
});

let id = 1;

interface IToast {
	id: number;
	content: string;
	options: {
		variant?: string;
	};
}

const ToastProvider = ({ children }: any) => {
	const [toasts, setToasts] = useState<IToast[]>([]);

	const addToast = useCallback(
		(content, options) => {
			setToasts(prevToasts => [
				...prevToasts,
				{
					id: id++,
					content,
					options
				}
			]);
		},
		[setToasts]
	);

	const removeToast = useCallback(
		toastId => {
			setToasts(prevToasts => prevToasts.filter(t => t.id !== toastId));
		},
		[setToasts]
	);

	const value: any = {
		addToast,
		removeToast
	};

	return (
		<ToastContext.Provider value={value}>
			<>
				{toasts.map(item => (
					<Toast
						key={item.id}
						content={item.content}
						onClick={() => removeToast(item.id)}
					/>
				))}
			</>
			{children}
		</ToastContext.Provider>
	);
};

export { ToastProvider, ToastContext };
