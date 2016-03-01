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
