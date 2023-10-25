import { Link } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react";

function Tickets() {
  const [data, setData] = useState([])
  const api = "http://localhost:3000/tickets"
  useEffect(() => {
    axios(api)
      .then((responce) => {
        setData(responce.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [api])

  return (
    <div className="align-element">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="mt-10 text-indigo-700 font-bold text-xl">Tickets</h2>
          <h3>Currently open tickets</h3>
        </div>
        <Link to="/create" className="btn btn-primary">New Ticket</Link>
      </div>
      {data && data.map((item) => {
        return (
          <Link to={`${item.id}`} key={item.id}>
            <div className="bg-white py-2 px-3 mt-7 rounded align-element">
              <h2 className="mb-3 font-bold bg-white">{item.title}</h2>
              <p className="mb-4 bg-white">{item.body.substring(0, 200)}...</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Tickets