


import styled from 'styled-components'

const Component = styled.div`
 background: #111827;
  
`
export const Grid = styled.div`
  display: grid;
  
  grid-template-columns: 240px 240px auto 240px;
  grid-template-rows: 46px auto 52px;

  grid-template-areas:
    'HD HD HD HD'
    'MN CD CD UL'
    'MN CD CD UL';

  height: 100vh;
  

`;
