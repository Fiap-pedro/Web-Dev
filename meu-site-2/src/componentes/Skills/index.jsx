import Card from "../Card";



function Skills({ skills }) {

  const habilidades = [
    {
      titulo: "Node.Js",
      nivel: "Noob",
      tempoxp: "1 dia",
      color: "blue"
      // imagemFundo: "./vite.svg"
      // caminho imagem
      // cor
      // tabela
    },
    {
      titulo: "Props",
      nivel: "Senior",
      tempoxp: "30 minutos",
      color: "red"
    },
    {
      titulo: "Java",
      nivel: "Jesus",
      tempoxp: "2024 anos",
      color: "green"
    },
    {
      titulo: "Python",
      nivel: "Avançado",
      tempoxp: "1 ano",
      color: "purple"
    }
  ]

  return (
    <div className="skills">
      <h2>Habilidades</h2>
      <Card data={habilidades}/>

      {/* PROPS DE CARD */}
      {/* https://www.w3schools.com/react/react_es6_destructuring.asp */}
      {/* Quebrar a variável em vários elementos */}
      

      {/*<Card
        titulo="Python"
        nivel="Avançando"
        tempoxp="5 anos"/>

      <Card
        titulo="CSS"
        nivel="Intermediário"
        tempoxp="3 anos"/>
      
       <div class="skill-card">
        <h3>HTML</h3>
        <p>Nível: Avançado</p>
      </div>
      <div class="skill-card">
        <h3>CSS</h3>
        <p>Nível: Intermediário</p>
      </div>
      <div class="skill-card">
        <h3>JavaScript</h3>
        <p>Nível: Básico</p>
      </div> */}
    </div>
  );
}

export default Skills;