import { toReadableDate } from "../utils.js";

export default function (data) {
    const { news = [] } = data.collections;
    const reversed = news.toReversed();
    return /*html*/`
        <style>
            .news-fn {
                list-style-type: none;
                padding: 0;
            }
        </style>
        <ol class="news-fn">
            ${reversed.map(article => /*html*/`
                <li>
                    <time datetime="${article.date.toISOString()}">${toReadableDate(article.date)}</time> –
                    <a href="${article.url}">${article.data.title}</a>
                </li>
            `).join('')}
        </ol>
    `;
}