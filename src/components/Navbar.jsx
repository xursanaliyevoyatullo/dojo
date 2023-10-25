import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div>
            <div className="flex items-center align-element pt-14 gap-7">
                <img src="http://192.168.33.143:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdojo-logo.dd24bad3.png&w=96&q=100" alt="" />
                <h2 className="text-indigo-700 text-xl font-bold">Dojo Helpdesk</h2>
                <Link to="/">Dashboard</Link>
                <Link to='/tickets'>Tickets</Link>
            </div>
            <hr className="mt-3"/>
        </div>
    )
}

export default Navbar