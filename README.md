
# MJML Gulp Starter

## Introduction

### MJML Starter for Email coding with Gulp, BrowserSync & Imagemin.
MJML is a new way of writing/building super fast HTML Email without caring too much about all the various hacks/fallbacks.
This starter was build to make it easier on your side to write MJML and preview the HTML rendered instantly in the browser as you code.
As Emails require to have lightweight images aswell, it also comes with imagemin to compress images as you add them.

### This starter uses these tools :
- [MJML](https://mjml.io/) 4 processor for gulp (gulp-mjml),
- **BrowserSync** server for assets injections & automatic reload on changes,
- **Imagemin** for _lossless_ images compression with :
  * **gifsicle** — Compress GIF images
  * **jpegtran** — Compress JPEG images
  * **optipng** — Compress PNG images
  * **svgo** — Compress SVG images
- **MJML** starter template.


## Installation

### Requirements
- [NodeJS](https://nodejs.org/en/) (6 or greater)
- [Gulp](https://gulpjs.com/)

### Optional
- [Git](https://git-scm.com/)

You can clone this repository doing this in your command line tool:

```bash
$ git clone https://github.com/heyflo/mjml-gulp-starter mjml-gulp-starter
```

Or just download the files from this repository.

Then open the folder in your command line tool and install the needed dependencies:

```bash
$ cd mjml-gulp-starter
$ npm install
```

## Usage

Finally, run `gulp watch` to run Gulp & BrowserSync for development. Everything you will do will be created in a folder called `dist`.

```bash
$ gulp watch
```
Local development URL :
```bash
http://localhost:3000
```

### Ready for production
When you are done building everything and you want to make a clean build for production, use the command line tool again and type `gulp` :

```bash
$ gulp
```

This will first delete your existing `build/` folder, then process everything and send it into your `build/` folder again. This is useful if you used different assets while developing and deleted some of them in your `src/` folder (what you delete in this folder will still exist in the `build/` folder.

Enjoy coding ✌️
