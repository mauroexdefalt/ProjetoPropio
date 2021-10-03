import styled from "styled-components"
import {Zap} from '@styled-icons/octicons'
import {Users} from '@styled-icons/entypo/Users'
import {ClipboardTaskListRtl} from '@styled-icons/fluentui-system-filled/ClipboardTaskListRtl'
import {ClockHistory} from '@styled-icons/bootstrap/ClockHistory'
import {Inventory} from '@styled-icons/material-twotone/Inventory'
import {ProductionQuantityLimits} from '@styled-icons/material-twotone/ProductionQuantityLimits'
import  {Admin} from '@styled-icons/remix-line/Admin'
 

export const Container = styled.div`
  grid-area: MN;

  display: flex;
  flex-direction: column;

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


export const ItemMenu = styled.div`


display: flex;
min-height: 50px;
width: 100%;
margin-top:5px;
background: #111827;
color: #ffff;
align-items: center;
border-radius: 4px;


>div{
  display: flex;
  flex-direction: row;
  margin-left: 10px;  
  align-items: center;
  justify-content: center;
}

  &:hover {
    transition: 0.4s;
    min-height: 60px;
    background: #3193B0;
    font-size:18px;
    color: #ffff;
    cursor: pointer;
    
  }




`


export const RedZap = styled(Zap)`
  color: white;
  height: 20px;
  margin: 10px;

`

export const UsersIcon = styled(Users)`
  color: white;
  height: 20px;
  margin: 10px;
`

export const ListIcon = styled(ClipboardTaskListRtl)`
  color: white;
  height: 20px;
  margin: 10px;
`


export const ClockIcon = styled(ClockHistory)`
  color: white;
  height: 20px;
  margin: 10px;
`


export const InventIcon = styled(Inventory)`
  color: white;
  height: 20px;
  margin: 10px;
`

export const ProductIcon = styled(ProductionQuantityLimits)`
  color: white;
  height: 20px;
  margin: 10px;
`



export const AdminIcon = styled(Admin)`
  color: white;
  height: 20px;
  margin: 10px;
`




