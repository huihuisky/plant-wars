var obj = {
	removeComments: true, //清除HTML注释
	collapseWhitespace: true, //压缩HTML
	collapseBooleanAttributes: true,//省略布尔属性的值<input checked="true"/> ==> <input checked/>
	removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
	removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
	removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
	minifyJS: true, //压缩页面JS
	minifyCSS: true //压缩页面CSS
}


//获取gulp
var gulp = require("gulp");

var babel = require('gulp-babel'); //es6转es5
var uglify = require('gulp-uglify'); //js压缩插件
var uglify = require('gulp-uglify'); //js压缩插件
var minifyCss = require('gulp-minify-css'); //css压缩插件

//压缩css
gulp.task('cssTask', function(){
	gulp.src('feijidazhan/css/dafeiji.css')
	.pipe(minifyCss())
	.pipe(gulp.dest('dest/css'));
});


gulp.task("jsTask",function(){
	gulp.src("feijidazhan/js/*.js")
	.pipe(babel({"presets": ["es2015"]})) //es6转es5
	.pipe(uglify())//使用插件
	.pipe(gulp.dest("dest/js"));
})


//默认任务
//gulp.task("default",["cssTask"]);
gulp.task("default",["jsTask"]);