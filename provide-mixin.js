ProvideMixin = function (methodOptions) {
  var provideData;

  console.log('ProvideMixin');

  if (_.isFunction(methodOptions.provide)) {
    methodOptions.run = _.wrap(methodOptions.run,
      function (originalRun) {
        var args = Array.prototype.slice.call(arguments, 1);
        provideData = methodOptions.provide.apply(this, args);
        return originalRun.apply(this, args.concat([provideData]));
      }
    );
  }

  return methodOptions;

};