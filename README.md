# eslint-config-arun

My eslint config

It uses [airbnb style guide](https://airbnb.io/javascript/).
Inspired from <https://github.com/chaance/eslint-config-chance>

## Installation

```sh
pnpm add eslint-config-arun eslint@^8.2.0 eslint-plugin-import@^2.25.3 --save-dev

# typescript rules
pnpm add @typescript-eslint/parser@^5.0.0 @typescript-eslint/eslint-plugin@^5.13.0 --save-dev

# react rules
pnpm add eslint-plugin-react@^7.28.0 eslint-plugin-react-hooks@^4.3.0 eslint-plugin-jsx-a11y@^6.5.1 --save-dev

# jest rules
pnpm add eslint-plugin-jest@^27.2.1 eslint-plugin-jest-dom@^4.0.3 eslint-plugin-testing-library@^5.10.1 --save-dev
```

## Usage

```json
{
    extends: ['arun', 'arun/typescript', 'arun/react']
}
```
