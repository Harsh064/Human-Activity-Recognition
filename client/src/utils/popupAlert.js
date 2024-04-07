export function popupAlert(alert, callback) {
    callback({ ...alert, visibility: true });
    setTimeout(() => callback({ visibility: false }), 2500);
}