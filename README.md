# TPP Interactive Progress Chart
This is a live version of the progress chart image originally created by [jim_needs_me](https://www.reddit.com/user/jim_needs_me).

This project is not intended to replace the need for the images, but more as a supplement to them. It contains data for all our previous runs in a JSON blob, and scrapes http://twitchplayspokemon.org for live updating data during the current run. All runs carry their JSON data with them for easy copying and editing, so it should be simple to freeze a run after it ends, clean it up, and add it to the stored runs.

As always, there's room for improvement. Visit [this Reddit thread](https://www.reddit.com/r/twitchplayspokemon/comments/3wy0eq/liveupdating_interactive_progress_bars/) to submit comments and suggestions.

##Running your own
The source code is in [TypeScript](http://www.typescriptlang.org), but the compiled JS is also included. Should you just want to check this out and run it locally or on your own webserver, all that should be required is checking out the repo and opening index.html in your browser. All the code runs client-side. No database is required.

##Modifying
I built the project using [Visual Studio Code](https://code.visualstudio.com) (hence the .vscode folder), but any text editor would work just fine. To compile the source TypeScript, you'll need a [TypeScript compiler](http://www.typescriptlang.org/#Download). The built JS isn't minified, so if you just want to experiment on your own, you can modify the built JS easily.
