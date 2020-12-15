const registrationStyle = {
    height: "500px",
    textAlign: "center",
    width: "500px",
    margin: "0 auto",
    background: "#EFEFEF",
    fontFamily: 'Nunito Sans',
    borderRadius: "1em",
    fontWeight: "bold",
    position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)',
}
const formField = {
    height: "36px",
    padding: "0 16px",
    border: "2px solid #a5be00",
    borderRadius: "4px",
    outline: "0",
    transition: ".2s",
    marginTop: "10px",
}
const registrationLeftDivStyle = {
    float: "left",
    width: "100px",
    height: "500px",
    background: "#a5be00",
    borderRadius: "1em 0 0 1em",
}
const formStyling = {
    paddingTop: "",
}
const loginButtonStyling = {
    display:"inline-block",
    padding:"0.35em 1.2em",
    border:"0.1em solid #FFFFFF",
    margin:"0 0.3em 0.3em 0",
    borderRadius:"0.12em",
    boxSizing:"border-box",
    textDecoration:"none",
    fontFamily:"'Roboto',sans-serif",
    fontWeight:"300",
    color:"#FFFFFF",
    textAlign:"center",
    transition:"all 0.2s",
    hover: {
         color:"#000000",
         backgroundColor:"#FFFFFF"  
    }
}
class Registration extends React.Component {
    state = {
        isFormSubmitted: '',
        name: '',
        surname: '',
        email: '',
        password: '',
        repassword: '',
        login: false,
        isValid: false,
    }
    formPost = () => {
        try{
            let result = fetch('/account/register', {
                method: 'post',
                mode: 'no-cors',
                headers: {
                    'Accept': 'aplication/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    login: this.state.login,
                    password: this.state.password,
                    name: this.state.name,
                    surname: this.state.surname,
                    email: this.state.email,
                })
            });
            console.log('Result:' + result);
        } catch(e){
        }
    }
    registrationData = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            this.passwordCheck();
        });
        
    }
    goToLogin = () => {
        this.setState({
            login: true,
        })
    }
    passwordCheck = () => {
        if(this.state.password.length > 5 && this.state.password === this.state.repassword && this.state.email.includes("@")){
            this.setState({
                isValid: true,
            })
        }else{
            this.setState({
                isValid: false,
            })
        }
    }
     render(){
         if(this.state.login === false){
            return(
                <form>
                    <div id="log-form" style={registrationStyle} id="main">
                    <div style={registrationLeftDivStyle} id="left"></div>
                    <div id="right">
                    <div  style={formStyling} id="login-form">
                                 <h1>eDietetyk</h1>
                                 <input style={formField} onChange={this.registrationData} type="text" name="name" placeholder="Imię"></input><br/>
                                 <input style={formField} onChange={this.registrationData} type="text" name="surname" placeholder="Nazwisko"></input><br/>
                                 <input style={formField} onChange={this.registrationData} type="text" name="email" placeholder="Email"></input><br/>
                                 <input style={formField} onChange={this.registrationData} type="password" name="password" placeholder="Hasło"></input><br/>
                                 <input style={formField} onChange={this.registrationData} type="password" name="repassword" placeholder="Potwierdź hasło"></input><br/>
                                 {this.state.isValid ? <button id="login-button" type="button" onClick={this.formPost}>Rejestracja</button> : <button id="disabled-button" type="button">Rejestracja</button>}
                             </div>
                             <button id="login-button" type="button" onClick={this.goToLogin}>Zaloguj</button>
                    </div>
                    </div>  
                </form>
            );
         }else{
             return(
                <Login/>
             );
         }
     }
}