import { toast } from 'react-toastify';

const toastConfig = {
  position: 'bottom-center',
  autoClose: 2500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true
};

export function importNotification(notification) {
  toast.success(notification, toastConfig);
}
export function errorNotification(notification) {
  toast.error(notification, toastConfig);
}
export function deleteNotification(notification) {
  toast.error(notification, toastConfig);
}
export function refreshNotification(notification) {
  toast.info(notification, toastConfig);
}
