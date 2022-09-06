import React, {useState, useEffect} from 'react'

import { StyledTileBG} from 'styles/TileBG.styled'


export function TileBG  ( {children}: {children: React.ReactNode} )  {

  const [boxsState, setboxsState] = useState([0])


  useEffect(() => {
    // setboxsState()

    for (let index = 1; index < 300; index++) {
      setboxsState(prev => [...prev, index])
    
    }
  
    return () => {
      
    }
  }, [])

  const setBoxClick = (e: any) => {
    const target = e.currentTarget
    target.classList.toggle('sqr-active')
  }
  
  return (
    <StyledTileBG>

      <div style={{pointerEvents: 'none', zIndex: "100"}}>
        {children}
      </div>

      <div className='box-cont'>
        {boxsState.map((box, i) => {

          const rndNum = Math.random() 
          console.log(rndNum);
          

          if(rndNum > .05){
            return <div onClick={e => setBoxClick(e)} className='box' key={i} ></div>
          } else {
            return <div onClick={e => setBoxClick(e)} className='box sqr-active' key={i} ></div>
          }

        })}
      </div>


    </StyledTileBG>
  )
}

export default TileBG