module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        express : {
            dev: {
                options: {
                    compress: true,
                    script: 'app.js'
      }
            }
        },
        sass: {
            dist: {
                files: {
                    //'site_root/css/bootstrap_te.css' : 'site_root/scss/bootstrap/bootstrap_te.scss',
                    'site_root/css/theme-te45.css' : 'site_root/scss/theme-te45.scss'
                }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.registerTask('dev',['express','sass','watch']);
}