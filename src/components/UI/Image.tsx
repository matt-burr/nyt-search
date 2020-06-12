import React from "react"
import styled from "styled-components"

type ImageProps = {
  height?: string
  src: string
  alt: string
}

const StyledImage = styled.img`
  height: 4em;
  @media ${(props) => props.theme.mq.mobile} {
    height: 3em;
  }
`

const Image: React.FC<ImageProps> = (props) => {
  const { src, alt } = { ...props }
  return <StyledImage src={src} alt={alt} />
}

export default Image
