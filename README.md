# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


#### Deployment from devcontainer
* Run `yarn deploy`. 
* If commit signing leads to some problems, try to run `git config --global gpg.program "$(which gpg2)"` in the devcontainer
* If there seem to be problems with ssh key permissions, try to run `ssh-add ~/.ssh/id_rsa` (or whatever key you prefer) on your LOCAL host machine (NOT IN DEVCONTAINER!)

#### Deployment via Github Action
* Just push to the `source` branch (if you have the permission to do so 🙃) and then this version will be deployed to `main`, by magic (i.e. by a github action).