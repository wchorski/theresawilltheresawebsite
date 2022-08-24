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
  
  return (
    <StyledTileBG>

      <div style={{pointerEvents: 'none', zIndex: "100"}}>
        {children}
      </div>

      <div className='box-cont'>
        {boxsState.map((box, i) => {
          return <div className='box' key={i}></div>
        })}
      </div>


    </StyledTileBG>
  )
}

export default TileBG