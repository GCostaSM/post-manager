module.exports = {
  "presets": [["env", { "modules": false }]],
  "env": {
    "test": {
      "presets": [["env", { "targets": { "node": "current" } }]]
    },
    "plugins": ["import-graphql"]
  }
}

