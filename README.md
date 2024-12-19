# 📄 Sentence Parser
A simple utility to parse text into sentences.

![sentence-parse](https://raw.githubusercontent.com/jparkerweb/sentence-parse/refs/heads/main/docs/sentence-parse.jpg)

## Installation

```bash
npm install sentence-parse
```

## Usage

The parser can be used to split text into sentences. Here's a basic example:

```javascript
import { parseSentences } from "./sentenceParse.js"

// Parse from string
const text = "Hello world! This is a test."
const sentences = await parseSentences(text)
console.log(sentences)
// Output: ["Hello world!", "This is a test."]

// Parse from file
import { readFile } from 'fs/promises'
import { join } from 'path'

const fileText = await readFile(join(process.cwd(), 'text-file.txt'), 'utf8')
const fileSentences = await parseSentences(fileText)
console.log(fileSentences)
```

## Example

Check out `example/example.js` for a working example that parses sentences from a text file.

Run the example:
```bash
cd example
node example
```
