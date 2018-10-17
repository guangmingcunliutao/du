const gulp = require('gulp'),
    uglify = require('gulp-uglify'), // 压缩js插件
    connect = require('gulp-connect'), // 开启服务器插件
    babel = require('gulp-babel'), // es6转es5插件
    minify_css = require('gulp-minify-css'), // 压缩css插件
    htmlmin = require('gulp-htmlmin'), // 压缩html插件
    imagemin = require('gulp-imagemin'); // 压缩图片插件


gulp.task('all', () => {
    // 查找project下面的所有文件
    gulp.src('project/**/*.*')
        // 输出到dist文件夹下面
        .pipe(gulp.dest('dist'));
});

gulp.task('html', () => {
    // 查找project下面的html文件
    gulp.src('project/**/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true, //清除HTML注释
            minifyJS: true, //压缩页面JS
            minifyCSS: true //压缩页面CSS
        }))
        // 输出到dist文件夹下面，如果已经有了，会进行覆盖
        .pipe(gulp.dest('dist'))
        // 刷新页面
        .pipe(connect.reload());

    /* var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src('src/html/*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist/html')); */

});

gulp.task('js', () => {
    // 查找project下面的js文件
    gulp.src('project/**/*.js')
        // 将es6转换为es5
        .pipe(babel({
            presets: ['@babel/env']
        }))
        // 压缩js
        .pipe(uglify())
        // 输出到dist文件夹下面，如果已经有了，会进行覆盖
        .pipe(gulp.dest('dist'))
        // 刷新页面
        .pipe(connect.reload());
});

// 监听文件
gulp.task('watch', () => {
    gulp.watch('project/**/*.html', ['html']);
    gulp.watch('project/**/*.js', ['js']);
});

// 合并任务
gulp.task('build', ['all', 'html', 'js']);

// 开启服务器
gulp.task('connect', () => {
    connect.server({
        // 设置根目录
        root: 'dist',
        livereload:true,
        // 设置端口
        port: 9511
    });
});

// default：默认执行的任务
gulp.task('default',['build','connect']);

// gulp +  任务名称, 如果不写, 默认执行default任务
// gulp 一共有4个api
//  src: 超找文件
//  dest: 输出文件
//  watch: 监听文件
//  task: 创建一个任务