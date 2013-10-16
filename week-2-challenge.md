# Geekwise AngularJS - Week 2 Challenge

Building on your knowledge from the past two weeks, re-create the todo application using AngularJS. This is going to be very easy to cheat on, because there are lots of examples of Todo applications using AngularJS. (Including one on [http://www.angularjs.org](http://www.angularjs.org)!). Don't cheat.

This is going to get a little complicated. Don't hesitate to reach out to each other or me with questions.

**Sorting**

* You should still have a button for clearing your list

**Filtering**

Now that we know a little bit about filters in Angular, you should be looking for ways to use them in your Todo App. The challenge will be to apply these filters *programmatically*, i.e. you don't want your Alphabetize or Sort by Completed filters to be applied all the time.

* create checkboxes that toggle whether the list should be Alphabetized and/or sorted by Completion
    * look at the documentation for [filter](http://docs.angularjs.org/api/ng.filter:filter). You will want to use this within a `$scope` method.

Use directives for list items. Things to look at:
    * ng-hide
    * binding the inputs to the local scope value of ng-repeat

## Other: install Node JS

I've mentioned [Node JS](http://nodejs.org/) before. It's a server-side implementation of the Javascript compiler. That means you can run it directly on your computer, instead of in the browser. A lot of awesome tools for web developers are built with Node, including the `http-server` command that I'm using in tonight's class. Please installe Node on your computer. I recommend downloading the binaries for your target platform. You can build it from source (it's open source!), but this takes a long time and doesn't give you many benefits.