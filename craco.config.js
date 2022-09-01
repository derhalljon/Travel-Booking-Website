// craco.config.js
module.export = {
    babel: {
        plugins: ["babel-plugin-macros"],
    },
    style: {
        postcss: {
            plugins: [require("tailwindcss"), require("autoprefixer")],
        },
    },
};