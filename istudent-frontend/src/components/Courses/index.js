import "./index.css";
import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";
import { useParams } from "react-router-dom";


function Courses(){

    axios.get('http://127.0.0.1:8000/api/courses/').then((resp) => 
    resp.data.map((course) => {
        if (course.url_course_name == course_url){
            const description = course.description;
            const img_back = course.background_img;
            const num_semestrs = course.background_img;
            const course_name = course.display_course_name;
        }
        // console.log(course)
    }));

    const {course_url} = useParams();
    console.log( {course_url} )
    
    return (
        <div>
            <Header/>
            <div className="course-content">
                <img src="code.png" className="course-img"/>
                <p> hello </p>
            </div>
            <Footer/>
        </div>
        
    );
}
  
export default Courses;