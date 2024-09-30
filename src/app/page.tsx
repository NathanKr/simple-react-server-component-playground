import Md2PostClientComponent from "@/components/client/md-to-post-client-component";
import Md2PostServerComponent from "@/components/server/md-to-post-server-component";

export default function Home() {
  return (
    <div>
      <h2 style={{color:'blue'}}>Static Markdown Post Server Component</h2>
      <Md2PostServerComponent />
      <h2 style={{color:'blue'}}>Static Markdown Post Client Component</h2>
      <Md2PostClientComponent />
    </div>
  );
}
