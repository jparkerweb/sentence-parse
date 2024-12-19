import { splitBySentence } from "string-segmenter"
import * as cheerio from 'cheerio';


// --------------------------
// -- Normalize Whitespace --
// --------------------------
function normalizeWhitespace(text) {
	return text.replace(/\s+/g, " ").trim();
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
export async function parseSentences(text) {
    text = htmlToText(text)
    text = normalizeWhitespace(text)
	const sentences = []

	for (const { segment } of splitBySentence(text)) {
		sentences.push(segment.trim())
	}

	return sentences
}
