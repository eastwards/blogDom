module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Task sass
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/scss',
                    src: ['*.scss','!function.scss','!normalize.scss'],
                    dest: 'src/css',
                    ext: '.css'
                }]
            }
        },
        watch: {
            files: ['src/scss/*.scss'],
            tasks: ['sass']
        },
        // Task cssmin
        cssmin: {
            target: {
                files: {
                    'dist/css/style.css': ['src/css/*.css','!src/css/base.css'],
                    'dist/css/base.css': 'src/css/base.css'
                }
            }
        },
        // Task imagemin
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/images',
                    src: ['*.{png,jpg,gif}'],
                    dest: 'dist/images'
                }]
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'src/script/*.js']
        },
        uglify: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'src/script',
                    src: '**/*.js',
                    dest: 'dist/script'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['sass','watch','jshint']);
    grunt.registerTask('build',['cssmin','imagemin','uglify']);
};