import { BiSearchAlt } from "react-icons/bi";
import { useEffect, useState } from "react";

export default function Searchbar({setResults} : any) {
    const [input, setInput] = useState("");

    const fetchData = async  () => {
        await fetch(`https://loviebackend03.azurewebsites.net/users`)
        .then(response => response.json())
        .then(data => {
          setResults(data)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])


    const fetchSearchData = (value : string) => {
        if(value === "") {
            fetchData()
        }
        else{
            fetch(`https://loviebackend03.azurewebsites.net/users`)
            .then(response => response.json())
            .then(data => {
              const results = data.filter((user : any) => {
                return value && user && user.name && user.name.toLowerCase().includes(value.toLowerCase())
              })
              if(results.length === 0) {
                setResults(
                    [{
                        id: 0,
                        name: "Geen resultaten",
                        status: "null",
                        service: 0
                    }]
                )
              }else{
                setResults(results)
              }
              console.log(results)
            })
        }

    }
  
    const handleChange = (value : string) => {
      setInput(value)
      fetchSearchData(value)
    }
    return(
        <div className="relative mt-2">
            <BiSearchAlt className="absolute top-1/2 scale-150 ml-4 -translate-y-1/2 text-darkblue" />
            <input type="text" value={input} onChange={(e) => handleChange(e.target.value)} 
            className="bg-lightblue text-md pl-12 p-4 rounded w-full transition-all ease-in-out duration-200 max-w-lg
            focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-darkblue focus:rounded
            hover:outline-none hover:ring-2 hover:ring-offset-4 hover:ring-darkblue hover:rounded" />
        </div>
    )
}