module.exports = {
    tasks: {
        build: [
            "clean",
            "webpack"
        ],
        clean: [
            "@sh rm -rf ./js/dist",
            "@sh rm -rf ./css/dist"
        ],
        webpack: "@npm webpack"
    }
};