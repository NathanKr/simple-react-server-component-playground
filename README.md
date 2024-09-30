
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



<h2>React server component</h2>

```ts
async function Md2PostServerComponent() {
  const filePath = path.resolve(
    ".",
    "data",
    "posts",
    "post1.md"
  );
  const fileContents = fs.readFileSync(filePath, "utf8");
  
  const htmlContent = marked.parse(fileContents);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

```

<h2>React client component</h2>



<h2 id="demo">Demo</h2>
<p>A link to a live demo or a GIF/video showcasing the project's functionality.</p>
<ul>
    <li>Live demo link</li>
    <li>GIF or video demonstration</li>
</ul>

<h2 id="points-of-interest">Points of Interest</h2>
<ul>
    <li>SSG</li>
</ul>

<h2 id="references">References</h2>
<ul>
    <li> <a href='https://www.youtube.com/watch?v=7WhcpereZkQ'>Mastering Server vs. Client Components in Next.js!</a></li>
</ul>

