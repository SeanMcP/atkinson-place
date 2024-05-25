export default class Home {
    data() {
        return {
            layout: "page.11ty.js",
        }
    }

    render(data) {
        return /*html*/`
            <h2>News</h2>
            ${this.newsFn(data)}
            ${data.content}
        `;
    }
}
