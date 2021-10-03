import React from 'react'
import { Container } from './styles'
import { FeedBack, ButtonLogin, ButtonSingn, ContainerButtons, Title ,NodeIcon} from './styles'



export default function Header() {
    return (

        <Container>
            <Title >
                Sistema Mauro Beta  0.0.1 <NodeIcon/>
            </Title>

            <ContainerButtons>
                <FeedBack >Feedback</FeedBack>
                <ButtonLogin >Entrar</ButtonLogin>
                <ButtonSingn >Cadastrar Grátis</ButtonSingn>
            </ContainerButtons>
        </Container>

    )
}