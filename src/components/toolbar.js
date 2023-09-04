import React from 'react'
import styles from '../styles/Home.module.css'
import { Link } from 'react-router-dom'

function Toolbar() {
  return (
    <div className={styles.toolbar}>
        <Link to="/account">Account</Link>
    </div>
  )
}

export default Toolbar  

