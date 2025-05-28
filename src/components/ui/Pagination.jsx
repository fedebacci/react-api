import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"

import Button from "./Button"

export default function Pagination ({ filteredActors, pagination, handlePrev, handleNext  }) {
    return (
        <div className="col-12">
            <div className="btn-group">

                <Button 
                    handleClick={handlePrev}
                    styleClass="btn-outline-secondary"
                >
                    <FontAwesomeIcon icon={faAngleLeft} />
                </Button>
                <Button 
                    handleClick={handleNext}
                    styleClass="btn-outline-secondary"
                >
                    <FontAwesomeIcon icon={faAngleRight} />
                </Button>


            </div>
            {" "}
            {pagination.start + 1}-{pagination.end < filteredActors.length ? pagination.end + 1 : filteredActors.length} / {filteredActors.length} Actors
        </div>
    );
}