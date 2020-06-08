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
  grid-row: 2;
  margin: 0 auto;
  color: white;
`

const StyledFooter = styled.footer`
  grid-row: 3;
  height: 80px;
  display: inline-grid;
  justify-content: center;
  align-items: center;
`

const Layout: React.FC<LayoutProps> = ({ children, ...props }) => {
  return (
    <StyledLayout>
      <StyledHeader>
        <Image
          src="/images/The_New_York_Times_logo1.png"
          alt="New York Times logo"
        />
        <h1>Search</h1>
      </StyledHeader>
      <StyledMain>{children}</StyledMain>
      <StyledFooter>
        <span>&copy; Mateusz Burzynski</span>
      </StyledFooter>
    </StyledLayout>
  )
}

export default Layout
