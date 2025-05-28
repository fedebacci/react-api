import { useState, useEffect } from "react";
import axios from "axios"


const apiActressesUrl = 'https://lanciweb.github.io/demo/api/actresses/';
const apiActorsUrl = 'https://lanciweb.github.io/demo/api/actors/';


export default function Main () {

    const [actresses, setActresses] = useState([])
    const [actors, setActors] = useState([])

    useEffect(() => {
        console.debug('CREAZIONE ELEMENTO MAIN, RICHIEDO DATI INIZIALI AD API');

        axios
            .get(apiActressesUrl)
            .then(response => {
                console.log(response.data);

                setActresses(response.data);

                axios
                    .get(apiActorsUrl)
                    .then(response => {
                        console.log(response.data);
                        setActors(response.data);
                    })
                    .catch(err => {
                        console.error(err);
                    })
                    .finally(() => {
                        console.info("Seconda richiesta terminata")
                    });

            })
            .catch(err => {
                console.error(err);
            })
            .finally(() => {
                console.info("Prima richiesta terminata")
            });
    }, [])

    return (
        <main>


            <div className="container my-5">
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
                                                        <>
                                                            <span key={index}>{award}</span> 
                                                            {index !== actor.awards.length - 1 ? ", " : ""}
                                                        </>
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
            </div>
            

            {/* <ul>
                {
                    actresses.map(actress => {
                        return (
                            <li key={actress.id}>
                                {actress.name}
                            </li>
                        );
                    })
                }
            </ul> */}




        </main>
    );
}