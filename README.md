
<h2 id="project-description">Project Description</h2>
........

<h2 id="motivation">Motivation</h2>
We allready saw an 'hello world' react server and client component <a href='https://www.youtube.com/watch?v=7WhcpereZkQ'>here</a> but can we use server component to fetch data ? and why should we do it in a server component ?

<h2 id="installation">Installation</h2>

```bash
npm i
```


<h2 id="usage">Usage</h2>

```bash
npm run dev
```

<h2>Main page</h2>

```tsx
export default function Home() {
  return (
    <div>
      <h2 style={{color:'lightblue'}}>Static Markdown Post Server Component</h2>
      <Md2PostServerComponent />
      <h2 style={{color:'lightblue'}}>Static Markdown Post Client Component</h2>
      <Md2PostClientComponent />
    </div>
  );
}
```


<h2>React server component</h2>

```tsx
async function Md2PostServerComponent() {
  const filePath = path.resolve(".","data","posts","post1.md");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const htmlContent = marked.parse(fileContents);
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

```

<h2>React client component</h2>

```tsx
"use client";

export default function Md2PostClientComponent() {
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMarkdown() {
      try {
        const response = await fetch("/api/markdown");
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

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

```

<h2>React client component endpoint</h2>

```ts
export async function GET() {
  const filePath = path.resolve('.', 'data', 'posts', 'post1.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return new NextResponse(fileContents, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
```


<h2 id="demo">Demo</h2>
<p>A link to a live demo or a GIF/video showcasing the project's functionality.</p>
<ul>
    <li>Live demo link</li>
    <li>GIF or video demonstration</li>
</ul>

<h2 id="points-of-interest">Points of Interest</h2>
<ul>
    <li>react server component here - SSG (view source)</li>
    <li>react client component here - CSR (view source)</li>
    <li>performance - rsc done on build time , csr done when page load so user wait</li>
    <li>bundle size - here on server component and client component its the same but in case you want to eliminate the endpoint and do marked on the client - you pay with bundle size diue to marked.js invoked on browser </li>
    <li>seo - rsc better because html is ready on build time</li>
    <li>code size - rsc has way less source code lines relative to rcc which require also endpoint</li>
</ul>

<h2 id="references">References</h2>
<ul>
    <li> <a href='https://www.youtube.com/watch?v=7WhcpereZkQ'>Mastering Server vs. Client Components in Next.js!</a></li>
</ul>

