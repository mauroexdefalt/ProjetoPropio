import styled from "styled-components"
import{Nodejs} from '@styled-icons/boxicons-logos/Nodejs'

export const Container = styled.div`
grid-area: HD;

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

padding: 3px 6px 0 16px;
background-color: #111827;

max-height: calc(100vh - 46px);
overflow-y: scroll;



::-webkit-scrollbar {
  width: 4px;
  color: green
}

::-webkit-scrollbar-thumb {
  background-color: #aaa;
  border-radius: 4px;
}
`



export const ButtonLogin =  styled.button`

background: none;
border:1px solid #FFF;
height: 30px;
border-radius: 5px;
min-width: 80px;
color:#FFF;
cursor: pointer;

` 

export const ButtonSingn =  styled.button`

background: #4b9976;
border:1px solid #4b9976;
height: 30px;
border-radius: 5px;
min-width: 80px;
color:#FFF;
cursor: pointer;


` 

export const FeedBack =  styled.button`

background: none;
border:1px solid #FFF;
height: 30px;
border-radius: 5px;
min-width: 80px;
color:#FFF;
cursor: pointer;



` 

export const Title = styled.div`
display: flex;
align-items: center;
justify-content: center;
color:#FFF
`

export const ContainerButtons = styled.div`
display: flex;
flex-direction: row;
width: 30%;
justify-content: space-between;

`



export const NodeIcon  = styled(Nodejs)`
color: white;
  height: 20px;
  margin: 10px;

`