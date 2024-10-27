"use client"

import { useState, useMemo } from "react";

export default function Home() {
  const [text, setText] = useState("");

  // function to count words 
  const countWords = (inputText) => {
    return inputText.trim() ? inputText.trim().split(/\s+/).length : 0;
  };

  // function to count sentences
  const countSentences = (inputText) => {
    return inputText.split(/[.!?]+/).filter(Boolean).length;
  }

  // function to count paragraphs
  const countParagraphs = (inputText) => inputText.split(/\n+/).filter(Boolean).length;

  // Memoized calculations
  const wordCount = useMemo(() => countWords(text), [text]);
  const sentenceCount = useMemo(() => countSentences(text), [text]);
  const paragraphCount = useMemo(() => countParagraphs(text), [text]);
  const readingTime = useMemo(() => Math.ceil(wordCount / 200), [wordCount]);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
        <div className="container w-full max-w-2xl mx-auto p-6 bg-gray-800 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-center mb-6">Word Counter Tool</h1>

          {/* Text Area */}
          <textarea
            className="w-full h-40 p-4 text-lg bg-gray-700 text-white rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type or paste your text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>

          {/* Clear Button */}
          <button
            onClick={() => setText('')}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Clear Text
          </button>

          {/* Stats Section */}
          <div className="flex flex-wrap justify-around items-center mt-6 gap-4 text-center">
            <div className="w-full sm:w-auto">
              <h2 className="text-xl font-semibold">Words</h2>
              <p className="text-2xl font-bold">{wordCount}</p>
            </div>
            <div className="w-full sm:w-auto">
              <h2 className="text-xl font-semibold">Characters</h2>
              <p className="text-2xl font-bold">{text.length}</p>
            </div>
            <div className="w-full sm:w-auto">
              <h2 className="text-xl font-semibold">Reading Time</h2>
              <p className="text-2xl font-bold">{readingTime} min</p>
            </div>
            <div className="w-full sm:w-auto">
              <h2 className="text-xl font-semibold">Paragraphs</h2>
              <p className="text-2xl font-bold">{paragraphCount}</p>
            </div>
            <div className="w-full sm:w-auto">
              <h2 className="text-xl font-semibold">Sentences</h2>
              <p className="text-2xl font-bold">{sentenceCount}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
