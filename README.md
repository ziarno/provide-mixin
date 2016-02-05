ProvideMixin
============

A mixin for [`mdg:validated-method`](https://github.com/meteor/validated-method) to add additional arguments to the `run` function.


Install
-------

`meteor add ziarno:provide-mixin`

Usage
-----

```js
SomeCollection.methods.someMethod = new ValidateMethod({
    name,
    mixins: [ProvideMixin],
    provide: function (args) {
      //whatever we return here will be added
      //as the last argument of the run function
      return SomeOtherCollection.findOne(args.someOtherCollectionId);
    },
    validate,
    run: function (args, someOtherCollectionItem) {
      //...
    }
});
```
**Important note:**
If you're using more than one mixin that wrap the `run` function
(ex. [`ziarno:restrict-mixin`](https://github.com/ziarno7/restrict-mixin)),
make sure to add `ProvideMixin` as the *last* mixin in the `mixins` array -
that way it will be called *first*, and will be able to provide arguments
to other methods (such as `condition()` and `error()` in [`ziarno:restrict-mixin`](https://github.com/ziarno7/restrict-mixin))

Example:

```js
SomeCollection.methods.someMethod = new ValidateMethod({
    name,
    // mixins: [ProvideMixin, RestrictMixin], - wrong!
    mixins: [RestrictMixin, ProvideMixin], //correct
    provide: function (args) {
      return SomeOtherCollection.findOne(args.someOtherCollectionId);
    },
    restrictions: [
      {
        condition: function (args, someOtherCollectionItem) {
          return someOtherCollectionItem.owner !== this.userId;
        },
        error: function (args, someOtherCollectionItem) {
          return new Meteor.Error(this.name + '.unauthorized', 'Only owners can do stuff');
        },
      }
    ],
    validate,
    run: function (args, someOtherCollectionItem) {
      //...
    }
});
```
