import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './search'

const Viewcharacter = () => {

    const [boxoffice , setboxoffice ] = useState([]);
    const [alltime_boxoffice , setalltime_boxoffice ] = useState([]);

    let alltime_imagesobject = new Map();

    const fetcher = async (item) => {
      try { 
        const fetchimg = await axios(`https://imdb-api.com/en/API/Title/k_tyc6ndc8/${item.id}/Images`);
      //  alltime_imagesobject.set(item.id , fetchimg.data.image)
      } catch(error) {  console.log(`Fetch alltime images error ${error}`)}
    }
/*
    useEffect(() => {

        const fetchitems = async () => {
            try {
                //api keys   k_tyc6ndc8 or k_x78g8z9v
                const boxoffice_response = await axios("https://imdb-api.com/en/API/BoxOffice/k_x78g8z9v");
                  setboxoffice(boxoffice_response.data.items)
                const alltime_boxoffice_response = await axios("https://imdb-api.com/en/API/BoxOfficeAllTime/k_tyc6ndc8");

                  alltime_boxoffice_response.data.items.splice(20, 180);
                   setalltime_boxoffice(alltime_boxoffice_response.data.items);

                   alltime_boxoffice.forEach(item => {
                    
                           fetcher(item);
                   })
              

            } catch (error) {
                console.log("Error: Fetch movies failed.");
            }

        }

        fetchitems();
    }, [])  
*/
    return (<article className="subcontainer">
            <Search />
        <h3 className="section_title">box office</h3>
        <section className="cardscontainer">
       { boxoffice.map(item => (
        <section className="cards"> 
        <h5 className="cardsrank" key={item.id}>{item.rank}</h5>
         <img className="cardsimg" key={`${item.id}${item.rank}`} alt="" src={item.image} />
         <p className="cardstitle">{item.title}</p>
         </section>
       )
         
         )}
       </section>

       <h3 className="section_title">box office -all time</h3>
       <section className="cardscontainer">
       { alltime_boxoffice.map(item => (
        <section className="cards-alltime"> 
        <h5 className="cardsrank" key={item.id}>{item.rank}</h5>
         <img className="cardsimg" key={`${item.id}${item.rank}`} alt="" src={alltime_imagesobject.get(item.id)} />
         <p className="cardstitle">{item.title}</p>
         </section>
       )
         
         )}
       </section>
       </article> 
    )
}

export default Viewcharacter
