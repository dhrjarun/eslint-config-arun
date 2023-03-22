# eslint-config-arun

My eslint config

Forked from <https://github.com/chaance/eslint-config-chance>

This is not opinionated about styling, formatting and only cares about writing error-free code

## Installation

```sh
pnpm add eslint-config-arun eslint@^8.2.0 eslint-plugin-import@^2.25.3 --save-dev

# typescript rules
pnpm add @typescript-eslint/parser@^5.0.0 @typescript-eslint/eslint-plugin@^5.13.0 --save-dev

# react rules
pnpm add eslint-plugin-react@^7.28.0 eslint-plugin-react-hooks@^4.3.0 eslint-plugin-jsx-a11y@^6.5.1 --save-dev
```

## Usage

```json
{
  "extends": ["arun", "arun/typescript", "arun/react"]
}
```
