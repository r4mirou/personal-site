import React from "react"
import { useSelector } from "react-redux"

const AboutContent = () => {
  const theme = useSelector(state => state.theme.theme)

  return (
    <>
      <h2 style={{ marginBottom: "8px" }}>Sobre</h2>
      <div
        style={{
          background: theme.pallete.primary,
          borderRadius: "60px",
          width: "40px",
          height: "5px",
          marginBottom: "25px",
        }}
      ></div>
      <p>
        Com uma base sólida de programação de softwares e conhecimentos em
        análise de sistemas e gerenciamento de projetos. Sou um profissional em
        processo de formação (eterno) que gosta de aprender e ser desafiado.
        Posso dizer que os desafios profissionais movem minha vida. Gosto de
        estar sempre em contato com novas tecnologias, lendo, estudando e
        testando tudo que há de novo. Tenho sonhos, sonhos grandes e todos os
        dias corro por eles.
        <br />
        <br />
        Meu lema: "Não importa oq eu tenha que resolver, eu vou achar um jeito
        de resolver!".
      </p>
    </>
  )
}

export default AboutContent
