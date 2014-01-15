module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    nodemon: {
      dev: {
        options: {
          file: 'server.js',
          nodeArgs: ['--debug'],
        }
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'server.js', 'public/javascripts', 'app/']
    },
    bower: {
      install: {
        options: {
          targetDir: 'public/vendor'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-bower-task');

  grunt.registerTask('default', ['nodemon']);

};
