import React from 'react';

function About() {
  return (
    <div className="min-h-screen text-gray-800 flex flex-col items-center justify-center p-8 bg-gray-100">
      <div className="max-w-3xl text-center">
        <h2 className="text-4xl font-bold mb-4 text-blue-600">About Word Counter Tool</h2>
        <p className="text-lg mb-6 leading-relaxed">
          This tool is designed to help writers, students, and anyone working with text analyze their content by providing detailed statistics on their writing.
          Understanding the metrics of your text can help you improve readability, structure, and clarity, making it suitable for any platform.
        </p>

        <div className="text-left">
          <h3 className="text-2xl font-semibold mt-8 mb-3 text-blue-500">Features:</h3>
          
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Word Count:</strong> Quickly see the total number of words to ensure you’re within your target or guideline.
            </li>
            <li>
              <strong>Character Count:</strong> Both with and without spaces, which can be useful for social media, text messaging, and SEO optimization.
            </li>
            <li>
              <strong>Sentence Count:</strong> Analyze sentence structure and variety by knowing the exact number of sentences.
            </li>
            <li>
              <strong>Paragraph Count:</strong> Make sure your content is well-organized and evenly distributed for easy readability.
            </li>
            <li>
              <strong>Estimated Reading Time:</strong> An approximate reading time based on word count, useful for readers and writers aiming to deliver concise content.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-3 text-blue-500">Why Use a Word Counter?</h3>
          <p className="mb-4">
            A word counter is more than just a tool to tally words. It helps writers understand the density and structure of their content,
            aiding in clarity and precision. Whether you’re drafting a blog, writing an essay, or creating a social media post, having a detailed analysis of your text ensures it’s engaging, clear, and appropriate for your audience.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-3 text-blue-500">Additional Insights:</h3>
          <p>
            Beyond basic counts, our tool provides insights into:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>Average words per sentence and paragraph</li>
            <li>Reading level estimation</li>
            <li>Keyword density for SEO purposes</li>
          </ul>
        </div>

        <p className="text-sm text-gray-500 italic mt-4">
          `"The art of writing is the art of discovering what you believe."` - Gustave Flaubert
        </p>
      </div>
    </div>
  );
}

export default About;
