import React, { useEffect, useState } from 'react'

function Github() {
const[data,setData]=useState([]);

    useEffect(()=>{
        fetch("https://api.github.com/users/alintm4")
        .then(response=>response.json())
        .then(data=>{
            setData(data)

        })

    },[])
    return (
        <>
       <div>Github Followers:{data.followers}</div>
       Image:<img src={data.avatar_url} alt="image" width={300}/>
       </>
    )
}

export default Github
