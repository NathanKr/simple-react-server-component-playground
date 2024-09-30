import fs from "fs";
import path from "path";
import {marked} from "marked";

export default async function Md2PostServerComponent() {
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
