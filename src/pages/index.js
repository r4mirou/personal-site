import React from "react"
import SEO from "../components/seo"
import BgHeader from "../components/bgHeader"
import Layout from "../components/layout"
import Section from "../components/containerSection"
import Gradient from "../components/gradient"
import CardContentDetail from "../components/cardContentDetail"
import AboutContent from "../components/about/content"
import AboutDetail from "../components/about/detail"
import Skills from "../components/skills"
import Projects from "../components/projects"
import Experiences from "../components/experiences"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <BgHeader />
    <Layout>
      <Gradient />
      <Section>
        <div style={{ padding: "0 10vw", marginBottom: "150px" }}>
          <CardContentDetail
            content={<AboutContent />}
            detail={<AboutDetail />}
          />
        </div>
      </Section>

      <Section>
        <Skills />
      </Section>
      {/* <Section > */}
        <Projects />
      {/* </Section> */}
      <Section>
        <Experiences />
      </Section>
    </Layout>
  </>
)

export default IndexPage
