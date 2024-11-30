import { Link, useLoaderData } from "react-router-dom";


const Update = () => {

    const loadedUser = useLoaderData();

    const handleUpdate = (e) =>{
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser = {name, email}

        // console.log(updatedUser);

        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                alert('user updated successfully!');
            }
        })
    }

    return (
        <div>
            <h3>Update information of {loadedUser.name}</h3>
            <br />
            <br />

            <form onSubmit={handleUpdate}>

            <input
               defaultValue={loadedUser?.name}
               name="name"
               type="text"
               className="input input-bordered input-info w-full max-w-xs" />
               <br />
               <br />
            <input
               type="email"
               name="email"
               defaultValue={loadedUser?.email}
               className="input input-bordered input-info w-full max-w-xs" />
               <br />
               <br />
            <input className="btn input input-bordered input-info w-full max-w-xs" type="submit" value="Update" />   

            </form>

            <br />
            <br />
            <Link to="/users"><button className="btn">Back</button></Link>
        </div>
    );
};

export default Update;