import { splitBySentence } from "string-segmenter"
import * as cheerio from 'cheerio';


// --------------------
// -- Normalize Text --
// --------------------
function normalizeText(text, { observeMultipleLineBreaks = false, removeStartLineSequences = [] } = {}) {
    // Remove specified characters from start of each line
    for (const sequence of removeStartLineSequences) {
        text = text.split('\n')
            .map(line => line.startsWith(sequence) ? line.slice(sequence.length) : line)
            .join('\n');
    }

    if (observeMultipleLineBreaks) {
        // replace a single line (not following a line break) with a space
        text = text.replace(/\n(?!\n)/g, " ").trim();
        //replace two or more line breaks with a single line break
        text = text.replace(/\n\n+/g, "\n").trim();
        // replace multiple white space characters on the same line with a single space
        text = text.replace(/[ \t]+/g, " ");
    } else {
        // replace all whitespace with a single space
        text = text.replace(/\s+/g, " ").trim();
    }
    return text
}

// ------------------
// -- HTML to Text --
// ------------------
function htmlToText(html) {
    return cheerio.load(html).text()
}


// ---------------------
// -- Parse Sentences --
// ---------------------
export async function parseSentences(text, { 
    observeMultipleLineBreaks = false,
    removeStartLineSequences = []
} = {}) {
    text = htmlToText(text)
    console.log(`\n--------\n\n text before normalize: \n${text}\n--------\n`)
    text = normalizeText(text, { observeMultipleLineBreaks, removeStartLineSequences })
    console.log(`\n--------\n\n text after normalize: \n${text}\n--------\n`)
    const sentences = []

    for (const { segment } of splitBySentence(text)) {
        sentences.push(segment.trim())
    }

    return sentences
}
