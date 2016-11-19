*This guide will explain the website development boilerplate made by the 2Mundos design team. You may adapt as you need, keeping the main folder structure in order to easy understanding between developers.*

# 1. GULP
All of our projects are held under the GitLab platform. The link to access 2Mundos' projects is https://gitlab.2mundos.net. You may need to request and invite to be able to access.

We use the **develop** branch for staging and the **master** branch only for production. The **master** branch holds the last stable version of the website.

You must create a branch for yourself (e.g. yourname), then when you have a completed feature you can merge into **develop**. After testing, the **develop** is merged into **master**.

* __Master__ (Production) -> Holds the last stable version
* __Develop__ (Staging) -> Should have completed features and is used for testing
* __Yourbranch__ (Development) -> Used for feature development

# 2. PROJECT SETUP
The starting point for every project is this boilerplate. We use [Bower](bower.io) for package management and [Gulp](gulpjs.com) for task automation.
<br><br>

### Bower Packages Used:
* Bootstrap (Front-end Framework);
* jQuery (Javascript Library).
<br><br>

### Gulp Dependencies Used:
* gulp-bower (Bower integration);
* browser-sync (Livereload);
* gulp-connect-php (PHP server);
* connect-modrewrite (URL rewrite);
* gulp-sass (Sass compiler);
* gulp-clean-css (CSS minifier);
* gulp-autoprefixer (Auto prefix CSS styles for all browsers);
* gulp-eslint (Javascript linter);
* gulp-concat (Javascript concatenator);
* gulp-uglify (Javascript minifier);
* gulp-sourcemaps (Javascript sourcemaps);
* gulp-imagemin (Image compressor);
* imagemin-pngquant (Optimize imagemin PNG compressions);
<br><br>

## INSTALL NODEJS
You need to have **NodeJS** installed since Bower and Gulp work by using Node. You can check if you have NodeJS already by running: <br><br>
`node -v`
<br><br>

If you don't, download it at https://nodejs.org
<br><br>

## INSTALL BOWER
Then you need to install **Bower**. You can check if you have Bower by running: <br><br>
`bower -v`
<br><br>
If you don't, run: <br><br>
`npm install -g bower`
<br><br>

## INSTALL GULP
Check for **Gulp** also using: <br><br>
`gulp -v`
<br><br>
You must have a CLI version (global) installed on your computer. To install the CLI version run:<br><br>
`npm install --global gulp-cli`
<br><br>

## INSTALL GULP DEPENDENCIES
At the root folder, run: <br><br>
`npm install`
<br><br>
This will install all Gulp dependencies listed in package.json.
<br><br>

## START GULP
All you need to start using Gulp is running: <br><br>
`gulp`
<br><br>
This will automatically install any pendant Bower components and will execute the following tasks: <br>

* _**default:**_ _Watches the scss, html/php, js and png/gif/jpg files so any changes will re-run the related task. Also starts the server._
* _**php:**_ _Configs the PHP server._
* _**components:**_ _Saves Bower components into the appropriate project folder._
* _**styles:**_ _Compiles SCSS files, insert browser prefixes and saves into .tmp/css._
* _**copy-html:**_ _Saves html/php files into .tmp/templates._
* _**copy-images:**_ _Saves png/gif/jpg files into .tmp/img._
* _**scripts:**_ _Concatenates javascript files and saves into .tmp/js._
* _**lint:**_ _Checks for javascript errors._

## PRODUCTION
To prepare your project for production, you must run: <br><br>
`gulp dist`
<br><br>
Which will execute the following tasks: <br>

* _**copy-html-dist:**_ _Saves html/php files into dist/templates._
* _**img-compression:**_ _Compresses images and saves them into dist/img._
* _**styles-dist:**_ _Minifies the CSS file and saves it into dist/css._
* _**scripts-dist:**_ _Minifies the javascript file and saves it into dist/js._
<br><br>

# 3. DIRECTORY STRUCTURE
The **src** folder is where the website is developed. Here is where we have uncompressed files and images. After running the Gulp's default task, all files inside the **src** folder are copied to the **.tmp** folder. In the **.tmp** folder, we have concatenated, autoprefixed and compiled css, and concatenated and linted javascripts. Files and images are still uncompressed here. The dist task copies everything to the **dist** folder, and now everything is compressed and minified, ready for deployment.<br><br>

* __src folder:__ Raw and uncompressed files. Development happens here.
* __.tmp folder:__ After running **gulp**, scss are concatenated, autoprefixed and compiled, and javascripts are concatenated and linted. Everything's still uncompressed. The server starts from this folder.
* __dist folder:__ After running **gulp dist**. Everything is compressed, minified and ready for deployment.
