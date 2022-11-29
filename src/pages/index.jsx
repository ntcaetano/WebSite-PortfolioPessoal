import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'

export default function Home() {
  return (
   <Container>
     <Content>
      <Infos>
        <Name>Olá, sou Natanael Caetano</Name>
        <Function>FullStack Developer</Function>
        <Intro>Cursando Ciências da Computação, 
          tenho experiência em desenvolvimento frontend
          e backend (React, TS, JS e outros).
        </Intro>
        <Link passHref="projects">
          <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
        </Link>
      </Infos>
      <Logo>
        <Img src="/images/logo.png" alt="logo" />
      </Logo>
     </Content>
   </Container>
  )
}
