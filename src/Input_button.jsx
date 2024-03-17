import { nanoid } from "nanoid";
import Tasks from "./Tasks";
import { useState } from "react";

function toggleFavorite() {
  <h1>hello</h1>;
}
function InputBox(props) {
    var my_var = null;

const [completed, setCompleted] = useState(false);



const handleCheckboxChange_2 = () =>{
props.my_second_id = nanoid();


}


const handleCheckboxChange = () =>{
    setCompleted(true);
    my_var = props.my_id;
    var my_elemnt = document.getElementById(my_var);
    my_elemnt.classList.add("hidden");
    console.log(props.my_id);
}
return (
    <>
    
      {props.my_id !== my_var && (
        <div id={props.my_id}  className="bg-gray-400 w-96">
          <input
            className="rounded-full start-0"
            type="checkbox"
            id={props.my_id}
            onClick={handleCheckboxChange}
          />
          <label id={props.my_id} className="text-white" htmlFor={props.my_id}>
            {props.the_name}
          </label>
          <div className="favorite-btn w-4 h-4 end-48 absolute bg-white">
            <svg className="star-icon" viewBox="0 0 24 24">
              <path d="M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21 L12 17.77 L5.82 21 L7 14.14 L2 9.27 L8.91 8.26 Z"></path>
            </svg>
            <input type="checkbox" className="hidden" onClick={handleCheckboxChange_2}/>
          </div>
        </div>
      )}
      <br />
    </>
  );
  
}

export default InputBox;
