module.exports = {
    apps: [
        {
            name: "production",
            script: "./dist/server.js",
            env: {
                "NODE_ENV": "production"
            }
        },
        {
            name: "development",
            script: "./dist/server.js",
            env: {
                "NODE_ENV": "development"
            }
        }
    ]
}