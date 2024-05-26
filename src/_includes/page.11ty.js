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
        <header>
            <section>
                <div>Atkinson Place</div>
                <div><em>A friendly little street in Wilkinsburg, PA</em></div>
            </section>
        </header>
        <nav>${data.mainNavigation.map(link => `<a aria-current="${data.page.url === link.href}" href="${link.href}">${link.label}</a>`).join(" ")}</nav>
        <main class="prose">
            <h1>${heading}</h1>
            ${data.content}
        </main>
        <footer>
            Made with <span aria-label="love" role="img">💚</span> on Atkinson Place, First Ward, Wilkinsburg, PA
        </footer>
    </body>
    `
}