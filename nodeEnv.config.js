module.exports = {
    apps: [
        {
            name: "manpower-pro",
            script: "./dist/server.js",
            env: {
                "NODE_ENV": "production"
            }
        },
        {
            name: "manpower-dev",
            script: "./dist/server.js",
            env: {
                "NODE_ENV": "development"
            }
        }
    ]
}