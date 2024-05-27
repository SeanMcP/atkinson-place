export function joinMap(array, callback) {
    return array.reduce((acc, ...args) => {
        return acc + callback(...args).trim();
    }, "")
}

export function toReadableDate(dateString) {
    return new Date(dateString).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        timeZone: "America/New_York",
        year: "numeric",
    })
}