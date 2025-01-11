# Changelog

All notable changes to this project will be documented in this file.

## [1.1.0] - 2025-01-11

### ✨ Added
- Added `observeMultipleLineBreaks` option ⇢ default: `false`
    > if enabled, two or more consecutive line breaks are treated as separate sentences
- Added `removeStartLineSequences` option ⇢ default: `[ ]`
    > if enabled, specified sequences at the start of each line are removed
    > e.g. `['>', '--']`

## [1.0.0] - 2024-12-18

### ✨ Added
- Initial release
- Sentence parsing functionality
- Text is normalized
- Extra whitespace is removed
