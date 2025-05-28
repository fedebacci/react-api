import ActorCard from "./ActorCard";

export default function ActorsList ({ actors, currentPagination }) {
    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3 my-3">
            {
                actors.length > 0 ?
                actors.map((actor, index) => {
                    return(
                        
                        (index >= currentPagination.start && index <= currentPagination.end) ?
                        <ActorCard 
                            key={index}
                            actor={actor}
                        />
                        :
                        ""
                        
                    );
                })
                :
                <div className="col-12">
                    <p>Nessun risultato trovato</p>
                </div>
            }
        </div>
    );
}