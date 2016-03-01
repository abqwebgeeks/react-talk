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
this demo.
