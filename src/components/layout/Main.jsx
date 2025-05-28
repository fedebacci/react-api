import { useState, useEffect } from "react";
import axios from "axios"


const apiBaseUrl = 'https://lanciweb.github.io/demo/api/actresses/';


export default function Main () {

    const [actresses, setActresses] = useState([])

    useEffect(() => {
        console.debug('CREAZIONE ELEMENTO MAIN, RICHIEDO DATI INIZIALI AD API');

        axios
            .get(apiBaseUrl)
            .then(response => {
                console.log(response.data);

                setActresses(response.data)
            })
            .catch(err => {
                console.error(err);
            })
            .finally(() => {
                console.info("Richiesta terminata")
            });
    }, [])

    return (
        <main>


            <div className="container my-5">
                <div className="row row-cols-4 g-3">
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
                                            {actress.awards}
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