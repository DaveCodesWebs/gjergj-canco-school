import "./News.css";

import plastika from "../assets/images/plastika.webp";
import medalje from "../assets/images/medalje.webp";
import sisal from "../assets/images/sisal.webp";
import p2pzvicer from "../assets/images/p2pzvicer.webp";
import javapraktikes from "../assets/images/javapraktikes.webp";

const blogs = [
  {
    title: "Workshop inspirues nga GreenMakersLab",
    description:
      "Një iniciativë e mbështetur nga Startup Albania dhe MEI ku u fol për ekonominë e gjelbër.",
    category: "Workshop",
    date: "26 Nëntor 2025",
    image: plastika,
    url: "https://www.facebook.com/GjergjiCanco/posts/pfbid022fQ7CXoJ47fxLqKmUMk35qFh1MFSBXsiFo37pg8LV8kyAxfYv4xCckHqWYWAHcdCl",
  },
  {
    title: "Darlin Shahinasi, Kampioni Botëror i Arteve Marciale",
    description:
      "Medalje ari në -67 kg dhe medalje argjendi në -75 kg, duke përfaqësuar me sukses Shqipërinë.",
    category: "Histori Suksesi",
    date: "3 Nëntor 2025",
    image: medalje,
    url: "https://www.facebook.com/GjergjiCanco/posts/pfbid0smAQgXAdeqdGiY1ZzEHC8nveCK63vbT4QLQRQvRr5mKfm62bTeEZ83GBSMhwHEA6l",
  },
  {
    title: "Java e Praktikave Profesionale",
    description:
      'Workshop nga Sisal me temë "Internship Program" për nxënësit e profilit TIK.',
    category: "Karrierë",
    date: "20 Nëntor 2025",
    image: sisal,
    url: "https://www.facebook.com/GjergjiCanco/posts/pfbid02tB5Y3gZ7XtqcteMYDq6yzXK33F8CpipyArBBjpPGUVtpGu4F7AyabCZGWp83pxBxl",
  },
  {
    title: "P2P Learning – Exchange Shqipëri – Zvicër",
    description:
      "Shkëmbim përvojash dhe bashkëpunim ndërkombëtar mes nxënësve.",
    category: "Exchange",
    date: "6 Tetor 2025",
    image: p2pzvicer,
    url: "https://www.facebook.com/GjergjiCanco/posts/pfbid02Z9cwdAMP8Kszj3xSSQQ6KCgNCUjLbRr5C1YQhVgrWGForHzAPLwkuv8AALGG6fZCl",
  },
  // {
  //   title: "Vizitë në shtëpinë e Ismail Kadaresë dhe Dritëro Agollit",
  //   description:
  //     "Një vizitë frymëzuese në shtëpitë e dy kolosëve të letërsisë shqiptare.",
  //   category: "Eskursion",
  //   date: "4 Shkurt 2026",
  //   image: viziteshtepi,
  //   url: "https://www.facebook.com/GjergjiCanco/posts/pfbid0CEQUeUd1cyXijQfiEFpAkKz5MeSR6wrLbJBqsZj4cYxSy2hvPrzBgudkiuJx9YE5l",
  // },
  {
    title: "DITA 4 – Java e Praktikave Profesionale",
    description:
      "Vizitë në Zyrat e Punës për t'u njohur me mundësitë e punësimit dhe karrierës.",
    category: "Praktikë",
    date: "20 Nëntor 2025",
    image: javapraktikes,
    url: "https://www.facebook.com/GjergjiCanco/posts/pfbid0W3yEwm5BYsLeAMVTep8fjind4MyJLWMe6kP4d9AjbaMksMJJPDcd4cUWT5bG8LZ8l",
  },
  // {
  //   title: "TECH Winter School",
  //   description:
  //     "Nxënësit tanë u dalluan në konkursin e organizuar nga Western Balkans University.",
  //   category: "Histori Suksesi",
  //   date: "4 Shkurt 2026",
  //   image: techwinter,
  //   url: "https://www.facebook.com/GjergjiCanco/posts/pfbid0YxNZEGsf6aXh3ycPZGHNFBDtWXNg5Q97r6QCvtBmWRfegD3EtiyGigmdx7UPGVMrl",
  // },
  // {
  //   title: "Bisedë me poetin Azgan Berbati",
  //   description:
  //     "Një takim frymëzues kushtuar letërsisë dhe fuqisë së fjalës së shkruar.",
  //   category: "Workshop",
  //   date: "22 Tetor 2025",
  //   image: azgan,
  //   url: "https://www.facebook.com/GjergjiCanco/posts/pfbid032ubVVf1qK7jzy3HCCRJS4Sniu9hMEpxHXjzmCtUCHM4pi58tBwkEKSzq2LsaCJl",
  // },
];

export default function Njoftimet() {
  const featured = blogs[0];
  const latest = blogs.slice(1, 5);

  return (
    <section className="njoftimet">
      <div className="njoftimet-header">
        <span>Të Rejat</span>
        <h2>Njoftime & Artikuj</h2>
      </div>

      <div className="njoftimet-grid">
        <article
          className="featured-post"
          onClick={() => window.open(featured.url, "_blank")}
        >
          <img src={featured.image} alt={featured.title} />

          <div className="post-content">
            <div className="post-meta">
              <span>{featured.category}</span>
              <p>{featured.date}</p>
            </div>

            <h3>{featured.title}</h3>

            <p>{featured.description}</p>

            <button className="more">Lexo më shumë →</button>
          </div>
        </article>

        <div className="posts-list">
          {latest.map((blog) => (
            <article
              key={blog.title}
              className="small-post"
              onClick={() => window.open(blog.url, "_blank")}
            >
              <img src={blog.image} alt={blog.title} />

              <div className="small-post__content">
                <span>{blog.category}</span>
                <h4>{blog.title}</h4>
                <p>{blog.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
