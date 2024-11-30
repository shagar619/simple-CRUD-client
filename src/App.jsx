
import { Link } from 'react-router-dom';
import './App.css'

function App() {

  const handleAddUser = (e) => {
    e.preventDefault();

    const form  = e.target;
    const name = form.name.value;
    const email = form.email.value;

    const user = {name, email};

    // console.log(user);


    // fetch send json data in backend
    fetch('http://localhost:5000/users', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId) {
        alert('user added successfully!');
        form.reset();
      }
    })




  }


  return (
    <>

      <h1 className='text-4xl mt-12'>Simple CRUD</h1>

      <div className="card bg-base-100 w-full max-w-md mx-auto mt-24 shrink-0 shadow-2xl">
      <form onSubmit={handleAddUser} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">E-mail</span>
          </label>
          <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add User</button>
        </div>

        <br />

        <Link to="/users"><button className='btn'>User</button></Link>

      </form>

    </div>

    </>
  )
}

export default App
