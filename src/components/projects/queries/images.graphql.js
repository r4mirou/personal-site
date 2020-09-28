import { useStaticQuery, graphql } from "gatsby"

const useImages = () => {
  return useStaticQuery(graphql`
    query QueryImagesBgHeader2 {
      backgroundOne: file(relativePath: { eq: "backgroundOne.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      profileEfect: file(relativePath: { eq: "profile-efect.png" }) {
        childImageSharp {
          fluid(maxWidth: 180, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)
}

export default useImages
