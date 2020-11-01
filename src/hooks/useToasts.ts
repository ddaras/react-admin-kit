import { useContext } from 'react';

import { ToastContext } from '@contexts/ToastContext';

const useToasts = () => useContext(ToastContext);

export default useToasts;
