# docs.sikt.no

[![Deploy to GitHub Pages](https://github.com/sikt-no/docs/actions/workflows/deploy.yml/badge.svg?branch=master)](https://github.com/sikt-no/docs/actions/workflows/deploy.yml)

This repository contains the site [docs.sikt.no](https://docs.sikt.no/).

This website is built using [Docusaurus 2](https://docusaurus.io/).

## Editing the site directly from the web browser

Editing the site directly on GitHub is suitable for non-technical personell who wish to edit the site contents as easy as possible. This can be performed through simply visiting the page you wish to edit, and then clicking on the "Edit this page" / pencil symbol link visible in the bottom left of the page.

Another option is to [browse the Sikt Docs file structure directly on GitHub](https://github.com/sikt-no/docs/tree/master/docs), on GitHub you will be able to edit pages, upload images, create new pages and even create new folders which will represent a new Topic/subject if necessary.

Do note that in order for this new Subject/Topic to be visible on the landing page you will have to add it to the index. Some experience with React.js will be beneficial for this task. If you require help feel free to contact Platon. You can add a new SUbject/Topic-component inside of the file located in src>pages>index.js. It should look similar to this:
```xml
  <Topic
    title="mySubject"
    link="docs/mySubject"
    imageUrl="img/mySubjectImageIfAvailable.svg"
  >
    Write a short description about my subject here.
  </Topic>
```

## Editing the site locally

In order to edit this site locally you will have to clone the repository, commit your changes and initiate a pull request. For external contributors you may instead fork the repository and initiate a pull request from that fork.

### Installing a development environment

Docusaurus uses [Node.js](https://nodejs.org/), so you need to install that if you do not have it.

To start a development copy of the site, install the dependencies using `npm ci` and start the web server
 using `npm run start`:

```sh
npm ci
npm run start
```

You can then access a live version of the site at [http://localhost:3000/](http://localhost:3000/).

### Search inside a development environment

The dependency in use for offline searching only supports production builds. Hence you will see the search in the top right corner always displaying "Loading..." when running the development server.

If you wish to test the search function while developing you will need to make a production build first by running `npm run build` then serving it regularly with `npm run serve`:

```sh
npm run build
npm run serve
```

You can then access a live version of the site at [http://localhost:3000/](http://localhost:3000/).

### Deploying changes

The `master`-branch on this project is protected, so all changes need to go via pull requests.

Create a new branch using Git, e.g.:

```sh
git checkout -b my-branch-name
```

You can then commit your changes to that branch:

```sh
git add [my changed files]
git commit -m "insert your change message here"
```

And push the new branch:

```
git push -u origin my-branch-name
```

Once the branch is pushed, you can create a pull request for your new branch at [github.com/sikt-no/docs/compare](https://github.com/sikt-no/docs/compare).

When you have created a new pull request, you should review the state of the pipeline for the pull request as well as verify the review copy of the site.
Once you have verified that the changes are correct, merge the changes into the master branch.

Merging the changes into the master branch will update the production site at [docs.sikt.no](https://docs.sikt.no/).


## Updating dependencies

To prevent accidentally breaking the project due to unintended upgrades of dependencies, all versions used in this project are pinned.

There are three sets of dependencies that can be updated:

* The versions of Node packages.
* The versions of GitHub Actions.
* Docusaurus.

### Updating Node and GitHub Actions dependencies automatically
Dependabot will automatically check for updates to node modules monthly and GitHub Actions weekly. If an update is available, it will proceed to create a new branch, commit the change and submit a pull request to merge the dependency upgrades into master.

### Updating Node packages locally

To update the versions of Node packages, we need to update `package.json` and `package-lock.json`.

Since we use pinned versions for consistency it might be necessary to manually inspect `package.json` and change the versions to the newest version available through npm. After the change you may want to run `npm install` to upgrade package-lock.json to reflect the changes.

You can also automatically update all the packages listed to the latest version with npm:

***Warning: This will modify package.json and package-lock.json***

```sh
npm update
```

Please proceed to inspect that the resulting build(s) work as expected before you decide to merge this upgrade into master.

### Updating Docusaurus

The safest way to update Docusaurus is to create two directories with the old and new version of Docusaurus and then compare those two directories.
This allows you to see what has changed between the versions in addition to the version numbers of the packages.

First install the version in use in `packages.json` in the `old`-directory:

```console
$ mkdir -p /tmp/docusaurus-update/old
$ cd /tmp/docusaurus-update/old
$ npx create-docusaurus@3.7.0 docs-sikt-no classic
[...]
Success! Created docs-sikt-no
Inside that directory, you can run several commands:
[...]
Happy hacking!
```

Then install the latest version in the `new`-directory:

```console
$ mkdir -p /tmp/docusaurus-update/new
$ cd /tmp/docusaurus-update/new
$ npx create-docusaurus@latest docs-sikt-no classic
[...]
Success! Created docs-sikt-no
Inside that directory, you can run several commands:
[...]
Happy hacking!
```

The two versions can then be compared using the `diff` command:

```console
$ cd /tmp/docusaurus-update
$ diff --recursive --unified --new-file --exclude=package-lock.json --exclude=node_modules --color=always old new | less -R
```

This will show all autogenerated files that were changed in this update.
You can then manually apply those changes that are relevant to this repository.
