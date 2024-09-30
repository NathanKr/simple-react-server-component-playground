"use client";

import { useEffect, useState } from "react";
import { marked } from "marked";

export default function Md2PostClientComponent() {
  const [htmlContent, setHtmlContent] = useState<string>("");

  useEffect(() => {
    async function fetchMarkdown() {
      const response = await fetch('/api/markdown');
      const text = await response.text();
      const html = await marked.parse(text);
      setHtmlContent(html);
    }

    fetchMarkdown();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
