- This setting controls the workspace settings of VSCode-based IDEs.
  - Always check the [latest documentation](https://code.visualstudio.com/docs/editor/settings).
- Add a `.vscode/settings.json` file with the following contents:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "prettier.prettierPath": "./node_modules/prettier",
  "prettier.configPath": "prettier.config.mjs",
  "eslint.useFlatConfig": true,
  "eslint.workingDirectories": ["."],
  "eslint.format.enable": true,
  "eslint.options": {
    "overrideConfigFile": "eslint.config.mjs"
  }
}
```

- Add a `.vscode/recommendations.json` file with the following contents:

```json
{
  "recommendations": [
    "ritwickdey.LiveServer",
    "ms-vscode.live-server",
    "formulahendry.auto-rename-tag",
    "anteprimorac.html-end-tag-labels",
    "oderwat.indent-rainbow",
    "adpyke.codesnap",
    "kisstkondoros.vscode-gutter-preview",
    "aaron-bond.better-comments",
    "pomdtr.excalidraw-editor",
    "usernamehw.errorlens",
    "naumovs.color-highlight",
    "deque-systems.vscode-axe-linter",
    "solnurkarim.html-to-css-autocompletion",
    "pucelle.vscode-css-navigation",
    "csstools.postcss",
    "xabikos.JavaScriptSnippets",
    "yongzeyao.dom-code-snippets",
    "wix.vscode-import-cost",
    "rangav.vscode-thunder-client",
    "MariusAlchimavicius.json-to-ts",
    "mhutchie.git-graph",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "formulahendry.code-runner",
    "zjffun.snippetsmanager"
  ]
}
```
