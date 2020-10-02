import React from "react"
import { useSelector } from "react-redux"
import style from "./style.module.css"

const Component = (props) => {
    const theme = useSelector(state => state.theme.theme)

    return <div className={style.containerComponent} style={{ background: theme.pallete.background }}>
        <div className={style.header}
            style={{
                backgroundImage: theme.gradientLinear.gradientSecondary,
                color: theme.textColor.secondaryText
            }}>
            {props.title}
        </div>
        <div className={style.content} style={{ background: theme.pallete.component }}>
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
            title: <div>
                <p>
                    <span className={style.emoji}><i class="em em-pager" aria-role="presentation" aria-label="PAGER" />&nbsp;&nbsp;</span>
                    Totens Dimed/Panvel
                </p>
            </div>,
            description: <div>
                <p>
                    <span className={style.emoji}><i class="em em-v" aria-role="presentation" aria-label="VICTORY HAND" /></span>
                    <span className={style.emoji}><i class="em em-sunglasses" aria-role="presentation" aria-label="SMILING FACE WITH SUNGLASSES" />&nbsp;&nbsp;</span>
                    Este projeto tem um gostinho especial para mim, pois foi
                    o primeiro projeto "grande" que tive a oportunidade de participar.
                    Tratava-se da implantação de totens em diversas fármacias Panvel
                    de Porto Alegre, os totens tinham o objetivo de
                    disponibilizar aos usuários uma consulta ao programa de pontos
                    da rede de fármacias.
                </p>
                <div>
                    <i class="em em-pill" aria-role="presentation" aria-label="PILL"></i>
                    <i class="em em-pill" aria-role="presentation" aria-label="PILL"></i>
                    <i class="em em-pill" aria-role="presentation" aria-label="PILL"></i>
                    <i class="em em-pill" aria-role="presentation" aria-label="PILL"></i>
                    <i class="em em-pill" aria-role="presentation" aria-label="PILL"></i>
                </div>
                <p>
                    Participei desse projeto como estagiário e ajudei no desenvolvimento
                    do software que rodava nos totens e da implatanção dos mesmos nas
                    fármacias participantes.
                </p>
            </div>,
            labels: <div>
                <br />
                <p>#kylix #delphi #totens</p>
            </div>,
        },
        {
            title: <div>
                <p>
                    <span className={style.emoji}><i class="em em-hash" aria-role="presentation" aria-label="HASH KEY" />&nbsp;&nbsp;</span>
                    Blog Ramiro4Dev
                </p>
            </div>,
            description: <div>
                <p>
                    Projeto em fase de desenvolvimento!<br />
                    A ideia é criar um canal para ajudar a comunidade e compartilhar
                    conteúdo técnico e reflexões sobre novas tecnologias.<br />
                    Sempre encontro muitas dificuldades ao buscar exemplos práticos
                    sobre casos de uso de algumas tecnologias no mundo real, em
                    projetos reias... Pretendo trazer isso para o blog e compartilhar
                    conteúdos que vão além do "hello world".
                    <span className={style.emoji}>&nbsp;<i class="em em-i_love_you_hand_sign" aria-role="presentation" aria-label="I LOVE YOU HAND SIGN" /></span>
                </p>
            </div>,
            labels: <div>
                <br />
                <p>#gatsby #netlify #css</p>
            </div>,
        },
        {
            title: <div>
                <p>
                    <span className={style.emoji}><i class="em em-date" aria-role="presentation" aria-label="CALENDAR" />&nbsp;&nbsp;</span>
                    Agendas Integradas
                </p>
            </div>,
            description: <div>
                <p>
                    Projeto fantástico realizado dentro da Prefeitura Municipal de Porto Alegre.
                    Trata-se da integração das agendas de todos os secretários e diretores do
                    município.
                    <br /><br />
                    Fui o principal responsável pelo projeto e atuei em todas as etapas do
                    desenvolvimento, gerenciamento, análise e levantamento
                    dos requisitos, codificação e testes, implantação, treinamentos e suporte.
                    <span className={style.emoji}>&nbsp;<i fot-size=".8rem" class="em em-exploding_head" aria-role="presentation" aria-label="SHOCKED FACE WITH EXPLODING HEAD" /></span>
                </p>
            </div>,
            labels: <div>
                <br />  
                <p> 
                    #fullstack #csharp #sqlserver #googleapi #html #css #js #jquery #management
                    #analysis #support
                </p>
            </div>
        },
        {
            title: <div>
                <p>
                    <span className={style.emoji}><i class="em em-family" aria-role="presentation" aria-label="FAMILY" /> &nbsp;&nbsp;</span>
                    Projeto Adoção
                </p>
            </div>,
            description:            
                <div>
                    <p>
                        <span className={style.emoji}><i class="em em-heart_eyes" aria-role="presentation" aria-label="SMILING FACE WITH HEART-SHAPED EYES" />&nbsp;&nbsp;</span>
                        Linda iniciativa do Poder Judiciário, em parceria com o Ministério Público
                        do Estado e a PUC/RS. Com o objetivo de estimular e facilitar o processo de
                        adoção de crianças e adolescentes, o App busca humanizar e tornar mais atraente
                        principalmente os perfis menos requisitados nos processos de adoção, como: adolescentes,
                        grupos de irmãos, jovens com deficiência, entre outros.
                    </p>
                <div>
                    <i class="em em-heartpulse" aria-role="presentation" aria-label="GROWING HEART" />
                    <i class="em em-heartpulse" aria-role="presentation" aria-label="GROWING HEART" />
                    <i class="em em-heartpulse" aria-role="presentation" aria-label="GROWING HEART" />
                    <i class="em em-heartpulse" aria-role="presentation" aria-label="GROWING HEART" />
                    <i class="em em-heartpulse" aria-role="presentation" aria-label="GROWING HEART" />
                </div>
                    <p>
                        Tenho o maior orgulho de ter feito parte deste projeto tão especial.
                        Colaborei para o projeto fazendo parte da equipe de desenvolvimento.
                    </p>
            </div>,
            labels: <div>
                <br />
                <p>#nodejs #mongodb #scrum #mvc #javaandroid </p>
            </div>,
        },
        {
            title: <div>
                <p>
                    <span className={style.emoji}><i class="em em-books" aria-role="presentation" aria-label="BOOKS" />&nbsp;&nbsp;</span>
                    Lean Education
                </p>
            </div>,
            description: <div>
                <p>
                    Uma startup da área da educação em fase de desenvolvimento.
                    Que tem como objetivo promover o compartilhamento do conhecimento
                    entre estudantes de todos os níveis, o intuito é tornar
                    o conhecimento acessível a todos de uma forma divertida e
                    colaborativa.
                </p>
                <div>
                    <i class="em em-bulb" aria-role="presentation" aria-label="ELECTRIC LIGHT BULB" />
                    <i class="em em-bulb" aria-role="presentation" aria-label="ELECTRIC LIGHT BULB" />
                    <i class="em em-bulb" aria-role="presentation" aria-label="ELECTRIC LIGHT BULB" />
                    <i class="em em-bulb" aria-role="presentation" aria-label="ELECTRIC LIGHT BULB" />
                    <i class="em em-bulb" aria-role="presentation" aria-label="ELECTRIC LIGHT BULB" />
                </div>

                <p>
                    Neste projeto sou um dos 3 sócios fundadores, e
                    atuo em todas as áreas em que forem necessárias.
                </p>
            </div>
            ,
            labels: <div>
                <br />
                <p>
                    #nodejs #graphql #reactnative #postgresql #typescript #mocha #chai #yup
                </p>
            </div>
        },
    ]

    let result = components.map((item) =>
        <Component title={item.title} description={item.description} labels={item.labels} />
    )

    return result
}