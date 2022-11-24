import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider';

const Booking = ({ book }) => {
    const { user } = useContext(AuthContext)
    const { name, author, img, originalPrice, resalePrice, location, post, sellerName, summery, yearOfUse, yearOfPurchase } = book
    
    const handleSubmit=(e)=>{
        e.preventDefault()

        const form =e.target;
        const meetingPlace=form.place.value;
        const phone=form.phone.value;

        toast.success("Booking Successful!")
    }
    return (
        <div>
            <input type="checkbox" id="book" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="book" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Order "{name}" Now !</h3>
                    <form  onSubmit={handleSubmit}>
                        <div className='flex gap-10'>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="text-base">Book Name</span>
                                </label>
                                <input type="text" placeholder="Type here" disabled defaultValue={name} className="input input-bordered w-full " />

                            </div>
                            <div className="form-control w-full max-w-xs ">
                                <label className="label">
                                    <span className="text-base">Price</span>
                                </label>
                                <input type="text" placeholder="Type here" disabled defaultValue={resalePrice} className="input input-bordered w-full" />

                            </div>
                        </div>
                        <div className='flex gap-10'>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="text-base">Email</span>
                                </label>
                                <input type="text" placeholder="Type here" disabled defaultValue={user?.email} className="input input-bordered w-full " />

                            </div>

                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="text-base">Phone Number</span>
                                </label>
                                <input type="number" name='phone' placeholder="Type here" className="input input-bordered w-full" required />

                            </div>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="text-base">Meeting Place</span>
                            </label>
                            <input type="text" name='place' placeholder="Type here" className="input input-bordered w-full" required />

                        </div>
                        <div className='flex justify-end my-2'>
                        <button type="submit" className='btn '>Buy</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;