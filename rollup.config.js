export default {
    input: "main.js",
    output: {
        file: "dist/bundle.js",
        format: "umd",
        globals: {
            "source-map": "sourceMap",
        },
        name: "Terser",
        sourcemap: true,
    },
    external: "source-map",
};
