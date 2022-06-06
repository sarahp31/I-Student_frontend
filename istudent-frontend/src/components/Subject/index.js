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
    const [fileSummary, setFileSummary] = useState([])
    
    let Token = sessionStorage.getItem('token')

    useEffect(() => {
        // console.log(course);
        // console.log(subject);
        axios.get(`http://127.0.0.1:8000/api/${course}/${subject}/`)
        .then((response) => {
            setSummaryList(response.data);
            console.log(Token)
            // console.log(response.data)
        })
    }, []);

    const submitData = () => {
        axios({
            method: 'post',
            url: `http://127.0.0.1:8000/api/${course}/${subject}/upload/`,
            data:{
                "filename": fileSummary.name,
                "file": fileSummary
            },
            headers: {
                'Authorization': `Token ${Token}`,
            }}).then((response)=> console.log(response))
    }

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
                    {Token==null?(
                        <div>Você precisa estar logado para fazer upload do seu resumo</div>
                    ) : (
                        <div>Mande o Seu Resumo!
                            <form>
                                {/* <input type={"file"} onChange={(e) => console.log(e.target.files[0])}></input> */}
                                <input type={"file"} onChange={(e) => setFileSummary(e.target.files[0])}></input>                        
                            </form>
                            <Button onClick={submitData()}>Mandar</Button>
                        </div>
                    )}
                </div>
            )}
            <Footer/>
        </div>
        
    );
}
  
export default Courses;