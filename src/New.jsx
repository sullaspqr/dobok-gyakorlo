import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const New = () => {
    const navigate = useNavigate();
    const HandleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/drums', {
            name: e.target.name.value,
            brand: e.target.brand.value,
            price: Number(e.target.price.value),
            quantity: Number(e.target.quantity.value)
        })
        .then(() => {
            navigate("/")
        })
    }
    return (
        <div className= "p-5 m-auto text-center content bg-ivory">
            <h1 className="display-4">Új dob</h1>
            <form onSubmit={HandleSubmit}>
                Név: <input type="text" name="name" className="form-control" />
                <br />
                Márka: <input type="text" name="brand" className="form-control" />
                <br />
                Ár: <input type="number" name="price" className="form-control" />
                <br />
                Darabszám: <input type="number" name="quantity" className="form-control" />
                <br />
                <button type="submit" className="btn btn-primary">Mentés</button>
            </form>

        </div>
    );

}