# Geekwise AngularJS

## Week 3 challenge

Using Angular's `$http` service, create a CRUD application for dealing with the `users` collection on the server -- running at [http://geekwise-angularjs.herokuapp.com](http://geekwise-angularjs.herokuapp.com).

This is one small chunk of what will become the final project. You should therefore aspire toward building and attractive and intuitive user interface.

## Reminders, Notes, & Things

- The ever evolving documentation can be viewed on [our Apiary page](http://docs.geekwise.apiary.io). The `GET` method for `/users` is pretty stable, so you should feel free to base your app on these field names.
- The live server is available at [http://geekwise-angularjs.herokuapp.com](http://geekwise-angularjs.herokuapp.com). Remember that you will always put your name in the route before any other route information. For example: http://geekwise-angularjs.herokuapp.com/**ben**/users

Please read through the APIary docs. I've made some minor changes to the way the API functions that could break your app if you're not paying attention. One thing to pay close attention to: when you use `PUT` (to update a resource), you must pass in all the fields. I did some reading on `PUT`, and this is the recommended way to do it because it makes the method idempotent. Look that one up, it's a fun word.

## Interesting facts

Darin had mentioned the `PATCH` method. This is meant to selectively update a resource, without having to pass in all the fields (see the above note about `PUT`). I didn't know about this one before, but I'm curious about it. Nonetheless, for our app, we will only use `PUT` for updating resources, and it will expect you to pass in all the fields.
