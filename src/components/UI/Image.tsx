import React from "react"
import styled from "styled-components"

type ImageProps = {
  height?: string
  src: string
  alt: string
}

const StyledImage = styled.img`
  height: 72px;
`

const Image: React.FC<ImageProps> = (props) => {
  const { src, alt } = { ...props }
  return <StyledImage src={src} alt={alt} />
}

export default Image
