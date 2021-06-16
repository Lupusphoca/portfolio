import React from "react";
import "./contactform.css";

function Field({ type, name, value, onChange, children }) {
    return <div>
        <label htmlFor={name}>{children}</label>
        <input type={type} value={value} onChange={onChange} id={name} name={name}></input>
    </div>
}

function ErrorMailWarning({ b }) {
    var newStyle = {
        color: "red"
    }
    return b ? <p style={newStyle}>ERREUR</p> : null;
}

var eligibleMail = false;

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: '',
            prenom: '',
            mail: '',
            message: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.verifyMail = this.verifyMail.bind(this);
    }

    handleChange(e) {
        var name = e.target.name;
        this.setState({
            [name]: e.target.value //[] autour de name permettent de récupérer sa clé et donc de changer le state correspondant
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const data = JSON.stringify(this.state)
        // METTRE ICI TOUT LE PROCESS D'ENVOIE DU MESSAGE PAR CONTACT
        this.setState({
            nom: '',
            prenom: '',
            mail: '',
            message: ''
        })
    }

    verifyMail(e) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.handleChange(e);
        eligibleMail = re.test(e.target.value) ? false : true;
    }

    render() {

        var textAreaStyles = {
            height: "200px",
            color: "blue"
        }

        return (
            <div class="form-container">
                <form >
                    <Field type="text" name="nom" value={this.state.nom} onChange={this.handleChange}>Nom</Field>

                    <Field type="text" name="prenom" value={this.state.prenom} onChange={this.handleChange}>Prénom</Field>

                    <Field type="text" name="mail" value={this.state.mail} onChange={this.verifyMail}>Adresse Mail</Field>
                    <ErrorMailWarning b={eligibleMail}></ErrorMailWarning>

                    <label htmlFor="message">Message</label>
                    <textarea value={this.state.message} onChange={this.handleChange} id="message" name="message" style={textAreaStyles}></textarea>

                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        );
    }
}

export default ContactForm;
