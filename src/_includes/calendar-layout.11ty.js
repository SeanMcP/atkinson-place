import { toReadableDate } from "../utils.js";

export default class {
    data() {
        return {
            layout: "page.11ty.js",
        }
    }

    render(data) {
        return /*html*/`
        <div>
            <time datetime="${data.date.toISOString()}">${toReadableDate(data.date)}</time>
            ${data.hours ? `<span>from ${data.hours}</span>` : ""}
        </div>
        ${data.content}
        `;
    }
}