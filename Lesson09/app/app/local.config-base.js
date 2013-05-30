

exports.config = {
    db_config: {
        host: "localhost",
        user: "root",
        password: "",
        database: "PhotoAlbums",

        pooled_connections: 100,
        idle_timeout_millis: 3000
    },

    static_content: "../static/"
};

