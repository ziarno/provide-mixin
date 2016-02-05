ProvideMixin = function (methodOptions) {

  if (_.isFunction(methodOptions.provide)) {
    methodOptions.run = _.wrap(methodOptions.run,
      function (originalRun) {
        var args = Array.prototype.slice.call(arguments, 1);
        var provideData = methodOptions.provide.apply(this, args);
        return originalRun.apply(this, args.concat([provideData]));
      }
    );
  }

  return methodOptions;

};