import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Courses(){

    axios.get('http://127.0.0.1:8000/api/courses/').then((response) => console.log(response.data))

    const {course} = useParams();
    console.log( {course} )

    // const [courses, listCourses] = useState([]);

    // const loadCourses = () => {
    //     axios
    //         .get(`http://127.0.0.1:8000/api/courses/`)
    //         .then((resp) => console.log(resp));
    // }

    // useEffect(() => { 
    //     loadCourses();
    // }, {});
    
    return (
        <div>
            <img src="code.png"/>
        </div>
        
    );
}
  
export default Courses;