import Head from "next/head";
import Hero from "@/components/Hero";
import RealState from "@/components/RealState";

import Category from "@/components/Category";
import Entry from "@/components/Entry";
import Personalised from "@/components/Personalised ";
import { useEffect, useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import BGcgeak from "@/components/BGcgeak";
import { motion, useScroll } from "framer-motion"


export default function Home() {
  const scrollRef = useRef(null)
  useEffect(() => {
    AOS.init({
      
    });
    
  }, [])
  

  return (
    <>
      <Head>
        <title>About us</title>
      </Head>

      <main>
      <div className=" h-screen">
     
     
     <Hero/>
     <RealState/>
     <Category/>
     <Entry/>
    <Personalised/>
     {/* <BGcgeak/> */}
    
     <div ref={scrollRef} style={{ overflow: "scroll" }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ root: scrollRef }}
      />
    </div>
    
    </div>
      </main>
    </>
  );
}
