import { useState } from "react";
import Validation from "./Validation";
import style from './Form.module.css'

const Form = ({ login }) => {
    const [view, setView] = useState(false)
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });
        setErrors(
            Validation({
                ...userData,
                [event.target.name]: event.target.value
            })
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    const showPassword = () => {
        setView(!view)
    }

    return (
        <div className={style.backForm}>
            <img className={style.imgForm} src="./src/assets/img/04.png" />
            <form className={style.formBox} onSubmit={handleSubmit}  >
                {/* <img className={style.imgLogin} src="./src/assets/img/03.png" /> */}
                <div className={style.form}>
                    <h2 className={style.login} >Login</h2>
                    <div className={style.inputBox}>
                        <span className={style.icon}>
                            <img className={style.log} src="./src/assets/img/01.png" alt="Logo" />
                        </span>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={userData.email}
                            onChange={handleChange}
                            autoComplete="off"
                            required
                            />
                        <label htmlFor="email">Email</label>
                        <p className={style.errors} >{errors.email}</p>
                    </div>
                    <div className={style.inputBox}>
                        <span className={style.icon}>
                            <img className={style.log} onClick={showPassword} style={{ cursor: "pointer" }} src="./src/assets/img/02.png" alt="Logo" />
                        </span>
                        <input
                            type={view ? 'text' : 'password'}
                            name="password"
                            id="password"
                            value={userData.password}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="password">Password</label>
                        <p className={style.errors} >{errors.password}</p>
                        <button className={style.submit} type="submit">Submit</button>
                        <h6>email: hh.robinson95@hotmail.com password:Kiwii9</h6>
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Blinker:wght@100&display=swap');
                        </style>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;