const StyleLintPlugin = require('stylelint-webpack-plugin');
module.exports = {
    configureWebpack: {
        plugins: [
            new StyleLintPlugin({
                files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
            })
        ]
    },

    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/assets/styles/common/_global.scss";`
            }
        }
    }
};