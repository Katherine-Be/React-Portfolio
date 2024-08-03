import React from "react";

function Bracket () {
    return (
        <div className="grid grid-cols-16 grid-rows-4 h-56 w-auto -mt-24 hexContainer">
        <p className="col-start-7 col-end-9 row-start-1 translate-x-1/4 translate-y-1/2 hexagons"></p>
        <p className="col-start-6 col-end-8 row-start-2 hexagons"></p>
        <p className="col-start-9 col-end-11 row-start-2 hexagons"></p>
        <p className="col-start-6 col-end-8 row-start-3 hexagons"></p>
        <p className="col-start-9 col-end-11 row-start-3 hexagons"></p>
        <p className="col-start-7 col-end-9 row-start-4 translate-x-1/4 -translate-y-1/2 hexagons"></p>
        <p className="col-start-5 col-end-7 row-start-2 -translate-x-1/4 translate-y-1/2 hexagons"></p>
        <p className="col-start-10 col-end-12 row-start-2 translate-x-1/4 translate-y-1/2 hexagons"></p>
        <p className="col-start-4 col-end-6 row-start-4 translate-x-1/4 -translate-y-1/2 hexagons"></p>
        <p className="col-start-10 col-end-12 row-start-4 translate-x-1/4 -translate-y-1/2 hexagons"></p>

    </div>
    )
}

export default Bracket;