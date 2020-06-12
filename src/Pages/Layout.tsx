import React from "react"
import styled from "styled-components"
import { Image } from "../components/index"

interface LayoutProps {
  children: any
}

const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
`

const StyledHeader = styled.header`
  text-align: center;
  color: white;
  grid-row: 1;
`

const StyledMain = styled.main`
  width: 80%;
  margin: 0 auto;
  padding: ${(props) => props.theme.spacing.large};
  grid-row: 2;
  color: white;
  @media ${(props) => props.theme.mq.mobile} {
    box-sizing: border-box;
    width: 100%;
  }
`

const StyledFooter = styled.footer`
  grid-row: 3;
  height: 80px;
  display: inline-grid;
  justify-content: center;
  align-items: center;
`

const Title = styled.div`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.sizes.xLarge};
  @media ${(props) => props.theme.mq.mobile} {
    font-size: ${(props) => props.theme.sizes.large};
  }
`

const Layout: React.FC<LayoutProps> = ({ children, ...props }) => {
  return (
    <StyledLayout>
      <StyledHeader>
        <Title>Search</Title>
        <Image
          src="/images/The_New_York_Times_logo1.png"
          alt="New York Times logo"
        />
      </StyledHeader>
      <StyledMain>{children}</StyledMain>
      <StyledFooter>
        <span>&copy; Mateusz Burzynski</span>
      </StyledFooter>
    </StyledLayout>
  )
}

export default Layout
