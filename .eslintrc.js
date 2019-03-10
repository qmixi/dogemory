module.exports = {
  root: true,

  env: {
    node: true,
    jest: true
  },

  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "vue/script-indent": "error"
  },

  parserOptions: {
    parser: "babel-eslint"
  },

  overrides: [
    {
      files: ["*.vue"],
      rules: {
        indent: "off"
      }
    }
  ],

  extends: ["plugin:vue/recommended", "@vue/prettier", "plugin:vue/essential"]
};
