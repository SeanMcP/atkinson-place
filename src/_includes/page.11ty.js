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
        <meta name="description" content="${data.metaDescription || "Information and update from Atkinson Place, a friendly little street on the edge of Blackridge in Wilkinsburg, Pennsylvania"}">
        <title>${data.title}</title>
        <link rel="stylesheet" href="/main.css">
        <link rel="icon" type="image/png" href="/favicon.png">
    </head>
    <body>
        ${this.alertFn(data)}
        <nav>
            <a href="/" ${data.page.url === "/" ? "aria-current=page" : ""}>Atkinson Place</a>
            <div>
                ${joinMap(data.mainNavigation, link => `
                    <a ${data.page.url === link.href ? "aria-current=page" : ""} ${link.descriptiveLabel ? `aria-label="${link.descriptiveLabel}"` : ""} href="${link.href}">${link.label}</a>
                `)}
            </div>
        </nav>
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