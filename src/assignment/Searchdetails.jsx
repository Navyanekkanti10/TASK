import React, { useState } from "react";

function SearchData() {
  let [fStore, setStore] = useState({ fn: "", ln: "", email: "", psw: "" });
  let [take, setTake] = useState({});
  let [isbool, setisbool] = useState(true);
  let [multi, setMulti] = useState([]);

  let [searchdata, setSearchData] = useState("");
  let [searchdatatake, setSearchDataTake] = useState("");

  let searchDatavalue = ({ target: { value, name } }) => {
    setSearchData(value);
  };
  let SearchdataUpdate = () => {
    setSearchDataTake(searchdata)

    // console.log("search button");
    // multi.map(({ fn }) => {
    //   console.log(fn);
    //   console.log(searchdata);
    //   if (fn == searchdata) setSearchDataTake(searchdata);
    // });
  };

  let chengingGetValue = ({ target: { value, name } }) => {
    setStore({ ...fStore, [name]: value });
    // setTake({...fStore})
  };
  let takevalue = () => {
    setTake({ ...fStore });

    setMulti([...multi, { ...fStore }]);
    setisbool(false);
  };

  let cleandata = () => {
    setStore("");
    // setTake("")
    setisbool(true);
  };

  function show(e) {
    e.preventDefault();
    console.log(fStore);
    console.log(take);
  }

  return (
    <div>
      {isbool && (
        <form action="" onSubmit={show}>
          <label> Frist Name : </label>
          <input
            type="text"
            placeholder="Enter the Frist name"
            name={"fn"}
            onChange={chengingGetValue}
          />
          <br></br>
          <label> Last Name : </label>
          <input
            type="text"
            placeholder="Enter the Last Name"
            name="ln"
            onChange={chengingGetValue}
          />
          <br></br>
          <label> Email : </label>
          <input
            type="email"
            placeholder="Enter the Email"
            name="email"
            onChange={chengingGetValue}
          />
          <br></br>
          <label> Password : </label>
          <input
            type="password"
            placeholder="Enter the Passwor"
            name="psw"
            onChange={chengingGetValue}
          />
          <br></br>
          <button onClick={takevalue}>Submit</button>
        </form>
      )}
      {isbool || (
        <form action="" onSubmit={show}>
          <label> Frist Name : </label>
          <input
            type="text"
            placeholder="Enter the Frist name"
            name={"fn"}
            onChange={cleandata}
          />
          <br></br>
          <label> Last Name : </label>
          <input
            type="text"
            placeholder="Enter the Last Name"
            name="ln"
            onChange={cleandata}
          />
          <br></br>
          <label> Email : </label>
          <input
            type="email"
            placeholder="Enter the Email"
            name="email"
            onChange={cleandata}
          />
          <br></br>
          <label> Password : </label>
          <input
            type="password"
            placeholder="Enter the Passwor"
            name="psw"
            onChange={cleandata}
          />
          <br></br>
          <button onClick={takevalue}>Submit</button>
        </form>
      )}

      {/* <div>
            <h5> Frist Name : {take.fn}</h5>
            <h5> Last Name : {take.ln}</h5>
            <h5> email : {take.email}</h5>
            <h5> Password : {take.psw}</h5>
          </div> */}

      <div>
        <input
          type="text"
          placeholder="Enter the Emp Name"
          onChange={searchDatavalue}
        />
        <button onClick={SearchdataUpdate}>Search</button>
      </div>

      <div>
        {multi.map(({ fn, ln, email, psw }) => {
          if (searchdatatake === fn) {
            return (
              <div>
                <h4>{fn}</h4>
                <h5> Frist Name : {fn}</h5>
                <h5> Last Name : {ln}</h5>
                <h5> email : {email}</h5>
                <h5> Password : {psw}</h5>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default SearchData;