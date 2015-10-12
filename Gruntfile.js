module.exports = function(grunt)
{

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		karma:
		{
				unit:
				{
					configFile: 'karma.conf.js'
				}
		}
	});

	grunt.loadNpmTasks('grunt-karma');
	//TODO: figure out exception

	//Default task(s).
	grunt.registerTask('default', ['karma']);

};