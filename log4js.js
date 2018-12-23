module.exports = {
    appenders: {
        console: {
            type: "console",
            layout: { type: "messagePassThrough" },
        },
        global: {
            type: "dateFile",
            filename: "logs/Error-",
            encoding: "utf-8",
            pattern: "yyyy-MM-dd.log",
            alwaysIncludePattern: true,
        },
    },
    categories: {
        default: {
            appenders: ["console", "global"],
            level: "INFO",
        },
    },
  };