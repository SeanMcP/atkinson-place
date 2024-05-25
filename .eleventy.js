import newsFn from "./src/functions/news.11ty.js";
import alertFn from "./src/functions/alert.11ty.js";

export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ "public": "/" });

    eleventyConfig.addJavaScriptFunction("alertFn", alertFn);
    eleventyConfig.addJavaScriptFunction("newsFn", newsFn);

    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
}