import React from 'react'
import Card from '../UI/Card/Card'
import styles from './Home.module.css'

const Home = (props) => {

    return (
       <Card className={styles.home}>
           Welcome back!
       </Card>
    )

}

export default Home
