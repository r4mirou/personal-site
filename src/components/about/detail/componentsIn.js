import React from "react"
import style from "./style.module.css"
import LogoPucrs from "../../../images/svg/logoPucrs"
import Lamp from "../../../images/svg/lamp"
import Book from "../../../images/svg/book"
import Note from "../../../images/svg/note"
import World from "../../../images/svg/world"
import Rocket from "../../../images/svg/rocket"

const components = [
  <div className={style.containerComponent}>
    <LogoPucrs width="80" fill={"rgba(95,2,169,1)"} />
    <div style={{ color: "rgba(207,247,46,1)" }} className={style.description}>
      Engenharia de Software <br />
      6º semestre
    </div>
  </div>,

  <div className={style.containerComponent}>
    <Lamp width="80" fill={"rgba(95,2,169,1)"} />
    <div style={{ color: "rgba(207,247,46,1)" }} className={style.description}>
      Participante de <br /> hackatons
    </div>
  </div>,

  <div className={style.containerComponent}>
    <Book width="80" fill={"rgba(95,2,169,1)"} />
    <div style={{ color: "rgba(207,247,46,1)" }} className={style.description}>
      Leitor assíduo <br />
      de documentações
    </div>
  </div>,

  <div className={style.containerComponent}>
    <Rocket width="80" fill={"rgba(95,2,169,1)"} />
    <div style={{ color: "rgba(207,247,46,1)" }} className={style.description}>
      Interessado em <br /> empreender
    </div>
  </div>,

  <div className={style.containerComponent}>
    <World width="80" fill={"rgba(95,2,169,1)"} />
    <div style={{ color: "rgba(207,247,46,1)" }} className={style.description}>
      Inglês técnico <br />
      <br />
    </div>
  </div>,

  <div className={style.containerComponent}>
    <Note width="80" fill={"rgba(95,2,169,1)"} />
    <div style={{ color: "rgba(207,247,46,1)" }} className={style.description}>
      Amante da <br /> programação
    </div>
  </div>,
]

export default components
