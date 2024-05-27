import alertFn from "./src/functions/alert.11ty.js";
import calendarShortcode from "./src/_includes/shortcodes/calendar.js";

export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ "public": "/" });

    eleventyConfig.addJavaScriptFunction("alertFn", alertFn);

    eleventyConfig.addShortcode("calendar", calendarShortcode);

    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
}