import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Register = () => {
    const { user, createUser, updateUser } = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.files[0];
        const password = form.password.value;
        console.log(name, email, photo, password)

        const formData = new FormData()
        formData.append('image', photo)

        const url=`https://api.imgbb.com/1/upload?key=a331c3baf6953b506f3e9d485f489368`

    fetch(url,{
      method:"POST",
      body:formData
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data.data.display_url)
      createUser(email,password)
      .then(res=>{
        const user=res.user;
        console.log(user)
      })
      .catch(er=>console.error(er))
      
    
    })
    .catch(er=>console.error(er))
    }
    return (
        <div className='lg:w-1/2 mx-auto pt-24 pb-56 '>


            <div className='lg:my-auto lg:p-12 p-10 md:p-20'>
                <h2 className='text-center text-3xl md:text-4xl font-bold pb-12 '>Sign up to join our courses !</h2>
                <form onSubmit={handleSubmit} className=' shadow-lg rounded-2xl p-4 md:p-20'>

                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2  font-medium text-gray-900 dark:text-gray-300">Your Full Name</label>
                        <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required="" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2  font-medium text-gray-900 dark:text-gray-300">Your E-mail</label>
                        <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="E-mail" required="" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="photo" className="block mb-2  font-medium text-gray-900 dark:text-gray-300">Your PhotoURL</label>
                        <input type="file" name="photo" className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2  font-medium text-gray-900 dark:text-gray-300">Your password</label>
                        <input type="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required="" />
                    </div>
                    {/* <p className='text-xl text-yellow-400 py-3'>{error}</p> */}
                    <button type="submit" className="text-white bg-indigo-500 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>


                    <p className='text-center my-2'><span>Already Have An Account ?</span> <Link className='text-orange-400' to="/login">Log In</Link></p>
                </form>
            </div>


        </div>
    );
};

export default Register;