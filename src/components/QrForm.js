import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
};

const QrForm = () => {
    let navigate = useNavigate();

    const form = useRef();
    const checkBtn = useRef();

    const [batch, setbatch] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [amount, setAmount] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const onChangebatch = (e) => {
        const batch = e.target.value;
        setbatch(batch);
    };

    const onChangedueDate = (e) => {
        const dueDate = e.target.value;
        setDueDate(dueDate);
    };

    const handleLogin = (e) => {
        e.preventDefault();
    
        setMessage("");
        setLoading(true);
    
        form.current.validateAll();
    
        navigate("/qrform");
        setLoading(false);
    
        //if (checkBtn.current.context._errors.length === 0) {
        //  AuthService.login(batch, dueDate).then(
        //    () => {
        //      //navigate("/qrform");
        //      window.location.reload();
        //    },
        //    (error) => {
        //      const resMessage =
        //        (error.response &&
        //          error.response.data &&
        //          error.response.data.message) ||
        //        error.message ||
        //        error.toString();
    //
        //      setLoading(false);
        //      setMessage(resMessage);
        //    }
        //  );
        //} else {
        //  setLoading(false);
        //}
      };

    return(
        <div className="col-md-12 justify-content-center align-items-center">
            <div className="card">

            <h2>Creacion de códigos QR</h2>

            <Form onSubmit={handleLogin} ref={form}>
                <div className="form-group">
                    <label htmlFor="batch">Lote</label>
                    <Input
                    type="text"
                    className="form-control"
                    name="batch"
                    value={batch}
                    onChange={onChangebatch}
                    validations={[required]}
                    />
                </div>

                <br></br>

                <div className="form-group">
                    <label htmlFor="dueDate">Cantidad</label>
                    <Input
                    type="dueDate"
                    className="form-control"
                    name="dueDate"
                    value={dueDate}
                    onChange={onChangedueDate}
                    validations={[required]}
                    />
                </div>

                <br></br>

                <div className="form-group">
                    <label htmlFor="amount">Fecha de vencimiento</label>
                    <Input
                    type="amount"
                    className="form-control"
                    name="amount"
                    value={dueDate}
                    onChange={onChangedueDate}
                    validations={[required]}
                    />
                </div>

                <br></br>

                <div className="form-group">
                <button className="btn btn-primary btn-block" disabled={loading}>
                    <span>Elaborar códigos QR</span>
                </button>
                </div>

                <br></br>

            </Form>
            </div>
        </div>
    );
}

export default QrForm;