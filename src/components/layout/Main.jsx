import { useState, useEffect } from "react";
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"





const apiActressesUrl = 'https://lanciweb.github.io/demo/api/actresses/';
const apiActorsUrl = 'https://lanciweb.github.io/demo/api/actors/';





// * FUNZIONE PER MESCOLARE GLI OGGETTI RICEVUTI DALLE RICHIESTE API IN MODO DA NON AVERE PRIMA TUTTO UN GENERE E POI L'ALTRO ("NASCONDO" IL FATTO CHE SI TRATTI DI DUE RICHIESTE DIFFERENTI)
/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
var shuffle = function (array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
};





// * CREO FUNZIONE PER CONTROLLARE SE UOMO O DONNA, DATO CHE GLI OGGETTI CHE RICEVO SONO DIFFERENTI, IN VISTA DELLA CREAZIONE DI UN COMPONENTE CHE MOSTRI I DATI DELLA PERSONA IN QUESTIONE.
const checkIfFemale = (person) => {
    const isFemale = Object.hasOwn(person, "most_famous_movies");
    return isFemale;
}




const paginationStep = 20;
const initialPagination = {
    start: 0,
    end: paginationStep - 1,
}





export default function Main () {
    const [actresses, setActresses] = useState([])
    const [actors, setActors] = useState([])
    const [allActors, setAllActors] = useState([])
    const [filterText, setFilterText] = useState("")
    const [filteredActors, setFilteredActors] = useState([]);
    const [pagination, setPagination] = useState(initialPagination);



    useEffect(() => {
        axios
            .get(apiActressesUrl)
            .then(response => {
                setActresses(response.data);

                axios
                    .get(apiActorsUrl)
                    .then(response => {
                        setActors(response.data);
                    })
                    .catch(err => {
                        console.error(err);
                    })
                    .finally(() => {
                        console.info("Seconda richiesta terminata");
                    });
            })
            .catch(err => {
                console.error(err);
            })
            .finally(() => {
                console.info("Prima richiesta terminata");
            });
    }, [])



    useEffect(() => {
        if (!actresses || !actors) return;

        const newAllActors = shuffle(actresses.concat(actors));

        setAllActors(newAllActors);
        setFilteredActors(newAllActors);
    }, [actresses, actors])



    useEffect(() => {

        if (filterText === '') {
            setPagination(initialPagination)
        } else {
            setPagination({ start: 0, end: allActors.length - 1})
        }

        const newFilteredActors = allActors.filter(actor => actor.name.includes(filterText));
        setFilteredActors(newFilteredActors);
    }, [filterText])





    return (
        <main>


            {/* <div className="container my-5">
                <div className="row row-cols-4 g-3">
                    <div className="col-12">
                        <h2>
                            Actresses
                        </h2>
                    </div>
                    {
                        actresses.map(actress => {
                            return (
                                <div className="col" key={actress.id}>
                                    <div className="card shadow h-100">
                                        <div className="card-header">
                                            <img className="img-fluid" src={actress.image} alt={actress.name} />
                                        </div>
                                        <div className="card-body">
                                            <strong>
                                                {actress.name}
                                            </strong>
                                            <br />
                                            <em>
                                                {actress.nationality} - {actress.birth_year}
                                            </em>
                                            <br />
                                            <br />
                                            {actress.biography}
                                            <br />
                                            <br />
                                            Awards:
                                            <br />
                                            {actress.awards}
                                            <br />
                                            <br />
                                            Most famous films:
                                            <ul>
                                                {
                                                    actress.most_famous_movies.map((movie, index) => {
                                                        return (
                                                            <li key={index}>
                                                                {movie}
                                                            </li>
                                                        );
                                                    })
                                                }
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <div className="container my-5">
                <div className="row row-cols-4 g-3">
                    <div className="col-12">
                        <h2>
                            Actors
                        </h2>
                    </div>
                    {
                        actors.map(actor => {
                            return (
                                <div className="col" key={actor.id}>
                                    <div className="card shadow h-100">
                                        <div className="card-header">
                                            <img className="img-fluid" src={actor.image} alt={actor.name} />
                                        </div>
                                        <div className="card-body">
                                            <strong>
                                                {actor.name}
                                            </strong>
                                            <br />
                                            <em>
                                                {actor.nationality} - {actor.birth_year} {actor.death_year ? " (" + actor.death_year + ")" : ""}
                                            </em>
                                            <br />
                                            <br />
                                            {actor.biography}
                                            <br />
                                            <br />
                                            Awards:
                                            <br />
                                            {
                                                actor.awards.map((award, index) => {
                                                    return (
                                                        <span key={index}>
                                                            {award}
                                                            {index !== actor.awards.length - 1 ? ", " : ""}
                                                        </span> 
                                                    );
                                                })
                                            }
                                            <br />
                                            <br />
                                            Most famous films:
                                            <ul>
                                                {
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
                            );
                        })
                    }
                </div>
            </div> */}
            


            <div className="container my-5">
                <div className="row row-cols-4 g-3">
                    <div className="col-12">
                        <h2>
                            All Actors
                        </h2>
                    </div>
                    <div className="col-12">
                        <h4>
                            Filter by name
                        </h4>
                        <input 
                            value={filterText}
                            onChange={(e) => setFilterText(e.target.value)}

                            type="text" 
                            className="form-control" 
                        />
                    </div>

                    {
                        filteredActors.length > 0 ?
                        filteredActors.map((actor, index) => {
                            return(
                                
                                (index >= pagination.start && index <= pagination.end) ?
                                <div className="col" key={index}>
                                    <div className="card shadow py-1 px-2 h-100">
                                        {actor.name}
                                        {" "}
                                        (
                                            {checkIfFemale(actor) == true ? "F" : "M"}
                                        )
                                    </div>
                                </div>
                                :
                                ""
                                
                            );
                        })
                        :
                        <div className="col-12">
                            <p>Nessun risultato trovato</p>
                        </div>
                    }



                    <div className="col-12">
                        {
                            filterText.length === 0 ?
                            <>
                                <div className="btn-group">
                                    <button
                                        onClick={() => {
                                            if (pagination.start === 0) return;
                                            const newPagination = {
                                                start: pagination.start - paginationStep,
                                                end: pagination.end - paginationStep
                                            }
                                            setPagination(newPagination);
                                        }}
                                        className="btn btn-outline-secondary"
                                    >
                                        <FontAwesomeIcon icon={faAngleLeft} />
                                    </button>
                                    <button
                                        onClick={() => {
                                            if (pagination.end === allActors.length - 1) return;
                                            const newPagination = {
                                                start: pagination.start + paginationStep,
                                                end: pagination.end + paginationStep
                                            }
                                            setPagination(newPagination);
                                        }}
                                        className="btn btn-outline-secondary"
                                    >
                                        <FontAwesomeIcon icon={faAngleRight} />
                                    </button>
                                </div>
                                {" "}
                                {pagination.start + 1}-{pagination.end + 1} / {allActors.length} Attori
                            </>
                            :
                            ""
                        }
                    </div>
                </div>



            </div>



        </main>
    );
}