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
                    open: {
                        target: 'http://localhost:8000/src/index/index.html'
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');

    // default task
    grunt.registerTask('default', []);

    grunt.registerTask('run', 'start a connect web server', function() {
        grunt.task.run('connect:server:keepalive');
    });
};
