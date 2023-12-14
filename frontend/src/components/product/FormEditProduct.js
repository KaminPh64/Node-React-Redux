import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { read, update } from "../../functions/product";

const FormEditProduct = () => {
  const params = useParams();
  const paramsId = params.id;
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    detail: "",
    price: "",
  });

  const [fileOld, setFileOld] = useState();

  useEffect(() => {
    loadData(paramsId);
  }, [paramsId]);

  const loadData = async (id) => {
    read(id)
      .then((res) => {
        setData(res.data);
        setFileOld(res.data.file);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    if (e.target.name === "file") {
      setData({
        ...data,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    console.log(fileOld);

    const formWithImgData = new FormData();
    for (const key in data) {
      formWithImgData.append(key, data[key]);
    }
    formWithImgData.append("fileOld", fileOld);

    update(paramsId, formWithImgData)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Form Edit Product</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={(e) => handleChange(e)}
          value={data.name}
        />
        <br />
        <input
          type="text"
          name="detail"
          placeholder="detail"
          onChange={(e) => handleChange(e)}
          value={data.detail}
        />
        <br />
        <input
          type="text"
          name="price"
          placeholder="price"
          onChange={(e) => handleChange(e)}
          value={data.price}
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
    </div>
  );
};

export default FormEditProduct;
