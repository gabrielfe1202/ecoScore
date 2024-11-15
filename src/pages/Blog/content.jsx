import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loading from "../../Components/Loading"

export default function Content() {
    const { id } = useParams()
    const [stateLoad, setStateLoad] = useState(true)
    const [content, setContent] = useState({})

    const fetchContets = () => {
        fetch(`https://67354f925995834c8a926889.mockapi.io/api/Content/${id}`)
            .then(response => response.json())
            .then(data => setContent(data))
            .catch(error => console.error(error))
            .finally(() => setStateLoad(false))
    }

    useEffect(() => {
        fetchContets()
    }, [])

    if (stateLoad) return <Loading />

    return (
        <article className="flex justify-center flex-col items-center py-24">
            <h1 className="text-4xl text-white">
                {content.title}
            </h1>
            <p className="w-8/12 text-center text-white text-lg pt-14 leading-loose">
                {content.text}
            </p>
        </article>
    )
}