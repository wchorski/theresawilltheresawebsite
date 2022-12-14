import styled from 'styled-components'


export const StyledTileBG = styled.div`
  /* background-color: var(--c-2); */
  position: relative;
  /* background-color: green; */
  display: flex;
  justify-content: center;
  align-items: center;
  
  .box-cont{
    /* position: absolute; */
    display: flex;
    flex-wrap: wrap;
    position: absolute;
  }

  .box{
    background-color: var(--c-2);
    /* outline: solid 2px var(--c-2); */
    cursor: pointer;
    transform: scale(1);
    height: 50px;
    width: 50px;
    position: relative;
    

    &:hover{
      /* outline: solid 2px var(--c-bg); */
      transform: scale(.8);
      z-index: 3;
    }
  }

  .sqr-active{
    background-color: var(--c-1);
  }
`