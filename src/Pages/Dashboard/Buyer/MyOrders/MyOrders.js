import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import BigLoading from '../../../../Components/Loading/BigLoading';
import { AuthContext } from '../../../../Contexts/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const { data: myBookings = [], refetch, isLoading } = useQuery({
        queryKey: ['myBookings'],
        queryFn: () => fetch(`http://localhost:7000/bookings/${user?.email}`)
            .then(res => res.json())
    })
    console.log(myBookings)
    const handlePay = (id) => {
        console.log(id)
        // fetch(`http://localhost:7000/books/${id}`, {
        //     method: "DELETE",
        //     headers: {

        //         authorization: `bearer ${localStorage.getItem("bookToken")}`
        //     }
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         refetch()
        //     })
    }



    if (isLoading) {
        return <BigLoading></BigLoading>
    }
    return (
        <div>
            {myBookings.length}

            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Email Address</th>
                            <th>Pay</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myBookings.map((myBooking, i) => <tr key={myBooking._id}>
                                <th>
                                    {i + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={myBooking.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div className="font-bold">{myBooking.book}</div>
                                    </div>
                                </td>
                                <td>{myBooking.price}</td>
                                <td>{myBooking.sellerEmail}</td>

                                <td>
                                    {
                                        myBooking.price && myBooking.status === "Available" &&

                                        <Link to={`/dashboard/payment/${myBooking._id}`}>

                                            <button className="btn btn-accent " >Pay</button>
                                        </Link>

                                    }{
                                        myBooking.status === "Sold" &&
                                        <button className="btn btn-primary " >Paid</button>

                                    }
                                </td>

                            </tr>)
                        }


                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default MyOrders;