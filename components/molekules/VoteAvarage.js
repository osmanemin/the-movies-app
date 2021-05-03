import React from 'react'

import styles from './voteAvarage.module.css'

import {Star} from '../atoms/Images'
import {TextSm} from '../atoms/Texts'



export default function VoteAvarage({voteAverage}) {
    return (
        <div className={styles.container}>
            <Star/>
            <TextSm text={voteAverage}/>
        </div>
    )
}
