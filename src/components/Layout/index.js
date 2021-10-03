import React, { useEffect, useState } from 'react'
import Teste from '../Menu'
import { Grid } from './styles'
import Principal from '../Principal'
import Header from '../Header'


export default function Layout() {



    return (
        <Grid>
            <Header/>
            <Principal/>
            <Teste/>

        </Grid>
    )
}