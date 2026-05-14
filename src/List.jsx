import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export const List = () =>{
    const [ dobok, setDobok ] = useState([]);
    const [isFetchPending, setFetchPending] = useState(false);
 
    useEffect(() => {
      setFetchPending(true);
      axios.get('http://localhost:3000/dobok')
      .then((response) => {
        setDobok(response.data);
      })
      .catch((error) => {
        console.log(error);

      })
      .finally(() => {
        setFetchPending(false);
      })
    }, []);
    return (
        <div className="p-5 m-auto text-center content bg-ivory">
         {isFetchPending ? ( 
            <div className="spinner-border" role="status"></div>
         ) :
         (
            <div className="container">
                <div className="row g-4">
                {dobok.map((dob, index)=> (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 key={index}">

                    </div>
                ))}
                </div>
            </div>
         )
         }
        </div>
    );
}