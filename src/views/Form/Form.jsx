import { useState } from "react";
import Validation from "./validation";

const Form = ({login}) => {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
        setErrors(Validation({ ...userData, [event.target.name]: event.target.value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email" >Email </label>
                    <input
                        type="text"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        placeholder="" />
                    <span>{errors.email}</span>
                </div>
                <div>
                    <label htmlFor="password" >Password </label>
                    <input
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                        placeholder="" />
                    <span>{errors.password}</span>
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Form;