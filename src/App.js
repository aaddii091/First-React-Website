import logo from "./logo.svg";
import "./App.css";
import { add, min } from "./Calc";
import Cards from "./Cards";
import Show1 from "./img/Orange_29.webp";
import Show2 from "./img/30df93feaa422101659e14d0a2a2f582.jpg";
import Show3 from "./img/998e27e91da1d67f7a8f0863dcc78616.jpg";

function App() {
  return (
    <>
      <section className="series">
        <Cards
          imgsrc={Show1}
          title="Orange"
          genre="Anime/Drama"
          link="https://zoro.to/orange-1229?ref=search"
        />
        <Cards
          imgsrc={Show2}
          title="Demon Slayer"
          genre="Dark Fantasy"
          link="https://zoro.to/demon-slayer-kimetsu-no-yaiba-47?ref=search"
        />
        <Cards
          imgsrc="https://img.zorores.com/_r/300x400/100/99/8e/998e27e91da1d67f7a8f0863dcc78616/998e27e91da1d67f7a8f0863dcc78616.jpg"
          title="Ao Haru Ride"
          genre="Slice of Life"
          link="https://zoro.to/ao-haru-ride-ova-1215?ref=search"
        />
        <Cards
          imgsrc="https://img.zorores.com/_r/300x400/100/1b/41/1b41fd4634ecb470b6de2cfc96710146/1b41fd4634ecb470b6de2cfc96710146.jpg"
          title="Koikimo"
          genre="Slice Of Life"
          link="https://zoro.to/its-too-sick-to-call-this-love-koikimo-15768?ref=search"
        />
        <Cards
          imgsrc="https://img.zorores.com/_r/300x400/100/16/ee/16eec56baf8f3fcc6430607f58ce3d12/16eec56baf8f3fcc6430607f58ce3d12.jpg"
          title="Your Name"
          genre="Romance"
          link="https://zoro.to/your-name-10?ref=search"
        />
        <Cards
          imgsrc="https://img.zorores.com/_r/300x400/100/12/67/126756b57f51180a156a6895b0166643/126756b57f51180a156a6895b0166643.jpg"
          title="Haikyu!!"
          genre="Sports"
          link="https://zoro.to/haikyu-76?ref=search"
        />
      </section>
    </>
  );
}

export default App;
