import { Link } from "react-router-dom";

export default function Card(props) {
   const { id, name, species, gender, status, origin, image, onClose } = props;
   return (
      <div>
         <button onClick={() => onClose(id)}>X</button>
         <Link to={`/detail/${id}`}>
            <h2 className="card-name">{name}</h2>
         </Link>
         <img src={image} alt={name} />
         <h2>{species}</h2>
         <h2>{gender}</h2>
         {/* <h2>{status}</h2> */}
         {/* <h2>{origin}</h2> */}
         {/* <img src='' alt={`Imagen no encontrada de ${props.name}`} /> */}
      </div>
   );
}
