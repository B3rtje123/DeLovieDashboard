import { useState } from "react";
import LogoBar from "../components/LogoBar";
import HomeGrid from "../components/homeGrid";
import Searchbar from "../components/searchBar";

import { motion } from 'framer-motion'

export default function Home() {
  const [results, setResults] = useState([]);
  return (
      <motion.main 
      initial={{width: 0, opacity: 0}}
      animate={{width: "100%", opacity: 1}}
      exit={{x: window.innerWidth, opacity: 0, transition: {duration: 0.2}}}
      className="font-pop max-h-screen lg:overflow-hidden">
      <LogoBar />
      <div className="max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-7xl flex flex-col mx-auto">
        <h2 className="cursor-default">Dashboard</h2>
        <h1 className="text-4xl font-semibold mt-7 cursor-default">Dashboard</h1>
        <Searchbar setResults={setResults}/>
        <div className="flex justify-center lg:mx-0 pb-12">
          <HomeGrid results={results} />
        </div>
      </div>
    </motion.main>
  )
}