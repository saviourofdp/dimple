

module.exports = function(grunt) {

    grunt.initConfig({
        wiredep: {
            target: {
                src: 'index.mrs', // point to your Dimensions file.
                fileTypes: {
     
                    mrs: {
                        block: /(([ \t]*)'!?\s*bower:*(\S*))(\n|\r|.)*?('!?\s*endbower)/gi,
                        detect: {
                            mrs: /#\s*include\s+"?(.+mrs)"?/gi
                        },
                        replace: {
                            mrs: '#include "{{filePath}}"'
                        }
                    }
                }
            }
        },
        watch: {
            files: [],
            tasks: ['wiredep']
        }
    });

    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['wiredep']);

};