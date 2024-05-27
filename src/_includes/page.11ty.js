import { joinMap } from "../utils.js";

export default function (data) {
    const heading = data.heading || data.title;
    console.log(data.page.url)
    return /*html*/`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${data.title}</title>
        <link rel="stylesheet" href="/main.css">
    </head>
    <body>
        ${this.alertFn(data)}
        <nav>${joinMap(data.mainNavigation, link => `
            <a ${data.page.url === link.href ? "aria-current=page" : ""} href="${link.href}">${link.label}</a>
        `)}</nav>
        <header>
            <section>
                <div>Atkinson Place</div>
                <div><em>A friendly little street in Wilkinsburg, PA</em></div>
            </section>
        </header>
        <main class="prose">
            <h1>${heading}</h1>
            ${data.content}
        </main>
        <footer>
            Made with <span aria-label="love" role="img">💚</span> on Atkinson Place, Wilkinsburg, PA
        </footer>
    </body>
    `
}