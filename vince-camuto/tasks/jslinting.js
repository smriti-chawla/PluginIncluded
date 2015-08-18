module.exports = {
    targets: [
        'app/*.js',
        'app/**/*.js',
        'static/**/*.js',
        'tests/unit/**/*.js',
        'tests/integration/**/*.js',
        'tests/system/**/*.js',
        '!app/bower_components/**',
        '!app/vendor/**'
    ]
};
