// Import CSS
import styles from "./Post.module.css";

const Post = () => {
  return (
    <div className={styles.Post}>
      <div className={styles.postInfo}>
        <p>12:30 10/22/2021</p>
      </div>
      <div className={styles.postContent}>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga.
        </p>
      </div>
    </div>
  );
};

export default Post;
