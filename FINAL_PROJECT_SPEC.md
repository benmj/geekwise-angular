*NOTE* We'll be changing around the way that our applications store their data. In the spec as it's written below, data was to be stored in your browser. Instead, we'll be interacting with an actual server. I believe this is a more common use case and will give you better, real-world skills. -Ben

## Synopsis:

As an exercise in AngularJS, we would like an application that will help a team of developers communicate about the projects they are currently working on.  The application should communicate high level information such as what projects are being worked on, who is working on those projects, when it will be done and current status.  

Decipher will provide a local persistence layer (wrapper around LocalStorage that will introduce latency to mimic actual server calls) so the developer can focus on building out the angular app, making calls to a simple API to save data.

Each projects should be checked into it’s own github repo that Decipher can access to evaluate progress.

## Scope

need to see all projects that are part of this “board”
must be able to edit all project details: title, description, team, estimated due date
NOTES: should not save until user explicitly saves
must be able to change the status of a project (not started, on track, delayed, completed)
must be able to add comments to a project
NOTES: new comments should not be saved until user explicitly saves
should be able to view all comments for a project

## Bonus:

- Date picker for due date.
should be able to add an indicator (tag?) to each team member to indicate their role: project owner, client stakeholder, designer, tester, etc.
- hyperlink support in comments (hint: linky)

## Suggestions:

You will need to create a copy of your content prior to editing. When the user saves, you must then replace the actual model information with the new content as well as save the change to the DB. If you fail to create a copy, Angular will update the UI with the edited content as the user types, making it appear that the unsaved data is actually the real data.
You may want to use some sort of modal dialog for edits. At a minimum, there should be a way to “cancel” an edit and to “save” changes.


We don’t want to suggest any kind of UI for this, as it could be super simple or very complicated.  We won’t necessarily be evaluating how “pretty” it is from the development side of things, so the devs shouldn’t have to worry too much about spending time on making it beautiful.  That said, we are looking to hire front end devs / designers so if anyone is able to get this looking pretty awesome in the given time frame it will likely catch our eye.
