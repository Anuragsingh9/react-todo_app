import React from "react";

const RegValWithFunctionalComp = () => {


    return (<>
        <form className="col-md-4" style={{ margin: "auto" }} onSubmit={""} noValidate>
            <div className="form-group">
                <label>Name</label>
                <input
                    type="text"
                    className={false > 0 ? "is-invalid form-control" : "form-control"}
                    name="name"
                    onChange={""}
                />
                {false > 0 && (
                    <span className="invalid-feedback">{""}</span>
                )}
            </div>
            <div className="form-group">
                <label>Email</label>
                <input
                    type="email"
                    className={false > 0 ? "is-invalid form-control" : "form-control"}
                    name="email"
                    onChange={""}
                />
                {"" > 0 && (
                    <span className="invalid-feedback">{""}</span>
                )}
            </div>
            <div className="form-group">
                <label>Password</label>
                <input
                    type="password"
                    className={"" > 0 ? "is-invalid form-control" : "form-control"}
                    name="password"
                    onChange={""}
                />
                {"" > 0 && (
                    <span className="invalid-feedback">{""}</span>
                )}
            </div>
            <button type="submit" className="btn btn-block btn-danger">Create User</button>
        </form>
    </>
    );
}

export default RegValWithFunctionalComp;