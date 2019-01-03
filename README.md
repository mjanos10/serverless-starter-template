# Serverless starter

A serverless starter template for AWS lambda with webpack, eslint, prettier and so on.

## Scripts

```
# Install dependencies (ci only uses package-lock.json)
$ npm ci

# Run the service locally (via serverless-offline)
$ npm run dev
```

## Functions

An example can be found in `functions/example.js`. It is advised that every function should be added to separate files and should export a function with the name `handler`.

## Environment variables

Environment variables should be added to stage-specific files in the serverless-config directory. This means you should create separate json files with the name of the stages to be used, like (local.json, dev.json etc.).

The properties and values you set there should be added to th serverless.yml file's `provider.environment` section like the one already added there.

### Example

Create a `local.json` file in the `serverless-config` directory and add the following to it:

```json
{
  "example": {
    "envVar": "example env variable from local.json"
  }
}
```

Now start (or restart) the service with `npm run dev` (or `serverless offline --stage local`) and load http://localhost:3000 in your browser. You should see the following output:

```json
{
  "message": "This is an env var: example env variable from dev.json"
}
```

## Using VS Code

The `.vscode` folder contains configurations for the workspace. It also comes with recommended extensions that should be installed for linting and prettyfying.
