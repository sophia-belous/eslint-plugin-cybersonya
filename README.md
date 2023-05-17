# eslint-plugin-deprecated-attributes

 ESLint plugin for deprecating the use of `id` attribute in AngularJS HTML files.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-deprecated-attributes`:

```sh
npm install eslint-plugin-deprecated-attributes --save-dev
```

## Usage

Add `deprecated-attributes` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "deprecated-attributes"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "deprecated-attributes/deprecated-id": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->

| Name                                         | Description                                                |
| :------------------------------------------- | :--------------------------------------------------------- |
| [deprecated-id](docs/rules/deprecated-id.md) | Disallow the use of `id` attribute in AngularJS HTML files |

<!-- end auto-generated rules list -->


