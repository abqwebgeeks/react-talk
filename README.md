# React & Redux
A talk about React and Redux for [ABQ WebGeeks](http://abqwebgeeks.org) by [Damon Toal-Rossi](http://github.com/orbiteleven).

### TodoMVC
We'll use the universal [TodoMVC](http://todomvc.com) project, which provides us stylesheets and functional goals.

### Format
This repository is organized into "chapters" by git branch. Each branch is based on the last.

## Chapter 1
```
git checkout 1-the-input
```
We add our first component representing the application. It doesn't do anything, but that's the point: components are just wrappers for
other components, whether they're native (i.e. `<input>`) or more complex.

We place this top-level component in a folder called "containers" to separate it from lower-level components. This will become more clear
in later chapters.

## Chapter 2
```
git checkout 2-some-todos
```
Add a few static todos in the container, then display them through a hierarchy of components, again illustrating that everything is just a
component, including `<li>`, `<label>` and `<input>` tags.

## Chapter 3
```
git checkout 3-add-todos
```
By moving the `todos` list in our container into state<sup>[1](#state-warning)</sup> we can now modify it, in this case by adding new todos
to the `todos` list. We do this by adding a `onKeyUp` listener to the input, allowing us to either save or clear the value.

> <sup><a name="#state-warning">1</a></sup>: this isn't really a good way to structure *real-wold* applications, but serves the purpose of
this demo. We'll fix this in a later chapter.

## Chapter 4
```
git checkout 4-todo-completion
```
By passing down callbacks from our top-level container component, we can capture events from child components to toggle the completion
status of a todo. We're careful to only move the state forward by returning new objects and arrays.

## Chapter 5
```
git checkout 5-introduce-redux
```
As we continue to add functionality, our Container starts getting pretty busy. It's time to implement application state using Redux.

Redux maintains the application state in a "store". It doesn't care how you structure this, it just provides tools for managing this state
through "actions" and "reducers".

**Actions** are things that happen in the application, like `addTodo` or `setTodoComplete`. They do not modify the application state, just
announce that something *should* happen. Actions are simple function that return *intent* and optionally some payload.

**Reducers** are simple functions that modify the state of the application. They are not called directly, but rather get called by Redux
a result of matching an **Action***'s intent.

When an update happens to the application state, this is passed down through the application as props. We connect our high-level Container
to Redux with `connect`, which maps application state to `this.props` in the Container.
