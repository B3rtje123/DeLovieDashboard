import { useState } from "react";
import LogoBar from "../components/LogoBar";
import HomeGrid from "../components/homeGrid";
import Searchbar from "../components/searchBar";

export default function Home() {
  const [results, setResults] = useState([]);
  return (
      <main className="font-pop max-h-screen lg:overflow-hidden">
      <LogoBar />
      <div className="max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-7xl flex flex-col mx-auto">
        <h2>Dashboard</h2>
        <h1 className="text-4xl font-semibold mt-7">Dashboard</h1>
        <Searchbar setResults={setResults}/>
        <div className="flex justify-center lg:mx-0 pb-12">
          <HomeGrid results={results} />
        </div>
      </div>
    </main>
  )
}