import { parseSentences } from "../sentenceParse.js"
import { readFile } from 'fs/promises'
import { join } from 'path'

// Read the text file
const text = await readFile(join(process.cwd(), '/example-text.txt'), 'utf8')

const sentences = await parseSentences(text, { 
    observeMultipleLineBreaks: true,
    removeStartLineSequences: ['>'],
    preserveListItems: true,
    listItemPrefix: '- ',
    preserveHTMLBreaks: true,
})

for (const [index, sentence] of sentences.entries()) {
    console.log(index + 1, sentence)
}
