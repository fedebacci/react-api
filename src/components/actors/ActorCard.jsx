// * CREO FUNZIONE PER CONTROLLARE SE UOMO O DONNA, DATO CHE GLI OGGETTI CHE RICEVO SONO DIFFERENTI, IN VISTA DELLA CREAZIONE DI UN COMPONENTE CHE MOSTRI I DATI DELLA PERSONA IN QUESTIONE.
const checkIfFemale = (person) => {
    const isFemale = Object.hasOwn(person, "most_famous_movies");
    return isFemale;
}





export default function ActorCard ({ actor }) {
    return (
        <div className="col">
            <div className="card shadow h-100">
                <div className="card-header">
                    {/* <img className="img-fluid" src={actor.image} alt={actor.name} /> */}
                    <img src={actor.image} alt={actor.name} />
                </div>
                <div className="card-body">
                    <p>
                        <strong>
                            {actor.name}
                        </strong>
                    </p>
                    <p>
                        <em>
                            {actor.nationality} - {actor.birth_year} {actor.death_year ? " (" + actor.death_year + ")" : ""}
                        </em>
                    </p>
                    <p>
                        {actor.biography}
                    </p>
                    <p>
                        Awards:
                        <br />
                        {
                            checkIfFemale(actor) === true ?
                            actor.awards
                            :
                            actor.awards.map((award, index) => {
                                return (
                                    <span key={index}>
                                        {award}
                                        {index !== actor.awards.length - 1 ? ", " : ""}
                                    </span> 
                                );
                            })
                        }
                    </p>
                    <div>
                        Most famous films:
                        <ul className="ps-3">
                            {
                                checkIfFemale(actor) === true ?
                                actor.most_famous_movies.map((movie, index) => {
                                    return (
                                        <li key={index}>
                                            {movie}
                                        </li>
                                    );
                                })
                                :
                                actor.known_for.map((movie, index) => {
                                    return (
                                        <li key={index}>
                                            {movie} {""}
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>




        </div>
    );
}