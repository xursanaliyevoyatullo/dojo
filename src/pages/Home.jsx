import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="align-element">
      <h2 className="font-bold text-indigo-700 mt-10">Dashboard</h2>
      <p className="mt-7 mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, fugiat impedit omnis deserunt neque vel placeat ut distinctio laborum cum id provident sapiente officiis quod nulla expedita vero, asperiores repudiandae doloribus aut, magnam necessitatibus? Quo animi corporis nostrum consequuntur molestias natus quasi numquam ipsum, minima iste voluptatum nemo suscipit quas odit eius soluta vel rem.</p>
      <div className="text-center mb-7">
        <Link to="/tickets" className="btn btn-primary">View Tickets</Link>
      </div>
      <h2 className="font-bold text-indigo-700 ">Company Updates</h2>
      <div className="pb-16">
        <div className="bg-white py-2 px-3 mt-7 rounded">
          <h2 className="mb-3 font-bold bg-white">New member of the web dev team...</h2>
          <p className="mb-4 bg-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sed earum corrupti. Libero architecto autem excepturi laudantium molestiae non voluptatem fuga cumque numquam enim. Similique, aspernatur esse?</p>
        </div>
        <div className="bg-white py-2 px-3 mt-7 rounded">
          <h2 className="mb-3 font-bold bg-white">New website's live!</h2>
          <p className="mb-4 bg-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim voluptatibus libero impedit qui est. Rerum aut nulla aperiam enim id. Culpa, neque nesciunt earum molestiae nobis iste quo nemo assumenda non error ab, consequuntur atque?</p>
        </div>
      </div>
    </div>
  )
}

export default Home