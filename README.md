# \_blank-ts-express-react-project

This is a blank pattern of TypeScript Express (server) React (app) project to be used as an already setupped and configured project.

## Setup

This project will use `@mhirba/` github registry, which need an [Authentication with a Personnal Access Token.](https://help.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages)

To do this :
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
      //npm.pkg.github.com/:_authToken=YOUR_GENERATED_TOKEN
    ```
  - Run `yarn` in `./client` and `./server` directories

## Client scripts

- `yarn install`
- `yarn build`
- `yarn test`
- `yarn start`

## Server scripts

- `yarn install`
- `yarn lint`
- `yarn test`
- `yarn dev`
- `yarn build`

## Thanks

First, thanks the one who takes the initiative [**Peter**](https://github.com/Seedockh/) 🖖

## Contributors

- [**Majdi**](https://github.com/majdi/)

You ? 💪
