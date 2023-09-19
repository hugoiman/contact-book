import AddContact from "../AddContact"
import ListContact from "../ListContact"

function Home() {
    return (
        <div className="row align-items-start">
            <AddContact/>
            <ListContact/>
        </div>
    )
}

export default Home