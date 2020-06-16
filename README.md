# TPP Interactive Progress Chart
This is a live version of the progress chart image originally created by [jim_needs_me](https://www.reddit.com/user/jim_needs_me).

This project is not intended to replace the need for the images, but more as a supplement to them. It contains data for all our previous runs in a JSON blob, and scrapes http://twitchplayspokemon.org for live updating data during the current run. All runs carry their JSON data with them for easy copying and editing, so it should be simple to freeze a run after it ends, clean it up, and add it to the stored runs.

As always, there's room for improvement. Visit [this Reddit thread](https://www.reddit.com/r/twitchplayspokemon/comments/3wy0eq/liveupdating_interactive_progress_bars/) to submit comments and suggestions.

## Running your own
The source code is in [TypeScript](http://www.typescriptlang.org), but the compiled JS is also included. Should you just want to check this out and run it locally or on your own webserver, all that should be required is checking out the repo and opening index.html in your browser. All the code runs client-side. No database is required.

## Modifying
I built the project using [Visual Studio Code](https://code.visualstudio.com) (hence the .vscode folder), but any text editor would work just fine. You can modify the compiled JS if you like, but if you want to modify the actual source, TypeScript and Gulp are required.

To install [TypeScript](https://www.typescriptlang.org/#download-links) and [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md), first install [Node.js](https://nodejs.org/), and then run

    $ npm install --global typescript gulp-cli

Then check out this repository

    $ git clone https://github.com/thatswhatyouget/tpp-progress.git

Then make sure all dependencies are met

    $ cd tpp-progress
    $ npm install

If all goes well, you can recompile the project by running

    $ gulp build

Or use the build shortcut (ctrl/cmd-shift-b) in Visual Studio Code.
