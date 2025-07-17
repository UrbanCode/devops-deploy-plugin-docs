# Documentation site for IBM DevOps Deploy Plugins

To build the project locally, `Node.js` is required.

## Steps to build

* Clone the repository locally using `git clone` command

```shell
  git clone <repo-url>
```

* Change directory to `devops-deploy-plugin-docs`

```shell
  cd devops-deploy-plugin-docs
```

* Install and resolve dependencies for the project using below `npm` command

```shell
   npm ci
```

* To host the project locally, run in developer mode

```shell
   npm run docs:dev
```

* To build the project run below build command

```shell
   npm run docs:build
```

* To host the project locally, run below serve command

```shell
   npm run docs:serve
```
