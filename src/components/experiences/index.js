import React from "react"
import { useSelector } from "react-redux"
import style from "./style.module.css"
import clsx from "clsx"
import CircleDotSVG from "../../images/svg/circleDot.svg"

const Experiences = () => {
  const theme = useSelector(state => state.theme.theme)
  const [indexControlDescription, setIndexControlDescription] = React.useState(0)

  const handleDescription = status => {
    if(status !== indexControlDescription)
      setIndexControlDescription(status)
  }

  return <div>
    <ul className={style.list}>
      <li>
        <div className={style.container}>
          <div className={clsx(style.lineContainer)}>
            <div className={style.line} >
              <div className={style.pointer} >
                <img src={CircleDotSVG} className={style.pointerSvg} draggable={false} />
              </div>
            </div>
          </div>
          <div className={style.containerIntern}>
            <div className={clsx(style.containerTitle)}>
              <div className={clsx(style.title)} style={{ color: theme.textColor.primaryText, background: theme.gradientLinear.gradientPrimary }} 
              onMouseEnter={() => handleDescription(1)}
              onClick={() => handleDescription(indexControlDescription !== 1 ? 1 : 0 )}
              >
                Prefeitura Municipal de Porto Alegre
              </div>
            </div>
            <div className={clsx(style.lineContainerIntern)}>
              <div className={style.line} >
                <div className={style.pointer} >
                  <img src={CircleDotSVG} className={style.pointerSvg} draggable={false} />
                </div>
              </div>
            </div>
            <div className={clsx(style.description,
              { [style.notHoverDescription]: indexControlDescription !== 1 },
              { [style.hoverDescription]: indexControlDescription === 1}
            )}>
              <div className={clsx(style.ballonMessage)} style={{ color: theme.textColor.secondaryText, background: theme.gradientLinear.gradientSecondary }}>
                <b>(4 anos - Dev. Sênior)</b><br/><br/>
                Gestão do sistema de gabiente do prefeito.<br/>
                Responsável por todas as demandas relacionadas ao sistema, 
                juntamente com um colega dev. júnior.<br/><br/>
                • Gerenciamento de nova features e implantações<br/>
                • Análise e levantamento de requisitos <br/>
                • Manutenção e desenvolvimento C#<br/>
                • Manutenção de banco de dados SQL Server<br/>
                • Deploy<br/>
                • Suporte ao usuário<br/>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li>
        <div className={style.container}>
          <div className={clsx(style.lineContainer)}>
            <div className={style.line} >
              <div className={style.pointer} >
                <img src={CircleDotSVG} className={style.pointerSvg} draggable={false} />
              </div>
            </div>
          </div>
          <div className={style.containerIntern}>
            <div className={clsx(style.containerTitle)}>
              <div className={clsx(style.title)} 
              style={{ color: theme.textColor.primaryText, background: theme.gradientLinear.gradientPrimary }}
                onMouseEnter={() => handleDescription(2)}
                onClick={() => handleDescription(indexControlDescription !== 2 ? 2 : 0 )}
              >
                Câmara de Deputados Federais
              </div>
            </div>
            <div className={clsx(style.lineContainerIntern)}>
              <div className={style.line} >
                <div className={style.pointer} >
                  <img src={CircleDotSVG} className={style.pointerSvg} draggable={false} />
                </div>
              </div>
            </div>
            <div className={clsx(style.description,
              { [style.notHoverDescription]: indexControlDescription !== 2 },
              { [style.hoverDescription]: indexControlDescription === 2 }
            )}>
              <div className={clsx(style.ballonMessage)} style={{ color: theme.textColor.secondaryText, background: theme.gradientLinear.gradientSecondary }}>
                <b>(2 anos e meio - Dev. Pleno)</b><br/><br/>
                Gestão do sistema de CRM do gabiente do deputado.<br/>
                Desenvolvimento do sistema juntamente com um colega dev. sênior<br/><br/>
                • Manutenção e desenvolvimento C#<br/>
                • Manutenção de banco de dados SQL Server<br/>
                • Suporte ao usuário<br/>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li>
        <div className={style.container}>
          <div className={clsx(style.lineContainer)}>
            <div className={style.line} >
              <div className={style.pointer} >
                <img src={CircleDotSVG} className={style.pointerSvg} draggable={false} />
              </div>
            </div>
          </div>
          <div className={style.containerIntern}>
            <div className={clsx(style.containerTitle)}>
              <div className={clsx(style.title)}
                onMouseEnter={() => handleDescription(3)}
                onClick={() => handleDescription(indexControlDescription !== 3 ? 3 : 0 )}
                style={{ color: theme.textColor.primaryText, background: theme.gradientLinear.gradientPrimary }} >
                Nextdata Informática
              </div>
            </div>
            <div className={clsx(style.lineContainerIntern)}>
              <div className={style.line} >
                <div className={style.pointer} >
                  <img src={CircleDotSVG} className={style.pointerSvg} draggable={false} />
                </div>
              </div>
            </div>
            <div className={clsx(style.description,
              { [style.notHoverDescription]: indexControlDescription !== 3 },
              { [style.hoverDescription]: indexControlDescription === 3 }
            )}>
              <div className={clsx(style.ballonMessage)} style={{ color: theme.textColor.secondaryText, background: theme.gradientLinear.gradientSecondary }}>
                <b>(1 ano e 3 meses - Estagiário)</b><br/><br/>
                Auxiliar nas demandas de desenvolvimento do software de força
                tarefa de vendas da empresa.<br/><br/>
                • Manuteção e desenvolvimento Vb .net<br/>
                • Manutenção de banco de dados<br/>
                • Suporte remoto aos clientes<br/>
                • Treinamento de uso do sistema<br/>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li>
        <div className={style.container}>
          <div className={clsx(style.lineContainer)}>
            <div className={style.line} >
              <div className={style.pointer} >
                <img src={CircleDotSVG} className={style.pointerSvg} draggable={false} />
              </div>
            </div>
          </div>
          <div className={style.containerIntern}>
            <div className={clsx(style.containerTitle)}>
              <div 
              onMouseEnter={() => handleDescription(4)}
              onClick={() => handleDescription(indexControlDescription !== 4 ? 4 : 0 )}
              className={clsx(style.title)} style={{ color: theme.textColor.primaryText, background: theme.gradientLinear.gradientPrimary }} >                 
                Dimed - grupo Panvel
              </div>
            </div>
            <div className={clsx(style.lineContainerIntern)}>
              <div className={style.line} >
                <div className={style.pointer} >
                  <img src={CircleDotSVG} className={style.pointerSvg} draggable={false} />
                </div>
              </div>
            </div>
            <div className={clsx(style.description,
              { [style.notHoverDescription]: indexControlDescription !== 4 },
              { [style.hoverDescription]: indexControlDescription === 4 }
            )}>
              <div className={clsx(style.ballonMessage)} style={{ color: theme.textColor.secondaryText, background: theme.gradientLinear.gradientSecondary }}>
                <b>(7 meses - Estagiário)</b><br/><br/>
                Auxiliar na manuteção e desenvolvimento do software de ponto de vendas
                da Panvel.<br/><br/>
                • Desemvolvimento em Delphi<br/>
                • Desenvolvimento de Software PDV em kylix<br/>
                • Participação no projeto Totens<br/>
              </div>
            </div>
          </div>
        </div>
      </li>


    </ul>
  </div >



}


export default Experiences
