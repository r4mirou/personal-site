import React from "react"
import SEO from "../components/seo"
import BgHeader from "../components/bgHeader"
import Layout from "../components/layout"
import Section from "../components/containerSection"
import Anchor from "../components/anchor"
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
        <Anchor id="anchorAbout" marginTop="-20vh" />
        <div style={{ padding: "0 10vw", marginBottom: "150px" }}>
          <CardContentDetail
            content={<AboutContent />}
            detail={<AboutDetail />}
          />
        </div>
      </Section>

      <Section>
      <Anchor id="anchorSkills" marginTop="-10vh" />
        <Skills />
      </Section>
      {/* <Section > */}
      <Anchor id="anchorProjects" marginTop="25vh" />
        <Projects />
      {/* </Section> */}
      <Section>
      <Anchor id="anchorExperiences" marginTop="-15vh" />
        <Experiences />
      </Section>
    </Layout>
  </>
)

export default IndexPage
