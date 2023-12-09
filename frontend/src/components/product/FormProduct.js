//rafce
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { remove, create, getdata } from "../../functions/product";

const FormProduct = () => {
  // javascript
  const [data, setDate] = useState([]);
  const [form, setForm] = useState({});

  useEffect(() => {
    //code
    loadData();
  }, []);

  const loadData = async () => {
    getdata()
      .then((res) => setDate(res.data))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    if (e.target.name === "file") {
      setForm({
        ...form,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formWithImgData = new FormData();
    for (const key in form) {
      formWithImgData.append(key, form[key]);
    }

    create(formWithImgData)
      .then((res) => {
        console.log(res);
        loadData();
      })
      .catch((err) => console.log(err));
  };

  const handleRemove = async (id) => {
    console.log(id);
    remove(id)
      .then((res) => {
        loadData();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>FormProduct</h2>
      <form onSubmit={handleSubmit} enctype="multipart/form-data">
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          type="text"
          name="detail"
          placeholder="detail"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          type="text"
          name="price"
          placeholder="price"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          type="file"
          name="file"
          placeholder="file"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <button>Submit</button>
      </form>

      <h2>Product List</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">detail</th>
            <th scope="col">price</th>
            <th scope="col">price</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index}</th>
                  <td>{item.name}</td>
                  <td>{item.detail}</td>
                  <td>{item.price}</td>
                  <td>{item.file}</td>
                  <td onClick={() => handleRemove(item._id)}>delete</td>
                  <td>
                    <Link to={"/edit/" + item._id}>Edit</Link>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default FormProduct;
