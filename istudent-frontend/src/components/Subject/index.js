import "./index.css";
import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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
            <div className="subject-description">
                <h2 className="subject-name">
                    {subject}
                </h2>
                <p className="description-text">
                    {description}
                </p>
            </div>
            {summaryList.length==0?(
                <div>
                    Carregando
                </div>
            ):(
                <div className="contenudo-resumos">
                    <ul className="resumos-lista">
                        {summaryList.map(summary => (
                            <li key={`summary__${summary.id}`} className="resumo">
                            <a href={`http://127.0.0.1:8000${summary.file}`}>{summary.filename}</a>
                            </li>
                        ))}
                    </ul>
                    {Token==null?(
                        <div className="noLogin">Você precisa estar logado para fazer upload do seu resumo</div>
                    ) : (
                        <div className="sendResumo-content">
                            <p> Mande o Seu Resumo! </p>
                            <form>
                                <input type={"text"} onChange={(e) => setFilename(e.target.value)}></input>                    
                                <input type={"file"} onChange={(e) => setFileSummary(e.target.files[0])}></input>
                            </form>
                            <button className="button-sendArquivo" onClick={() => fileSummary.length==0?(
                                console.log('Arquivo vazio')
                                ):(
                                submitData()
                            )}>Enviar</button>
                        </div>
                    )}
                </div>
            )}
            <Footer/>
        </div>
        
    );
}
  
export default Courses;