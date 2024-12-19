import { parseSentences } from "../sentenceParse.js"
import { readFile } from 'fs/promises'
import { join } from 'path'

// Read the text file
const text = await readFile(join(process.cwd(), '/example-text.txt'), 'utf8')

const sentences = await parseSentences(text)

console.log(sentences)
