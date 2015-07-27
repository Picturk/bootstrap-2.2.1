module.exports = function(grunt){

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
    	pkg: grunt.file.readJSON('package.json'),

       	watch: {
       		options: {
						    livereload:true
					  },
			html: 	{
					files: ['*.html'], // which files to watch
		       		options: {
								    livereload:true
							  }
					},

		    less: 	{
				    	files: ['less/**/*.less'], // which files to watch
				        tasks: ['less'],
				        options: {
				          	nospawn: true
				        }
				    }

		},//END Watch

	    less: {
	      development: {
	        options: {
	          compress: false,
	          yuicompress: false,
	          optimization: 2
	        },
	        files: {
	          "css/main.css": "less/bootstrap.less", // destination file and source file
	          "css/responsive.css": "less/responsive.less" // destination file and source file
	        }
	      }
	    },

	    connect: {
	      server: {
	        options: {
	          livereload:true,
	          port: 3000,
	          base:'.'
	        }
	      }
	    } 	 

     });

    grunt.registerTask('default', ['less','connect:server','watch']);
};       