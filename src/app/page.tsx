import Md2PostClientComponent from "@/components/client/md-to-post-client-component";
import Md2PostServerComponent from "@/components/server/md-to-post-server-component";
import styles from "@/app/page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.component}>
        <h2>
          Static Markdown Post <span style={{ color: "orange" }}>Server</span>{" "}
          Component
        </h2>
        <Md2PostServerComponent />
      </div>
      <div className={styles.component}>
        <h2>
          Static Markdown Post <span style={{ color: "orange" }}>Client</span>{" "}
          Component
        </h2>
        <Md2PostClientComponent />
      </div>
    </div>
  );
}
