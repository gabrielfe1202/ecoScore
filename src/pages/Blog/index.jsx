import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Loading from "../../Components/Loading"

export default function Blog() {
    const [contents, setContents] = useState([])
    const [stateLoad, setStateLoad] = useState(true)

    const fetchContets = () => {
        fetch('https://67354f925995834c8a926889.mockapi.io/api/Content')
            .then(response => response.json())
            .then(data => setContents(data))
            .catch(error => console.error(error))
            .finally(() => setStateLoad(false))
    }

    useEffect(() => {
        fetchContets()
    }, [])

    if(stateLoad) return <Loading />

    return (
        <>
            <div className="flex flex-row w-full p-24 ">
                <main className="w-full flex flex-row flex-wrap">

                    {contents.map(item => (
                        <div className="w-full md:w-3/12 p-5">
                            <div className="">
                                <img src="https://placehold.co/400" />
                            </div>
                            <div>
                                <p className="text-white">{item.title}</p>
                                <Link to={`/Blog/${item.id}`} className="text-white">Ler mais</Link>
                            </div>
                        </div>
                    ))}
                </main>
            </div>
        </>
    )
}