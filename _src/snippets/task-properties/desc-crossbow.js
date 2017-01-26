module.exports = {
    tasks: {
        release: {
            description: 'Create a production release of CSS/JS/HTML assets',
            tasks: [
                'build:\*',
                'templates'
            ]
        },
        templates: {
            description: 'Generate HTML from the the Markdown in the `docs` folder',
            tasks: [
                '@sh jekyl build'
            ]
        },
        '(build)': {
            css: '@npm node-sass src/style.scss dest/style.css',
            js:  '@npm tsc ./app/ts/scripts.ts --outFile ./app/js/scripts.js'
        }
    }
};