import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Task2.css'
const Task2 = () => {

    const [userInput, setUserInput] = useState({
        
        title:"", Coords:"", shape:""

    });
    const [newUserRecords, setnewUserRecords] = useState([])

    const handleInput =(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        // console.log(name,value);

        setUserInput({...userInput, [name] : value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();

        const newUsers = {...userInput, id: new Date().getTime().toString()}
        console.log(newUserRecords);
        setnewUserRecords([...newUserRecords, newUsers])

        setUserInput({title:"", Coords:"", shape:""});
    }
    return (
        <>
            <div className="formtask">
                <div className="middlediv">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputTitle">Title</label>
                            <input type="text" 
                            className="form-control" 
                            id="title" 
                            autoComplete="off"
                            value={userInput.title}
                            onChange={handleInput}
                            name="title" 
                            placeholder="Type Title" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputCoords">Coords</label>
                            <input type="number"
                            className="form-control"
                            id="Coords" 
                            autoComplete="off" 
                            value={userInput.Coords} 
                            onChange={handleInput}
                            name="Coords" 
                            placeholder="Type Coords" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputShape">Shape</label>
                            <input type="text" 
                            className="form-control" 
                            id="shape" 
                            autoComplete="off" 
                            value={userInput.shape} 
                            onChange={handleInput}
                            name="shape" 
                            placeholder="Type anyone Shape, Circle, rect, poly, default" />
                            
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

            <div className="showdata">
                {
                    newUserRecords.map((currelem)=>{
                        const {id,title,Coords,shape}= currelem;
                        return(
                            <div  className="showdatastyle" key={currelem.id}>
                                <span>{title}</span>
                                <span>{Coords}</span>
                                <span>{shape}</span>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Task2;
