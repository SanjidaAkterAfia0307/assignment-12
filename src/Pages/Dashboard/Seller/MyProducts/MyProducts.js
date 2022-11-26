import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import BigLoading from '../../../../Components/Loading/BigLoading';
import { AuthContext } from '../../../../Contexts/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
    const { data: myProducts = [],refetch,isLoading } = useQuery({
        queryKey: ['myProducts'],
        queryFn: () => fetch(`http://localhost:7000/books/${user?.email}`)
            .then(res => res.json())
    })

    console.log(myProducts)
    // delete
    const handleDelete = (id) => {
        console.log(id)
        fetch(`http://localhost:7000/books/${id}`,{
            method:"DELETE",
            headers:{

                authorization:`bearer ${localStorage.getItem("bookToken")}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            refetch()
        })
    }
    // advertise
    const handleAdvertise = (id) => {
        console.log(id)
        fetch(`http://localhost:7000/books/${id}`,{
            method:"PUT",
            headers:{

                authorization:`bearer ${localStorage.getItem("bookToken")}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            refetch()
        })
    }


    if(isLoading){
        return <BigLoading></BigLoading>
    }
    return (
        <div>
            {myProducts.length}

            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Favorite Color</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myProducts.map((myProduct, i) => <tr key={myProduct._id}>
                                <th>
                                    {i + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={myProduct.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{myProduct.name}</div>
                                            <div className="text-sm opacity-50">By {myProduct.author}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {myProduct.resalePrice}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Original Price {myProduct.originalPrice}</span>
                                </td>
                                <td>Status</td>
                                <th>
                                    <button className="btn btn-accent " onClick={() => handleAdvertise(myProduct._id)}>Advertise</button>
                                </th>
                                <th>
                                    <button className="btn btn-accent " onClick={() => handleDelete(myProduct._id)}>Delete</button>
                                </th>
                            </tr>)
                        }


                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default MyProducts;