import "./index.css";
import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';



function Courses(){

    const [ contents, setContent ] = useState([]);
    const [ subjects, setSubjects ] = useState([]);
    const [semestresNum, setSemestresNum] = useState();

    const {course} = useParams();
    

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/courses/').then((resp) =>
        resp.data.map((courses) => {
            if (courses.url_course_name == course){
                const description = courses.description;
                const img_back = courses.background_img;
                const num_semestrs = courses.number_of_semesters;
                const course_name = courses.display_course_name;
                const listContent = [description, img_back, num_semestrs, course_name];
                setContent(listContent);
                setSemestresNum(num_semestrs);
            }
        }));
    }, [course]);


    useEffect(() => {
  
        axios.get(`http://127.0.0.1:8000/api/${course}/subjects/`).then((resp) =>
        {
            setSubjects(resp.data);
            console.log(resp.data)
        }
        )}, [course]);
    
    return (
        <div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
            </style>
            <Header/>
            <div className="courese-content">
                <img src={`http://127.0.0.1:8000${contents[1]}` }className="course-img"/>
                <div className="texts">
                    <h1> {contents[3]}</h1>
                    <p className="description-content"> {contents[0]} </p>
                </div>
            </div>
            {subjects.length==0?(
                <div>carregando</div>
            ):(
                <div className="galeria-name">
                    <h1 className="galeria-semestres"> Galeria dos Semestres </h1>
                        {[...Array(semestresNum)].map((x, i) =>
                            <Accordion>
                                <AccordionSummary>
                                    <Typography> Semestre {i+1}</Typography>
                                </AccordionSummary>
                                {subjects[i].map((subject)=> 
                                    <AccordionDetails>
                                        <Link to={`/${course}/${subject[1]}`}>{subject[0]}</Link>
                                    </AccordionDetails>
                                )}
                            </Accordion>
                        )}
                </div>
            )}
            <Footer/>
        </div>
        
    );
}
  
export default Courses;