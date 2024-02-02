import { toast } from 'react-toastify';

const useToast = () => {
  const style = {
    position: "bottom-center",
    theme: "dark",
    autoClose: 1000,
  };

  const showToast = (type, message) => {
 
    switch (type) {
      case 'success':
        toast.success(message, { ...style });
        break;
      case 'error':
        toast.error(message, { ...style });
        break;
      case 'warning':
        toast.warning(message, { ...style });
        break;
      default:
        toast.info(message, { ...style });
    }
  };

  return showToast;
};

export default useToast;
