module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        connect: {
            options: {
                port: 8000,
                hostname: '*'
            },
            server: {
                options: {
                    open: true,
                    base: [
                        '/'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');

    // default task
    grunt.registerTask('default', ['connect']);
};
