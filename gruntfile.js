'use strict';

module.exports = function(grunt) {

  grunt.initConfig({

    clean: [ 'build/' ],


    jshint: {
      options: {
        jshintrc: '.jshintrc',
        ignores: [ 'node_modules/**' ]
      },
      source: {
        files: {
          src: ['src/js/**/*.js']
        }
      },
    },

    copy: {
      html: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: '**/*.html',
            dest: 'build/'
          }
        ]
      },
      img: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: 'img/**/*.*',
            dest: 'build/'
          }
        ]
      },
      vendorjs: {
        files: [
          {
            expand: true,
            cwd: 'node_modules/angular',
            src: [ 'angular.js' ],
            dest: 'build/js/'
          },
          {
            expand: true,
            cwd: 'node_modules/angular-ui-router/release',
            src: [ 'angular-ui-router.js' ],
            dest: 'build/js/'
          }
        ]
      },
    },

    sass: {
      allStyles: {
        files: {
          'build/css/styles.css': 'src/sass/main.scss'
        }
      }
    },

    concat: {
      js: {
        src: [ 'src/js/hotelier.module.js', 'src/js/**/*.js' ],
        dest: 'build/js/app.js'
      }
    },

    watch: {
         html: {
           files: ['src/index.html', 'src/views/**'],
           tasks: ['copy:html']
         },
         js : {
           files: ['src/js/**/*.js'],
           tasks: ['jshint', 'concat']
         },

         sass: {
           files: ['src/sass/**/*.scss'],
           tasks: ['sass']
         },
         images: {
           files: ['src/img/**'],
           tasks: ['copy:img']
         },

         test: {
           files: [ 'test/specs/**/*.js' ],
           tasks: [ 'test' ]
         }
       },

       karma: {
         options: {
           frameworks: ['mocha', 'chai'],
           client: {
             mocha: {
               ui: 'bdd'
             }
           },
           browsers: [ 'PhantomJS' ],
           singleRun: true,

           preprocessors: {
             'src/js/**/*.js': [ 'coverage' ]
           },
           reporters: ['dots', 'coverage'],
           coverageReporter: {
             type: 'text-summary'
           }
         },
         roomsAvailable: {
           options: {
             files: [
               'node_modules/angular/angular.js',
               'node_modules/angular-ui-router/release/angular-ui-router.js',
               'node_modules/angular-mocks/angular-mocks.js',
               'src/js/hotelier.module.js',
               'src/js/login.controller.js',
               'src/js/login.service.js',
               'src/js/allReservations.controller.js',
               'src/js/allReservations.service.js',
               'test/specs/allReservations.spec.service.js',
               'src/js/rooms-available.controller.js',
               'src/js/rooms.service.js',
               'test/specs/rooms.service.spec.js'

             ]
           }
         }

       }


  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('default', [ 'clean', 'karma', 'jshint', 'copy', 'concat', 'sass' ]);
};
