export function popupAlert(status, message, callback) {
    callback({ status, message, visibility: true });
    setTimeout(() => callback({ visibility: false }), 2500);
}