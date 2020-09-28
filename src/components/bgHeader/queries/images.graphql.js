import { useStaticQuery, graphql } from "gatsby"

const useImages = () => {
  return useStaticQuery(graphql`
    query QueryImagesBgHeader {
      bgHeader: file(relativePath: { eq: "bg-header-dark.png" }) {
        childImageSharp {
          fluid(maxWidth: 2500, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
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
