import React, {useState, useEffect} from 'react'

function Users() {
    const [data, setData] = useState([])
    const [mode, setMode] = useState('online');
    useEffect(()=>{
        let url = "https://jsonplaceholder.typicode.com/users";
        fetch(url).then((response)=>{
            response.json().then((result) =>{
                console.warn("result", result);
                setData(result);
                localStorage.setItem("users", JSON.stringify(result))

                })
            }).catch(err => {
            setMode('offline')
            let collection = localStorage.getItem('users');
            setData(JSON.parse(collection))
            console.log("please connect to internet",err)
        })
    },[])
    return (
        <React.Fragment>
            <div className="container">
                <div>
                {
                    mode === 'offline' ?
                        <div class="alert alert-warning" role="alert">
                            You are in offline mode please connect with internet.
                        </div>
                    : null

                }
                </div>
                <table className="table table-striped table-hover table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, i) =>(
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.address.street}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )
}


export default Users
