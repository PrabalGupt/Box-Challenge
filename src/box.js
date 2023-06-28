import React from 'react'

export default function Box(props){
    const styles ={
        backgroundColor: props.on? "#222222" : "#cccccc"
    }
    return(
        <p onMouseMove={() => props.clicked(props.id)} style={styles} className="box--elements"></p>
    )
}