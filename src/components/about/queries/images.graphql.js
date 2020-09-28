import { useStaticQuery, graphql } from "gatsby"

const useImages = () => {
  return useStaticQuery(graphql`
    query QueryImagesAbout {
      detailImg: file(relativePath: { eq: "detailLight.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      detailImgDark: file(relativePath: { eq: "detailDark.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
}

export default useImages
