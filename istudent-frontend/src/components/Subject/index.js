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
    const [filename, setFilename] = useState("");
    const [fileSummary, setFileSummary] = useState([]);
    const [description, setDescription ] = useState("");
    
    let Token = sessionStorage.getItem('token');

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/${course}/${subject}/`)
        .then((response) => {
            console.log(response.data);
            setDescription(response.data.description)
        })
    }, []);
    
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/${course}/${subject}/summaries/`)
        .then((response) => {
            setSummaryList(response.data);
        })
    }, []);

    const submitData = () => {
        console.log(fileSummary);
        console.log(filename);
        const formData = new FormData();

        formData.append("file",
            fileSummary,
            fileSummary.name);

        axios({
            method: 'post',
            url: `http://127.0.0.1:8000/api/${course}/${subject}/summaries/upload/`,
            data: formData,
            headers: {
                'Authorization': `Token ${Token}`,
            }}).then((response)=> {
                console.log(response.data);
                window.location.reload();
            })
    }

    return (
        <div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
            </style>
            <Header/>
            <div>
                {subject}
            </div>
            <div>
                {description}
            </div>
            {summaryList.length==0?(
                <div>
                    Carregando
                </div>
            ):(
                <div>
                    <div>
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
                                <input type={"text"} onChange={(e) => setFilename(e.target.value)}></input>                    
                                <input type={"file"} onChange={(e) => setFileSummary(e.target.files[0])}></input>
                            </form>
                            <button onClick={() => fileSummary.length==0?(
                                console.log('Arquivo vazio')
                                ):(
                                submitData()
                            )}>Botão</button>
                        </div>
                    )}
                </div>
            )}
            <Footer/>
        </div>
        
    );
}
  
export default Courses;