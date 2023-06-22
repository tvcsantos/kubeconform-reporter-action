[kubeconform]: https://github.com/yannh/kubeconform
[test-badge]: https://github.com/tvcsantos/kubeconform-reporter-action/actions/workflows/test.yml/badge.svg

# Kubeconform Reporter Action

![test workflow][test-badge]

## Overview

This action aims to provide support for generating reports for  [`Kubeconform`][kubeconform], a FAST Kubernetes
manifests validator, with support for Custom Resources!

Several output modes are supported depending on the user input and if the action is run on a pull request:
- `pr-comment` - report will be added as a comment on PR.
- `check` - report will be added in a GitHub check.
- `summary` - report will be added as a summary.

## Changelog

All notable changes to this project are documented in [`CHANGELOG.md`](CHANGELOG.md).

## Usage example

```yaml
on:
  push:
    branches:
      - main

jobs:
  build:
    name: Build 
    runs-on: ubuntu-latest
    steps:
      - name: Do Kubeconform report
        uses: tvcsantos/kubeconform-reporter-action@v1
        with:
          file: /path/to/kubeconform/results/file.json
```

### Inputs

| Input           | Type    | Required | Default Value | Description                                                                          |
|-----------------|---------|----------|---------------|--------------------------------------------------------------------------------------|
| `file`          | String  | Yes      | -             | Path to `Kubeconform` `JSON` results file.                                           |
| `show-filename` | Boolean | No       | `true`        | Show references to filenames that have errors in the report.                         |
| `mode`          | Enum    | No       |               | Report output mode. <ul><li>`pr-comment`</li><li>`check`</li><li>`summary`</li></ul> |

### Outputs

No outputs available.

## License

The scripts and documentation in this project are released under the [MIT License](LICENSE.md).

## Contributions

Contributions are welcome! See [Contributor's Guide](CONTRIBUTING.md).
