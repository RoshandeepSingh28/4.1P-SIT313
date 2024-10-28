import {Article, ArticleObj} from "./Article";

const des1 = "Data Structures and Algorithms (DSA) refer to the study of methods for organizing and storing data and the design of procedures (algorithms) for solving problems, which operate on these data structures."
const des2 = "Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. One of the most famous stack that is used for Web Development is MERN stack."
const des3 = "Arduino is an open-source electronics platform based on easy-to-use hardware and software. Arduino boards are able to read inputs - light on a sensor, a finger on a button turn it into an output - activating a motor, turning on an LED, publishing something online."
var tutorial1 = new ArticleObj("./images/tutorial1.jpeg", "Tutorial 1", "DSA", des1, 4.7, "sam");
var tutorial2 = new ArticleObj("./images/tutorial2.jpeg", "Tutorial 2", "MERN", des2,3.9, "varun");
var tutorial3 = new ArticleObj("./images/tutorial3.jpeg", "Tutorial 3", "Ardurino", des3,5, "karn");


function Tutorials(){
    return(
        <div className="all-articles">
        <Article article={tutorial1} />
        <Article article={tutorial2} />
        <Article article={tutorial3} />
        </div>
    )
}

export default Tutorials