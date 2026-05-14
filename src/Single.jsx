import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import axios from 'axios';

export const Single = () =>{
    const params = useParams();
    const id = params.dobId;
    const [ dob, setDob ] = useState([]);
    const [isPending, setPending] = useState(false);
 
    useEffect(() => {
      setPending(true);
      axios.get(`http://localhost:3000/drums/${id}`)
      .then((response) => {
        setDob(response.data);
      })
      .catch((error) => {
        console.log(error);

      })
      .finally(() => {
        setPending(false);
      })
    }, [id]);
    return (
        <div className="p-5 m-auto text-center content bg-ivory">
         {isPending || !dob.id ? ( 
            <div className="spinner-border" role="status"></div>
         ) : (
            <div className="container">
                <div className="row g-4">
                     <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="card h-100 shadow-lg">
                                <NavLink to={'/'}>
                                Vissza a főoldalra </NavLink>
                                <div className="card-body">
                                    <h6 className="card-title">{dob.name}</h6>
                                    <p className="card-text">{dob.brand}</p>
                                    <p className="card-text">{dob.price}</p>
                                    <p className="card-text">{dob.quantity}</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
         )
        }
        </div>
    );
}