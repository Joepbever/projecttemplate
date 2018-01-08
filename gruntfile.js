module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        eslint: {
            target: ['./src/js/jscript.js']


        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'src/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css',
                    ext: '.css'
                }]
            }
        },
        uglify: {
            my_target: {
                files: {
                    'dist/js/jscript.js': 'jscript.babel.js'
                }
            }
        },
        babel: {
            options: {
                sourceMap: true,
                presets: ['env']
            },
            dist: {
                files: {
                    'jscript.babel.js': 'src/js/jscript.js'
                }
            }
        },
        copy: {
            files: {
                cwd: 'src/',  // set working folder / root to copy
                src: 'index.html',           // copy all files and subfolders
                dest: 'dist/',    // destination folder
                expand: true

            }
        }
    });

    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['eslint','cssmin', 'babel', 'uglify']);
    grunt.registerTask('build', ['copy:html']);
};