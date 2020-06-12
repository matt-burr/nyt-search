import React from "react"
import styled, { keyframes } from "styled-components"

type LoaderProps = {
  color?: string
}

const rotate = keyframes`
    from {
        transform: rotate(0deg)
    } to {
        transform: rotate(360deg)
    }
`

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 5rem;
  color: black;
`

const Loader: React.FC<LoaderProps> = (props) => {
  return <Rotate>Rotujemy jejejeje</Rotate>
}

export default Loader
