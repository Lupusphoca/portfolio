// == Import : npm
import React from "react";

// == Import : local css
import "./contactform.css";

// == Import : emailjs
import { send } from "emailjs-com";

function Field({ type, name, value, onChange, children }) {
  return (
    <div>
      <label htmlFor={name}>{children}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        id={name}
        name={name}
      ></input>
    </div>
  );
}

function ErrorMailWarning({ b, mail }) {
  if (mail !== "") {
    var newStyle = {
      color: "red",
    };
    return b ? null : <p style={newStyle}>ERREUR</p>;
  } else {
    return null;
  }
}

var eligibleMail = false;

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      prenom: "",
      mail: "",
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.verifyMail = this.verifyMail.bind(this);
  }

  handleChange(e) {
    var name = e.target.name;
    this.setState({
      [name]: e.target.value, //[] autour de name permettent de récupérer sa clé et donc de changer le state correspondant
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    var dataSend = {
      from_name: this.state.nom + " " + this.state.prenom,
      to_name: "Pierre ARNAUDET",
      message: this.state.message,
      reply_to: this.state.mail,
    };

    if (eligibleMail) {
      send(
        "service_omtc1rd",
        "template_0iaadwc",
        dataSend,
        "user_GR5rL15WAM5KBiRZPELQV"
      )
        .then((response) => {
          console.log("SUCCESS !", response.status, response.text);
        })
        .catch((error) => {
          console.log("FAILED...", error);
        });

      this.setState({
        nom: "",
        prenom: "",
        mail: "",
        message: "",
      });
    } else {
      window.alert(
        "Veuillez renseigner une adresse mail valide s'il vous plaît !"
      );
    }
  }

  verifyMail(e) {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.handleChange(e);
    eligibleMail = re.test(e.target.value) ? true : false;
    console.log("Eligible mail ? :" + eligibleMail);
  }

  render() {
    var textAreaStyles = {
      height: "200px",
      color: "blue",
    };

    return (
      <div class="form-container">
        <form onSubmit={this.handleSubmit}>
          <Field
            type="text"
            name="nom"
            value={this.state.nom}
            onChange={this.handleChange}
          >
            Nom
          </Field>

          <Field
            type="text"
            name="prenom"
            value={this.state.prenom}
            onChange={this.handleChange}
          >
            Prénom
          </Field>

          <Field
            type="text"
            name="mail"
            value={this.state.mail}
            onChange={this.verifyMail}
          >
            Adresse Mail
          </Field>
          <ErrorMailWarning
            b={eligibleMail}
            mail={this.state.mail}
          ></ErrorMailWarning>

          <label htmlFor="message">Message</label>
          <textarea
            value={this.state.message}
            onChange={this.handleChange}
            id="message"
            name="message"
            style={textAreaStyles}
          ></textarea>

          <input type="submit" value="Envoyez"></input>
          {/* <button type='submit'>Submit</button> */}
        </form>
      </div>
    );
  }
}

export default ContactForm;
