import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (type,message ) => {
    toast.configure()
    switch (type) {
        case 'success':
            toast.success(message);
            break;
        case 'error':
            toast.error(message);
            break;
        case 'warning':
            toast.warn(message);
            break;
        case 'info':
            toast.info(message);
            break;
        default:
            toast.info(message);
    }
}