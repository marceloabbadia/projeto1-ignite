import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/marceloabbadia.png"
          />
          <div className={styles.authorInfo}>
            <strong>Marcelo Abbadia</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time
          title="11 de maio de 2023 às 08:13h"
          dateTime="2023-05-11 08:13:30"
        >
          Publicado a 1 h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa. </p>
        <p>É um projeto que fiz no NLW Return, evento da Rocketseat.</p>
        <p>
          O nome do projeto é DoctorCare 🚀 👉{" "}
          <a href="#"> jane.design/doctorcare</a>{" "}
        </p>
        <p>
          <a href="#"> #novoprojeto #nlw #rocketseat</a>
        </p>
      </div>
    </article>
  );
}
