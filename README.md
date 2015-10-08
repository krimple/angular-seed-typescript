# Angular 2.0 Seed Project

This project is based on learnings from a few others, including
ng2-play, the Angular Class seed projects and others.

I got frustrated with the various hoops I was jumping through by using
others' repositories so I built mine from the ground up. There are a lot
of moving parts, and I wanted to tease them all out. The last straw was
when I heard that the Angular team was no longer pushing to
DefinitelyTyped (and not using the tsd tool).

Things at play here:

1.  All dependencies are stored in the repo using `npm`
2.  A gulp task (currently called setup) copies the static files over to
    a set of directories in the `web` top-level directory. This includes
    the ES5 versions of Angular, Bootstrap, the MS Reactive JS
    libraries, etc... into `web/lib`
3.  The system uses the `gulp-typescript` transpiler plugin, which calls
    on `typescript` to do its' bidding. The version of TypeScript I'm
    using is 1.6.2.
4.  The transpile targets ES5, outputs `.js` files in `web/js`, and
    expects them to be loaded by the System.JS ES5 loader.  The settings
    for transpilation are placed in `tsconfig.json` so tools like Visual
    Studio Code and Atom can use them.  This is not 100% perfect yet.
5.  The index.html file in `web` is wiring together the application,
    using System.JS, the Reflect.js module loader shim, and the
    `es6-shim` to cover any features in objects such as
    `Array.prototype` that aren't in your current ES5 browser.

## How to set up 

* Clone the repo
* Run the following

```bash
npm install -g gulp typescript@1.6.2 live-server
npm install
gulp setup
```

## How to run

Just run the gulp command to fire up a server with livereload and automatic typescript compilation. Browse to `http://localhost:4000`.

```bash
gulp 
```
