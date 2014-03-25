# Prototype

This project is a global prototype that, once cloned, lets you immediately get to work.

It provides the following out of the box:
    
- Bootstrap
- jQuery
- LESS
- Jekyll architecture
- LiveReload
- Gulpfile
- Package.json
- Bower.json
- Gitignore


# Dependencies

- Gulp (`npm install -g gulp`)
- Bower (`npm install -g bower`)
- Jekyll (`gem install jekyll`)

# Instructions

To build the site:

```bash

npm install
bower install
gulp
jekyll build

```

---

To actively develop:

```bash

gulp
# Open a new terminal tab for Jekyll
jekyll serve --watch
google-chrome http://localhost:4000

```

---

To package the site for deployment:

```bash

gulp build

```