import './App.css'
import { Comentario } from './Comentario'

function App() {

  return (
    <main>
      <header>
        <h2>Here is what our alumni say about freeCodeCamp:</h2>
      </header>
      <Comentario
        img="foto1.png"
        nombre="Shawn Wangin"
        pais="Singapore"
        trabajo="Software Engineer"
        empresa="Amazon"
        comenta="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
      ></Comentario>
      <Comentario
        img="foto2.png"
        nombre="Sarah Chima"
        pais="Nigeria"
        trabajo="Software Engineer"
        empresa="ChatDesk"
        comenta="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
      ></Comentario>
      <Comentario
        img="foto3.png"
        nombre="Emma Bostian"
        pais="Sweden"
        trabajo="Software Engineer"
        empresa="Spotify"
        comenta="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
      ></Comentario>
    </main>
  )
}

export default App
