import "./App.css";
import { useEffect, useState } from "react"; 
import NewsContent from './components/NewsContent/NewsContent';
import apikey from "./apikey";
import axios from "axios";
import Footer from "./components/Footer/Footer"
//import categories from "./data/category";

function App() {
  //const [category,setCategory]= useState("covid");
  const [newsArray,setNewsArray]=useState([]);
  const [newsResults,setNewsResults]=useState();
  const [loadMore, setLoadMore] = useState(20);
  

  const newsApi=async () => {
    try {
        
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?q=covid&country=in&apiKey=${apikey}`
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
    <div className="App" id="#home">
     
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
