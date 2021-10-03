import React from 'react'
import {
    Container,
    ItemMenu,
    RedZap,
    UsersIcon,
    ListIcon,
    ClockIcon,
    InventIcon,
    ProductIcon,
    AdminIcon
} from './styles'



export default function Teste() {


    const arrr = [{ item: 'Ordens de serviço', icon: <ListIcon /> },
    { item: 'Clientes', icon: <UsersIcon /> },
    { item: 'Produtos', icon: <ProductIcon /> },
    { item: 'Estoque', icon: <InventIcon /> },
    { item: 'Usuários', icon: <AdminIcon /> },
    { item: 'Bater ponto', icon: <ClockIcon /> }]
    return (
        <Container>

            {arrr.map((item) => {
                return (
                    <ItemMenu><div>{item.icon}{item.item}</div></ItemMenu>
                )
            })
            }
             {arrr.map((item) => {
                return (
                    <ItemMenu><div>{item.icon}{item.item}</div></ItemMenu>
                )
            })
            }
               {arrr.map((item) => {
                return (
                    <ItemMenu><div>{item.icon}{item.item}</div></ItemMenu>
                )
            })
            }


        </Container>


    )
}