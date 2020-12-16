const loginStyle = {
    height: "400px",
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
const leftDivStyle = {
    float: "left",
    width: "100px",
    height: "400px",
    background: "#a5be00",
    borderRadius: "1em 0 0 1em",
}
const formStyling = {
    paddingTop: "10px",
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
const registrationLineStyling = {
    fontSize: "10px",
    textAlign: "right",
    marginTop: "50px",
    hover: {
        cursor: "pointer"
    }
}
class Login extends React.Component {
    state = {
        isFormSubmitted: '',
        login: '',
        password: '',
        registration: false,
    }
    formPost = () => {
            let emailUser = this.state.login;
            let password = this.state.password;
        try{
            let result = fetch('/account/login', {
                method: 'post',
                mode: 'no-cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({
                    emailUser,
                    password
                })
            });
            console.log('Result:' + result);
        } catch(e){
        }
    }
    loginData = (e) => {
        this.setState({
            login: e.target.value,
        })
    }
    passwordData = (e) => {
        this.setState({
            password: e.target.value,
        })
    }
    moveToRegistration = () => {
        this.setState({
            registration: !this.state.registration,
        })
    }
     render(){
         if(this.state.registration === false){
            return(
                <>
                <form>
                    <div id="log-form" style={loginStyle} id="main">
                    <div style={leftDivStyle} id="left"></div>
                    <div id="right">
                    <div  style={formStyling} id="login-form">
                                 <h1>eDietetyk</h1>
                                 <input style={formField} onChange={this.loginData} type="text" name="email" placeholder="Email"></input><br/>
                                 <input style={formField} onChange={this.passwordData} type="password" name="password" placeholder="Hasło"></input><br/>
                                 <button id="login-button" type="button" onClick={this.formPost}>Zaloguj</button>
                             </div>
                             <button id="login-button" type="button" onClick={this.moveToRegistration}>Rejestracja</button>
                    </div>
                    </div>  
                </form>
                </>
            );
         }else{
             return(
                <Registration/>
             );
         }
     }

}