import React from "react"
import { useSelector } from "react-redux"
import style from "./style.module.css"
import bgHeaderUseImages from "./queries/images.graphql"
import BackgroundImage from 'gatsby-background-image'

const Component = (props) => {
    const theme = useSelector(state => state.theme.theme)

    return <div className={style.containerComponent} style={{ background: theme.pallete.background }}>
        <div className={style.header}
            style={{
                backgroundImage: theme.gradientLinear.gradientSecondary,
                color: theme.textColor.secondaryText
            }}
        >
            {props.title}
        </div>
        <div className={style.content}
            style={{
                background: theme.pallete.component
            }}
        >
            <div className={style.description}
                style={{ color: theme.textColor.componentText }}>
                {props.description}
                <div style={{ color: theme.pallete.primary }}>{props.labels}</div>
            </div>
        </div>
    </div>
}

export const components = () => {

    const components = [
        {
            title: "projeto 1",
            description: "descrição p1",
            labels: "",
        },
        {
            title: "projeto 2",
            description: "descrição p2",
            labels: "",
        },
        {
            title: "Agendas Integradas",
            description: "Projeto fantástico realizado na Prefeitura Municipal de Porto Alegre. "
                + "Trata-se da integração das agendas de todos os Secretários e Diretores do "
                + "município. O gerenciamento das agendas é realizado através do software de "
                + " gabiente do prefeito juntamente com uma integração ao Google Calendar "
                + "para facilitar a visualização e compartilhamento das agendas. "
                + "Foi preciso isolar o módulo de Agenda do sistema de maneira que cada "
                + "gestor tivesse acesso/controle sobre seus dados. "
                + "Fui o principal responsável pelo projeto e atuei em todas as etapas do "
                + "desenvolvimento, desde o gerenciamento, passando pela análise e levantamento "
                + "dos requisitos, codificação e testes, implantação, treinamentos e suporte. ",
            labels: "#fullstack #csharp #sqlserver #google #html #css #js #jquery #management "
                + "#analysis #support "
        },
        {
            title: "Projeto Adoção",
            description:
                "Uma iniciativa do Poder Judiciário, em parceria com o Ministério Público "
                + "do Estado e a PUCRS, com o objetivo de promover e facilitar a adoção de "
                + "crianças e adolescentes, principalmente com os perfis menos requisitados "
                + "como: adolescentes, grupos de irmãos e jovens com deficiência.A ideia é "
                + "que a humanização da busca, com fotos, vídeos, cartas e desenhos, possa "
                + "despertar o interesse e a flexibilização do perfil desejado pelos candidatos "
                + "habilitados. \n\n"
                + "Tenho um tremendo orgulho em ter feito parte deste projeto tão especial. "
                + "Colaborei para o projeto fazendo parte da equipe de desenvolvimento.",
            labels: "#nodejs #mongodb #scrum #javaandroid",
        },
        {
            title: "Lean Education",
            description: <div>
                Uma startup da área de educação em fase de desenvolvimento.
                Temos como objetivo promover o compartilhamento do conhecimento
                entre estudantes de todos os níveis, o intuito é tornar
                o conhecimento acessível a todos de uma forma divertida e
                colaborativa. <br/><br/> Neste projeto sou um dos 3 sócios fundadores, e
                atuo em todas as áreas em que forem necessárias.
                </div>

            ,
            labels: <div><br/>#nodejs #graphql #reactnative #postgresql #typescript #mocha #chai #yup"</div>
        },
    ]

    let result = components.map((item, i) =>
        <Component title={item.title} description={item.description} labels={item.labels} />
    )

    return result
}