import "./index.css";
import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";

function Courses(){
    const{course, subject} = useParams();
    const [summaryList, setSummaryList ] = useState([]);

    useEffect(() => {
        console.log(course);
        console.log(subject);
        axios.get(`http://127.0.0.1:8000/api/${course}/${subject}/`)
        .then((response) => {
            setSummaryList(response.data);
            console.log(response.data)
        })
    }, []);

    // const submitData = () => {
    //     axios({
    //         method: 'post',
    //         url: `http://127.0.0.1:8000/api/${course}/${subject}/upload/`,
    //         data:{
    //             username: "gabrielhso"
    //         },
    //         headers: {
    //             'Content-Type': "application/json",
    //             'Accept': "application/json"
    //         }}).then((response)=> console.log(response))
    // }

    return (
        <div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
            </style>
            <Header/>
            {summaryList.length==0?(
                <div>
                    Carregando
                </div>
            ):(
                <div>
                    <div>
                        {/* {summaryList.length} */}
                        {summaryList.map(summary => (
                            <div key={`summary__${summary.id}`}>
                            <a href={`http://127.0.0.1:8000${summary.file}`}>{summary.filename}</a>
                            </div>
                        ))}
                    </div>
                    Mande o Seu Resumo!
                    <form>
                        <input type={"file"}></input>
                    </form>
                </div>
            )}
            <Footer/>
        </div>
        
    );
}
  
export default Courses;