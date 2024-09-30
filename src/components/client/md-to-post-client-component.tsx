"use client";

import { useEffect, useState } from "react";
import { marked } from "marked";

export default function Md2PostClientComponent() {
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMarkdown() {
      try {
        const response = await fetch("/api/markdown");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        const html = await marked.parse(text);
        setHtmlContent(html);
      } catch (err) {
        if (err instanceof Error) setError(err.message);
        else setError("An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    }

    fetchMarkdown();
  }, []);

  if (loading) return <div>Loading...</div>;
  
  if (error) return <div>Error: {error}</div>;

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
