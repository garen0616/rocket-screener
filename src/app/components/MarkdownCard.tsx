"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
export function MarkdownCard({ title, md }: { title: string; md: string }) {
  return (
    <div className="panel panel--glass space-y-4">
      <h2>{title}</h2>
      <article className="prose prose-invert max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{md || ""}</ReactMarkdown>
      </article>
    </div>
  );
}
