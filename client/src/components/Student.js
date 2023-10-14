import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Student() {
  const [isloading, setIsloading] = useState(false);
  const [roll, setroll] = useState("");
  const [rollno, setrollno] = useState("");
  const [data, setData] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    setrollno(roll);
    setIsloading(true);
    fetch(`http://localhost:5000/api/student/${roll}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data?.response);
        setIsloading(false);
      });
  };
  return (
    <>
      <div>
        <div className="container">
          <form className="form " id="createAccount" onSubmit={handleSubmit}>
            <h1 className="form__title">student details</h1>
            <div className="form__message form__message--error"></div>
            <div className="form__input-group">
              <input
                type="text"
                id="signupUsername"
                className="form__input"
                placeholder="Roll number"
                required
                onChange={(e) => setroll(e.target.value)}
              />
            </div>
            <button className="form__button">Search</button>
            {rollno ? (
              <>
                {isloading ? (
                  <p>loading</p>
                ) : (
                  <>
                    {data ? (
                      <>
                        <p style={{fontSize:"20px"}}><span style={{fontWeight:"bold",marginRight:"10px"}}>Roll Number:</span>{data.rollno}</p>
                        <p style={{fontSize:"20px"}}><span style={{fontWeight:"bold",marginRight:"10px"}}>Name:</span>{data.name}</p>
                        <p style={{fontSize:"20px"}}><span style={{fontWeight:"bold",marginRight:"10px"}}>Subject1 Marks:</span>{data.sub1}</p>
                        <p style={{fontSize:"20px"}}><span style={{fontWeight:"bold",marginRight:"10px"}}>Subject2 Marks:</span>{data.sub2}</p>
                        <p style={{fontSize:"20px"}}><span style={{fontWeight:"bold",marginRight:"10px"}}>Subject3 Marks:</span>{data.sub3}</p>
                        <p style={{fontSize:"20px"}}><span style={{fontWeight:"bold",marginRight:"10px"}}>Total Marks:</span>{data.sub1+data.sub2+data.sub3}</p>
                        <p style={{fontSize:"20px"}}><span style={{fontWeight:"bold",marginRight:"10px"}}>Grade:</span>{data.grade}</p>
                      </>
                    ) : (
                      <>
                        <p style={{fontSize:"20px",textAlign:"center"}}>no student found with roll number {rollno}</p>
                      </>
                    )}
                  </>
                )}
              </>
            ) : (
              <></>
            )}
            <Link to="/" className="form__text form__link">
              <p>Add a student record ?</p>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
