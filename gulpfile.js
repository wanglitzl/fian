/**
 * Created by DELL on 2017/10/19.
 */
var fs = require('fs');
var url = require('url');
var path = require('path');
var gulp = require('gulp');
var webserver = require('gulp-webserver');
gulp.task('toConform', function () {
    gulp.src('./')
        .pipe(webserver({
            port:8989,
            livereload: true,
            directoryListing:{
                path: './',
                enable: true
            },
            open:true,
            middleware: function (req, res, next) {
                var urlObj = url.parse(req.url);
                var mockFile=path.join(__dirname, 'Data',urlObj.query+'.json');
                console.log(mockFile);
                fs.exists(mockFile, function (exist) {
                    if(!exist){return new Error('can not this find')}
                    fs.readFile(mockFile, function (err, data) {
                        if(err) {return err.message}
                        var data = {
                            isSuccess:true,
                            data: data.toString()
                        };
                        res.writeHead(200,{
                            'Content-Type': "text/json;charset=utf-8",
                            "Access-Control-Allow-Origin":"http://localhost:63342"
                        });
                        res.end(JSON.stringify(data));
                    })
                })
            }
        }))
});