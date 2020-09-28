import React from "react"
import { useSelector } from "react-redux"
import style from "./style.module.css"

import LightSVG from "../../images/svg/colorLight.svg"
import CordialitySVG from "../../images/svg/colorCordiality.svg"
import PatienceSVG from "../../images/svg/colorClock.svg"
import ComunicationSVG from "../../images/svg/colorMessage.svg"
import FocusSVG from "../../images/svg/colorSearch.svg"
import HappinessSVG from "../../images/svg/colorHeart.svg"
import CriticalSVG from "../../images/svg/colorList.svg"
import FlexSVG from "../../images/svg/colorFlex.svg"
import EthicSVG from "../../images/svg/colorLaw.svg"

export const softCards = () => {
    const cards = [
        {
            title: "Criatividade",
            image: LightSVG,
        },
        {
            title: "Paciência",
            image: PatienceSVG,
        },

        {
            title: "Comunicação",
            image: ComunicationSVG,
        },
        {
            title: "Crítica",
            image: CriticalSVG,
        },
        {
            title: "Cordialidade",
            image: CordialitySVG,
        },
        {
            title: "Foco",
            image: FocusSVG,
        },
        {
            title: "Flexibilidade",
            image: FlexSVG,
        },
        {
            title: "Ética",
            image: EthicSVG,
        },
        {
            title: "Felicidade",
            image: HappinessSVG,
        },
    ]

    let result = cards.map((item, i) =>
        <Card title={item.title} image={item.image} />
    )

    return result
}

const Card = (props) => {

    return <div className={style.card}>
        <div className={style.divCardTitle}>
            <h3 className={style.cardTitle}>{props.title}</h3>
        </div>
        <div className={style.bar}>
            <div className={style.filledbar}></div>
        </div>
        <div className={style.circle}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle className={style.stroke} cx="60" cy="60" r="50" />
            </svg>
            <img src={props.image} className={style.iconSkill} />
        </div>
    </div>
}
