# \_blank-ts-express-react-project

This is a blank pattern of TypeScript Express (server) React (app) project to be used as an already setupped and configured project.

## Setup

This project will use `@mhirba/` github registry, which need an [Authentication with a Personnal Access Token.](https://help.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages)

### Requirements
- `nodeJS: ^13.11.*`
- `yarn: ^1.22.*`

### Token :
  - Go to your **Github** Settings and create a **Token** :
    ```
    Github >
      Settings >
        Developer settings >
          Personnal access tokens >
            Generate new token >
              Select scopes >
                Check "read:packages"
    ```
  - Create `~/.npmrc` file, that must contain :
    ```
      always-auth=true
      @mhirba:registry=https://npm.pkg.github.com
      //npm.pkg.github.com/:_authToken=YOUR_GENERATED_TOKEN
    ```
  - Run `yarn` in `./client` and `./server` directories
  
## Create a Pull Request

[Follow those simple steps to create your own branch and being able to contribute to this repo.](http://kbroman.org/github_tutorial/pages/fork.html)

## Client scripts

- `yarn build`
- `yarn test`
- `yarn start`

## Server scripts

- `yarn lint`
- `yarn test`
- `yarn dev`
- `yarn build`

## Thanks

First, thanks the one who takes the initiative [**Peter**](https://github.com/Seedockh/) 🖖

## Contributors

- [**Majdi**](https://github.com/majdi/)
- You ? 💪
