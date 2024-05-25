import { toReadableDate } from "../utils.js";

export default function ({ alert }) {
    if (!alert) return "";

    let emoji, message;
    switch (alert.type) {
        case "electric":
            emoji = "⚡️";
            message = "There is a reported power outage";
            break;
        case "water":
            emoji = "💧";
            message = "There is a reported water outage";
            break;
    }

    return /*html*/`
        <div class="alert" role="banner" data-type="${alert.type}">
            <span aria-hidden="true">${emoji}</span>
            <time datetime="${alert.date}">${new Date(alert.date).toLocaleString()}</time>:
            ${message}
        </div>
    `;
}