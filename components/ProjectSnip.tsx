import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { StyledProjectSnip } from '../styles/ProjectSnip.styled'
import imageLoader from "../helpers/imageLoader"
import {BiLink} from 'react-icons/bi'

interface interfacePrj {
  id: number,
  title: string,
  link: string,
  img: string,
  tech: Array<string>,
  desc: string,
}

const ProjectSnip: FC<interfacePrj> = (props): JSX.Element => {
  
  return (
    <StyledProjectSnip key={props?.id}>
      <div className='thumbnail'>
        <Image 
          loader={imageLoader}
          unoptimized
          src={props?.img}
          alt={`thumbnail`}
          width={400} height={400} 
        />
      </div>

      <div className='info'>
        <h2>{props?.title}</h2>


        <Link href={props.link}>
          <a className="btn--Med"> <BiLink /> Live Demo</a>
        </Link>

        <ul style={{listStyleType: "none", margin: "0", padding: "0"}} className='tag-list'>
          {props.tech.map((t, i) => {
            return <span className='tag' key={i}>{t}</span>
          })}
        </ul>

        <p>{props?.desc}</p>
        
      </div>

    </StyledProjectSnip>
  )
}

export default ProjectSnip