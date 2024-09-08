import React from 'react';
// Deixa o código mais limpo e mais fácil de compreender

const Card = ({ data }) => {
    //{titulo, nivel, tempoxp}
    return (
        <>
            {data.map((skill, index) => (
                <div 
                    className="skill-card" 
                    key={index}
                    style={
                        { color: skill.color }
                    }>
                    <h3>Habilidade: {skill.titulo}</h3>
                    <p>Nível: {skill.nivel}</p>
                    <p>Tempo de Experiência: {skill.tempoxp}</p>
                    {/* <p>{index}</p> ÍNDICES*/}
                </div>
            ))}
        </>
    );
};

// Entende que é uma variável
// https://www.w3schools.com/react/react_es6_destructuring.asp

export default Card;