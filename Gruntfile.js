module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
		  stripBanners:true,
        banner: '/*! <%= pkg.name %>-<%= pkg.version %>.js <%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      build: {
        src: 'src/test.js',
        dest: 'build/<%= pkg.name %>-<%= pkg.version %>.min.js'
      }
    },
    jshint:{
      build:['Gruntfile.js','src/*.js'],
      options:{
        jshintrc:'.jshintrc'
      }
    },
    csslint:{
      build:['src/*.css'],
      options:{
        csslintrc:'.csslintrc'
      }
    },
    watch: {
      scripts: {
        files: ['src/*.js','src/*.css'],
        tasks: ['jshint','uglify','csslint'],
        options: {
          spawn: false
        }
      }
    }
  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['jshint','uglify','csslint','watch']);

};