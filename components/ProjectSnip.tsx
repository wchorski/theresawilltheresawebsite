import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { StyledProjectSnip } from '../styles/ProjectSnip.styled'
import imageLoader from "../helpers/imageLoader"

interface interfacePrj {
  title: string,
  link: string,
  img: string,
}

const ProjectSnip: FC<interfacePrj> = (props): JSX.Element => {
  
  return (
    <StyledProjectSnip>

      <h3>{props?.title}</h3>

      <Image 
        loader={imageLoader}
        unoptimized
        src={props?.img}
        alt={`thumbnail`}
        width={72} height={72} 
      />

      <Link href={props.link}>
        <a className="btn--Med"> Live Demo</a>
      </Link>

      <p>This is the description of the project</p>

    </StyledProjectSnip>
  )
}

export default ProjectSnip