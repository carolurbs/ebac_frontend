const { task } = require("grunt");
const less = require("grunt-contrib-less");
const uglify = require("grunt-contrib-uglify");
const watch = require("grunt-contrib-watch");

module.exports =function(grunt){
grunt.initConfig(
    {
        pkg:grunt.file.readJSON('package.json'),
        less:{
            development:
            {
                files:
                {
                    './dev/styles/main.css':'./src/styles/main.less'
                }
            },
            production:{
                options:{
                    compress:true,
                },
                files:
                {
                    './dist/styles/main.min.css':'./src/styles/main.less'

                }

            }
        },
        watch:
        {
            less:{
               files: ['src/**/**/*.less'],
               tasks:['less:development']
            },
            html:{
                files:['src/index.html'],
                tasks:['replace:dev']
            }
        },
        replace:{
            dev:{
                options:{
                    patterns:[{
                        match:"CSS_ADDRESS",
                        replacement:'./styles/main.css'
                    },
                    {
                        match:"JS_ADDRESS",
                        replacement:'../src/scripts/main.js'
                    }
                  ]
                },
                files:[
                    {
                        expand:true,
                        flatten:true, 
                        src:['src/index.html'],
                        dest:'dev/'
                    }
                ]
            },
            dist:{
                options:{
                    patterns:[{
                        match:"CSS_ADDRESS",
                        replacement:'./styles/main.min.css'
                    },
                    {
                        match:"JS_ADDRESS",
                        replacement:'./scripts/main.min.js'
                    }
                  ]
                },
                files:[
                    {
                        expand:true,
                        flatten:true, 
                        src:['prebuild/index.html'],
                        dest:'dist/'
                    }
                ]
            }
        },
        htmlmin:{
            dist:{
                options:{
                    removeComments:true,
                    collapseWhitespace:true,
                },
                files:{
                'prebuild/index.html':'src/index.html'
                }
            }
        },
        clean:['prebuild'],
        uglify:{
            target:{
                files:{
                    'dist/scripts/main.min.js':'src/scripts/main.js'
                }
            }
        }

        
    }
);

grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-replace');
grunt.loadNpmTasks('grunt-contrib-htmlmin');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-uglify');

grunt.registerTask("default",['watch']);
grunt.registerTask("build",['less:production','htmlmin:dist', 'replace:dist', 'clean', uglify]);

}