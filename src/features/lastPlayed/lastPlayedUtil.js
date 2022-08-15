export function getTodayDate() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today;
}

export function areDatesEqual(date1, date2) {
    const result = date1.getTime() === date2.getTime();
    return result;
}