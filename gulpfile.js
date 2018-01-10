var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
  browserSync.init(['*.js'], {
    server: {
      baseDir: './'
    }
  });
});

gulp.task('default', ['browser-sync'], function() {});
