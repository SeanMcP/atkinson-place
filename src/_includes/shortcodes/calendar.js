import { joinMap, toReadableDate } from "../../utils.js";

export default function (calendarCollection, length) {
    let reversed = calendarCollection.toReversed();
    let toLength = length ? reversed.slice(0, length) : reversed;
    let buildDate = new Date();

    return /*html*/`
        <ol class="calendar-sc">${joinMap(toLength, item => {
        let itemDate = new Date(item.date);
        return /*html*/`
            <li ${itemDate < buildDate ? "data-past=build" : ""}>
                <time datetime="${item.date.toISOString()}">${toReadableDate(item.date)}</time> –
                <a href="${item.url}">${item.data.title}</a>
            </li>
        `})}
        </ol>
        <script type="module" src="/js/calendar.js"></script>
    `;
}