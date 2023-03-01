
export default function Persona (){
    const name = "Jorge Urioste";
    const age = 17;
    
    const message = () => age >= 18 ? "Bienvenido. Lo invitamos a tomar una cerveza" : "Lo sentimos, no tiene edad legal para beber alcohol";

    return (
        <div>
            <p>{name}. {message()}</p>
        </div>
 
    )
}