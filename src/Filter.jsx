
import InputBox from "./Input_button";
import Tasks from "./Tasks";
function My_favorite(props){
    <>
    
    {props.my_secind_id !== null && (
      <div id={props.my_id}  className="bg-gray-400 w-96">
        <input
          className="rounded-full start-0"
          type="checkbox"
          id={props.my_id}
          onClick={handleCheckboxChange_2}
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
}
function Filter(){

    return(
            <>
                <div className="bg-gray-700 w-96 left-0 absolute mr-80">

                        <h1 className="text-5xl text-purple-300 le">FILTERS</h1>
                        <button className="text-gray-300 hover:text-red-700 hover:bg-white hover:text-4xl w-auto">ALL</button>
                        <br />
                        <button className="text-gray-300 hover:text-red-700 hover:bg-white hover:text-4xl w-auto" onClick={<Tasks />}>FAVORITE</button>
                </div>
            
            </>
    )
}

export default Filter;