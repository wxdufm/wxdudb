module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    nodemon: {
      dev: {
        options: {
          file: 'server.js',
          nodeArgs: ['--debug'],
          watch: ['app']
        }
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'server.js', 'public/javascripts', 'app/', 'test/']
    },
    bower: {
      install: {
        options: {
          targetDir: 'public/vendor'
        }
      }
    },
    mochaTest: {
      options: {
        require: ['should']
      },
      src: ['test/**/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.registerTask('default', ['nodemon']);

};
