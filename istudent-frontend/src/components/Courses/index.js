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



function Courses(){

    const [ contents, setContent ] = useState([]);

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
            }
        }));
    }, [course]);
    
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
            <div className="galeria-name">
                <h1 className="galeria-semestres"> Galeria do Semestres </h1>
            </div>
            <Footer/>
        </div>
        
    );
}
  
export default Courses;