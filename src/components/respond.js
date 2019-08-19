import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";



class Respond extends React.Component {
    state = {
        loading: false
    };


    render() {
        const { loading } = this.state;
        const { params } = this.props.location;
        return (
            <>
                <div className="header-vacancy">
                    <Link className="button-back" to={{ pathname: `/`, params }}>
                        Назад
          </Link>
                </div>

                {loading ? (
                    <div className="loader-wrapper">
                        <CircularProgress className="loader" />
                    </div>
                ) : (

                        <div className="respond-content">

                            <div className="respond-name">Создание резюме</div>

                            
                            <div className="contacts">Имя <input className="input-contacts"></input></div>
                            <div className="contacts">Фамилия <input className="input-contacts"></input></div>
                            <div className="contacts">Email или телефон <input className="input-contacts"></input></div>
                            

                        </div>
                    )}
            </>
        );
    }
}




export default Respond;