import { toReadableDate } from "../utils.js";

export default class {
    data() {
        return {
            layout: "page.11ty.js",
        }
    }

    render(data) {
        return /*html*/`
        <time datetime="${data.date.toISOString()}">${toReadableDate(data.date)}</time>
        ${data.content}
        `;
    }
}