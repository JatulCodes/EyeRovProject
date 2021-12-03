import React, {useState} from 'react'
import data from "./TaskJson.json"
import Task2 from './Task2'
import './Task1.css'



const Task1 = () => {

    const [datajson, setdatajson] = useState(data)
    return (
        <>
            <header className="heading">EyeRov project Task 1</header>
            <div className=" maincontainer">
                <div className="imagecontainer">
                    {
                        datajson.map((datajsons) => {
                            return (
                                <div key={datajsons.id}>
                                    <img src="sonar_map.png" 
                                    alt="Workplace" 
                                    useMap="#soanrMap" />
                                    <map 
                                    name="soanrMap">
                                    <area title={datajsons.title}
                                    shape={datajsons.rect}
                                    coords={datajsons.coords} 
                                    alt="" href="https://link.springer.com/chapter/10.1007/978-94-009-4205-9_41" />
                                    </map>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
                    <Task2/>
        </>
    )
}

export default Task1

