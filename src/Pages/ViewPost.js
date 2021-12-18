import React,{useState,useEffect, useContext} from 'react'

import Header from '../Components/Header/Header'
import View from '../Components/View/View'

import { FirebaseContext } from '../store/Context'

function    ViewPost(props) {


    const {firebase}=useContext(FirebaseContext)

    return (
        <div>
            <Header />
            <View/>
        </div>
    )
}

export default ViewPost
