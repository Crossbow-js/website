module.exports = {
    tasks: {
        build: [
            "clean",
            "webpack"
        ],
        clean: "@sh rm -rf ./dist",
        webpack: "@npm webpack"
    }
};