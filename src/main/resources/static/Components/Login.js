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
    constructor(props){
        super(props)
        this.handleCloseButton = this.handleCloseButton.bind(this)
    }
    handleCloseButton = () => {
        this.setState({
            loggedin: "",
        })
        console.log("works");
    }
    state = {
        isFormSubmitted: '',
        login: '',
        password: '',
        registration: false,
        loggedin: "",
    }
    formPost = () => {
        let emailUser = this.state.login;
        let password = this.state.password;
    try{
        let result = fetch('/account/login', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({
                emailUser,
                password
            })
        }).then(function(response){
            if(response.status == "404"){
                setState({
                    loggedin: "wrong",
                })
            }else if(response.status == "200"){
                setState({
                    loggedin: "user",
                })
            }
        })
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
         if(this.state.loggedin ==""){
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
                    </div>
                    </div> 
                </form>
                {this.state.loggedin == "admin" ? <Admin handleCloseButton={this.handleCloseButton}/> : <></>}
                </>
            );
         }else if(this.state.loggedin == "admin"){
             return(
                <Admin/>
             );
         }
         else if(this.state.loggedin == "user"){
             return(
                 <Mainpanel/>
             )
         }else if(this.state.loggedin == "wrong"){
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
                                 <p class="error-message">Błędne hasło lub login</p>
                                 <button id="login-button" type="button" onClick={this.formPost}>Zaloguj</button>
                             </div>
                    </div>
                    </div> 
                </form>
                {this.state.loggedin == "admin" ? <Admin handleCloseButton={this.handleCloseButton}/> : <></>}
                </>
             );
         }
     }

}