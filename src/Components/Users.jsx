import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";



const Users = () => {

   const loadedUsers = useLoaderData();
   const [users, setUsers] = useState(loadedUsers);


   const handleDelete = (id) => {
    // console.log(id);

    fetch(`http://localhost:5000/users/${id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.deletedCount > 0){
            alert('Deleted successfully!');
            const remaining = users.filter(user => user._id !== id);
            setUsers(remaining);
        }

    })
   }



    return (
        <div>
            <h2 className="text-3xl">Total users : </h2>

            <br />
            <br />

            <div className="space-y-3">

                {
                    users.map(user => <p key={user._id}>
                        {user.name} : {user.email}
                        <Link to={`/update/${user._id}`}>
                             <button className="btn mx-2">Update</button>
                        </Link>
                        <button 
                        onClick={() => handleDelete(user._id)}
                         className="btn">X</button>
                    </p>)
                }


            </div>

            <br />
            <br />
            <Link to="/"><button className='btn'>Back</button></Link>


        </div>
    );
};

export default Users;