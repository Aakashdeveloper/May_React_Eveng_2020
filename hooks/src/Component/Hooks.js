import React,{useState, useEffect} from 'react';
import DisplayComponent from './DisplayComponent';

const url = "http://localhost:8900/news";

function HooksComponent(){
    const [title] = useState('Developer Funnel')
    const [counter,setCounter] = useState(0);
    const [count,setCount] = useState(0);
    const [news,setNews] = useState()


    useEffect(() => {
        console.log(">>>>>Inside useEffect")
        fetch(url)
        .then(res => res.json())
        .then((data) => {
            setNews(data)
        })
    },[title])

    console.log(">>>>>Outside useEffect", news)
    return(
        
        <div>
            <center>
                <h1>{title}</h1>
                <p>{counter}</p>
                <button onClick={() => {setCounter(counter+1)}}>
                    Counter
                </button> 
                <p>{count}</p>
                <button onClick={() => {setCount(count+1)}}>
                    Counter
                </button> 
                <DisplayComponent mydata={news}/>
            </center>
        </div>
    )
}

export default HooksComponent