import styled from 'styled-components'


export const StyledProjectSnip = styled.div`

  border: solid var(--c-2) 1px;
  box-shadow: #000000a3 2px 2px 4px;
  border-radius: 5px;
  margin-bottom: 1em;
  padding: 1em;

  h2{
    font-size: 2em;
  }

  display: flex;
  flex-wrap: wrap;

  .thumbnail{
    margin-right: 1em;
  }

  .info{
    max-width: 30em;
  }

  .tag-list{
    display: flex;
    flex-wrap: wrap;

    .tag{
      margin-bottom: .3em;
    }
  }
`