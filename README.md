# docs.uninett.no

This repository contains the site [docs.uninett.no](https://docs.uninett.no/).


## Editing the site

This website is built using [Docusaurus 2](https://docusaurus.io/).


### Installing a development environemt

Docusaurus uses [Node.js](https://nodejs.org/), so you need to install that if you do not have it.

To start a development copy of the site, install the dependencies using `npm ci` and start the web server using `npm run start`:

```sh
npm ci
npm run start
```

You can then access a live version of the site at [http://localhost:3000/](http://localhost:3000/).


### Deploying changes

The `master`-branch on this project is protected, so all changes need to go via merge requests.

Create a new branch using Git, e.g.:

```sh
git checkout -b my-branch-name
```

You can then commit your changes to that branch:

```sh
git add [my changed files]
git commit
```

And push the new branch:

```
git push -u origin my-branch-name
```

Once the branch is pushed, you can create a merge request for your new branch at [scm.uninett.no/platon/interndocs-uninett-no](https://scm.uninett.no/platon/interndocs-uninett-no/-/merge_requests).

When you have created a new merge request, you should review the state of the pipeline for the merge request as well as verify the review copy of the site.
Once you have verified that the changes are correct, merge the changes into the master branch.

Merging the changes into the master branch will update the production site at [interndocs.uninett.no](https://interndocs.uninett.no/).


## Updating dependencies

To prevent accidentally breaking the project due to unintended upgrades of dependencies, all versions used in this project are pinned.

There are three sets of dependencies that can be updated:

* The versions of Node packages.
* The Docker images.
* Docusaurus.


### Updating Node packages

To update the versions of Node packages, we need to update `package.json` and `package-lock.json`.
These should be updated using the same version of Node that is used to build the Docker image.
The simplest way is to use Docker to run that specific version.

Check the version of Node used in `Dockerfile`:

```
FROM node:14.16.0-buster-slim as site-builder
```

Then run the same version using Docker:

```sh
docker run --rm -ti \
  --volume "$(pwd -P)/:/app/" \
  --tmpfs '/app/node_modules/' \
  node:14.16.0-buster-slim \
  npm --prefix /app update
```

This launches a docker container using the specific version of Node.
We bind-mount the application data into it, to allow `npm` to update `package.json` and `package-lock.json`.

To prevent `npm` from overwriting your `node_modules`-directory with files with incorrect permissions, we add a tmpfs mount for that directory.
This ensures that the Docker container is working with a temporary copy of that directory.

After `npm update` has updated `package.json` and `package-lock.json`, you can install the updated packages locally using `npm ci`:

```sh
npm ci
```


### Updating the Docker images

There are two Docker images in use. One is used to build the static site and the other is used to host the static site.

These images are identifies by the two `FROM`-lines in `Dockerfile`:

```
FROM node:14.16.0-buster-slim as site-builder
FROM nginx:1.19.8-alpine
```

To update these images, check what the latest version of the image is on DockerHub:

* [`node`](https://hub.docker.com/_/node)
* [`nginx`](https://hub.docker.com/_/nginx)

For `node`, you want the latest image that is also tagged with `lts-buster-slim`.
Look at the list of supported tags and find the line containing `lts-buster-slim`, and use the most specific version of that tag.
The line should look like:

* `14.16.0-buster-slim`, `14.16-buster-slim`, `14-buster-slim`, `fermium-buster-slim`, `lts-buster-slim`

Here you want to use the `14.16.0-buster-slim`-tag.

For `nginx` you want the latest image that is also tagged with `mainline-apline`.
The line should look like.

* `1.19.8-alpine`, `mainline-alpine`, `1-alpine`, `1.19-alpine`, `alpine`

Here you should use the `1.19.8-alpine` tag, since that is the most specific version.

For consistency, you should also update the version numbers in `README.md`.

Once the Docker images are updated, you may also want to [update the Node packages](#updating-node-packages), to ensure that they are in sync.


### Updating Docusaurus

Docusaurus 2 is still in beta, which means that they sometimes perform breaking changes.
Some extra care should therefore be taken when updating Docusaurus.

The safest way to update Docusaurus is to create two directories with the old and new version of Docusaurus and then compare those two directories.
This allows you to see what has changed between the versions in addition to the version numbers of the packages.

First install the version in use in `packages.json` in the `old`-directory:

```console
$ mkdir -p /tmp/docusaurus-update/old
$ cd /tmp/docusaurus-update/old
$ npx create-docusaurus@2.0.0-beta.14 platon-uninett-no classic
[...]
Success! Created platon-uninett-no
Inside that directory, you can run several commands:
[...]
Happy hacking!
```

Then install the latest version in the `new`-directory:

```console
$ mkdir -p /tmp/docusaurus-update/new
$ cd /tmp/docusaurus-update/new
$ npx create-docusaurus@latest platon-uninett-no classic
[...]
Success! Created platon-uninett-no
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
