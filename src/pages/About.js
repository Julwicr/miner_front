import { Link } from "react-router-dom"

export function About() {
  return (
    <div className="about">
      <div className="about-container">
        <h3>Who we are</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio maxime impedit iure, doloremque a quam distinctio esse sed excepturi architecto pariatur debitis est sapiente. Facere optio ipsum dicta sint totam tempora voluptate nisi magni velit expedita inventore, temporibus quo voluptatem accusamus cumque? Labore accusamus, amet magni ipsum animi excepturi inventore non quos fugiat harum explicabo distinctio expedita deserunt porro ut nisi nemo odio! Sunt eos magni modi corporis ut voluptate, doloribus alias, inventore ipsa assumenda praesentium quod fugiat deserunt molestiae veniam vero nihil quibusdam voluptates dolores necessitatibus excepturi quo. Perspiciatis deleniti hic rerum eos a, earum aliquam ex eius illum expedita perferendis quas laudantium quos doloremque error quis, voluptatum, vitae in quo voluptates. Suscipit impedit assumenda quasi autem repellendus! Explicabo odio fuga autem nulla voluptate consequatur aperiam, eveniet necessitatibus! Quibusdam vitae omnis non sequi blanditiis voluptatem quaerat sunt autem tempore expedita, natus rerum voluptatum esse cupiditate! Minima placeat rerum sint!</p>
        <h3>Our values</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum blanditiis, officiis accusamus iste debitis quibusdam natus autem consequatur veniam placeat et facere molestiae, quae iure excepturi recusandae quod eius. Facilis delectus sed, recusandae cumque sit sunt. Iure ut, molestiae necessitatibus quasi dolor et itaque non eos illo iste amet doloremque enim impedit doloribus voluptate id, quo in? Dolores nemo magni, earum id illo placeat quod reiciendis aut blanditiis odit beatae ipsum, nostrum velit asperiores atque facilis enim deleniti labore odio accusantium! Aliquam, possimus! A doloribus voluptas esse laudantium nobis, necessitatibus nemo doloremque repellat. Quisquam, pariatur architecto eveniet explicabo repellat nam!</p>
      </div>

      <Link to="/" className="back-btn about-btn">Back</Link>
    </div>
  );
}
