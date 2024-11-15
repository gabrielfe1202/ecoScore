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

    if (stateLoad) return <Loading />

    return (
        <>
            <div className="flex flex-row w-full p-24 ">
                <main className="w-full flex flex-row flex-wrap">

                    {contents.map(item => (
                        <div className="w-full md:w-3/12 p-5">
                            <div className="relative">
                                <div className="w-full">
                                    <img src={item.icon} className="w-full" />
                                </div>
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black p-2 h-28  flex justify-end flex-col items-start">
                                    <p className="text-lg text-white">{item.title}</p>
                                    <Link to={`/Blog/${item.id}`} className="text-white text-lg px-3 py-1 bg-eco-green rounded-lg">Ler mais</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </main>
            </div>
        </>
    )
} 7