import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Ticket() {
    const { id } = useParams();
    const api = `http://localhost:3000/tickets/${id}`;
    const [data, setData] = useState();
    useEffect(() => {
        axios(api)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [api]);

    return (
        <>
            {data && (
                <div className="align-element">
                    <h1 className="my-20 text-primary text-3xl font-bold">
                        Ticket Details
                    </h1>
                    <div
                        key={data.id}
                        className="bg-white py-2 text-sm rounded-lg px-4 mb-5 relative block "
                    >
                        <h2 className="font-bold mb-2 text-2xl bg-white">{data.title}</h2>
                        <h3 className="mb-3 bg-white">
                            <span className="font-bold bg-white">Created by </span>
                            <span className="font-medium bg-white">{data.user_email}</span>
                        </h3>
                        <p className="font-medium mb-7 opacity-80 bg-white">{data.body}</p>
                        <span className="absolute bottom-0 right-0 ">
                            {data.priority === "low" && (<span>Low priority</span>)}
                            {data.priority === "medium" && (<span>Medium priority</span>)}
                            {data.priority === "high" && (<span>High priority</span>)}
                        </span>
                    </div>
                </div>
            )}
        </>
    );
}

export default Ticket;
