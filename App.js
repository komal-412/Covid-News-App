import "./App.css";
import { useEffect, useState } from "react"; 
import NewsContent from './components/NewsContent/NewsContent';
//import apikey from "./data/apikey";
import axios from "axios";
import Footer from "./components/Footer/Footer"
//import categories from "./data/category";

function App() {
  //const [category,setCategory]= useState("covid");
  const [newsArray,setNewsArray]=useState([]);
  const [newsResults,setNewsResults]=useState();
  const [loadMore,setLoadMore]=useState(20);

  const newsApi=async () => {
    try {
        
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?q=covid&country=in&apiKey=24a39dc59a3b45bc8ad1e2cafdcb27e5`
      );
      setNewsArray(news.data.articles);
       setNewsResults(news.data.totalResults);
      

    } catch(error){
      console.log(error);
    }
  };
   //console.log(newsArray);
  useEffect(() => {
    newsApi();
  },[newsResults, loadMore]);


  return (
    <div className="App">
     
     {newsResults && (
        <NewsContent
          newsArray={newsArray}
          newsResults={newsResults}
          loadMore={loadMore}
          setLoadMore={setLoadMore}
        />
      )}
     <Footer />
    </div>
  );
}

export default App;
