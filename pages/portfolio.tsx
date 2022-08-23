import React from 'react'
import { Layout_Full_Width } from '../components/Layouts'
import ProjectSnip from '../components/ProjectSnip'

const portfolio = () => {
  return (
    <Layout_Full_Width>

      <ProjectSnip 
        title={`Heart-Chart`}
        img={`https://i.giphy.com/media/DkVufXnA4CmsNcVOay/giphy.webp`}
        link={`https://heart-chart.williamusic.com/`}
      />

      <ProjectSnip 
        title={`Network-Bulletin`}
        img={`https://media1.giphy.com/media/3z9WaWu7qn2hjsURl2/giphy.gif`}
        link={`https://nodesignage.williamusic.com/`}
      />

      <ProjectSnip 
        title={`WilliaMusic`}
        img={`https://www.williamusic.com/wp-content/uploads/2021/07/WM_Logo4.png`}
        link={`https://www.williamusic.com/`}
      />

    </Layout_Full_Width>
  )
}

export default portfolio