import React from "react";
import Cookies from "js-cookie";
//Local Storage
function Storage() {
    const addLocalStorage = () => {
        alert("success add local storage");
        localStorage.setItem("userName", "Faud");
    };

    const removeLocalStorage = () => {
        alert("success remove local storage");
        localStorage.removeItem("userName");
    };

    //Session Storage
    const addSessionStorage = () => {
        alert("success add session storage");
        sessionStorage.setItem("userName", "Thalita");
    };

    const removeSessionStorage = () => {
        alert("success remove session storage");
        sessionStorage.removeItem("userName");
    };

    //Cookies
    const addCookies = () => {
        Cookies.set("userName", "Yolanda", { expires: 7, path: "" });
    };

    const removeCookies = () => {
        Cookies.remove("userName", { path: "" });
    };

    return (
        <div class="container mt-2">
            <div className="row">
                <div class="col-4 test text-center">
                    <div>
                        <b>Local Storage</b>
                    </div>
                    <button
                        class="btn btn-success mt-4"
                        onClick={addLocalStorage}
                    >
                        Add
                    </button>
                    <button
                        class="btn btn-warning ml-2 mt-4"
                        onClick={removeLocalStorage}
                    >
                        Remove
                    </button>
                </div>
                <div class="col-4 test text-center">
                    <div>
                        <b>Session Storage</b>
                    </div>
                    <button
                        class="btn btn-success mt-4"
                        onClick={addSessionStorage}
                    >
                        Add
                    </button>
                    <button
                        class="btn btn-warning ml-2 mt-4"
                        onClick={removeSessionStorage}
                    >
                        Remove
                    </button>
                </div>
                <div class="col-4 test text-center">
                    <div>
                        <b>Cookie</b>
                    </div>
                    <button class="btn btn-success mt-4" onClick={addCookies}>
                        Add
                    </button>
                    <button
                        class="btn btn-warning ml-2 mt-4"
                        onClick={removeCookies}
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Storage;
