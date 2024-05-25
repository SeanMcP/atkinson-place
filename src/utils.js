export function toReadableDate(dateString) {
    return new Date(dateString).toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        timeZone: "America/New_York",
        year: "numeric",
    })
}