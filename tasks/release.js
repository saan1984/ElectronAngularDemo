'use strict';
var gulp = require('gulp'),
    utils = require('./utils'),
    releaseForOs = {
        osx: require('./release_osx'),
        windows: require('./release_windows')
    };

gulp.task('release', ['build'], function () {
    return releaseForOs[utils.os()]();
});
