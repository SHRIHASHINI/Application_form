import React from "react";
import img from "../assets/images/img.jpg"
import "./Form.css"
function Form()
{
    const submitmessage=()=>{
        alert("Submit successfully");
    }
    return (
        <div className="Container">
            <div className="Image">
                <img src={img}/>
            </div>
            <div className="form-container">
                <form className="formcontent" onSubmit={submitmessage}>
                    <div className="heading">
                    <h3>STUDENT REGISTRATION FORM</h3>
                    </div>
                    <div className="flexbox-1">
                        <div>
                            <label>Name:</label><br/>
                            <input type="text" name="Name" required></input>
                        </div>
                        <div>
                            <label>Father Name:</label><br/>
                            <input type="text" name="FatherName" required/>
                        </div>
                    </div>
                    <div className="fullinput">
                        <label>Address:</label><br/>
                        <input type="text" name="Address" required/>
                    </div>
                    <div className="Radio-gender">
                        <label >Gender:</label>
                        <input type="radio" name="Gender" value="Male"/>Male
                        <input type="radio" name="Gender" value="Female"/>Female
                    </div>
                    <div className="flexbox-2">
                        <div>
                            <label>State:</label><br/>
                            <select name="State">
                                <option></option>
                                <option>TamilNadu</option>
                                <option>Andra Pradesh</option>
                                <option>Kerala</option>
                                <option>Kanataka</option>
                            </select>
                        </div>
                        <div>
                            <label>City:</label><br/>
                            <select name="City">
                                <option></option>
                                <option>Erode</option>
                                <option>Chennai</option>
                                <option>Kolhi kodu</option>
                                <option>Thirvandrum</option>
                                <option>Nellore</option>
                                <option>Hydrabad</option>
                            </select>
                        </div>
                    </div>
                    <div className="fullinput">
                        <label>Pincode</label><br/>
                        <input type="number" name="Pincode" required />
                    </div>
                    <div className="fullinput">
                        <label>Courses</label><br/>
                        <select name="Courses" >
                            <option >Computer Operator & Programming Assistant</option>
                            <option>Data Science Analysts</option>
                            <option>Artificial Intelligence and Machine Learning</option>
                            <option>Artificial Intelligence and Deep Learning</option>
                            <option>Full stack Developer</option>
                        </select>
                    </div>
                    <div className="fullinput">
                        <label>Email ID</label><br/>
                        <input type="email" name="mail" required />
                    </div>
                    <div className="flexbox-3">
                        <div>
                            <button type="reset" name="reset">Reset All</button>
                        </div>
                        <div>
                            <button type="submit" name="submit">Submit Form</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Form