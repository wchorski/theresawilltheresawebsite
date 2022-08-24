import React, { useEffect, useState } from 'react'
import { Layout_Full_Width } from '../components/Layouts'
import ProjectSnip from '../components/ProjectSnip'
import staticData from '../db/projects.json'

const Portfolio = () => {

  const [projsState, setprojsState] = useState([{
    title: "title",
    img: "https://IMAGE",
    link: "https://LINK",
    desc: "DESCRIPTION",
    tech: [
      "tech one",
      "tech two",
      "tech three"
    ],
  }])


  useEffect(() => {

    // TODO this isn't working?
    setprojsState(staticData)
    // console.log('staticData');
    // console.log(staticData);
    // console.log('projsState');
    // console.log(projsState);
    
  }, [])


  return (
    <Layout_Full_Width>

      {staticData.map((proj: any, i) => {

        return <ProjectSnip {...proj} key={i}/>

      })}

    </Layout_Full_Width>
  )
}

export default Portfolio