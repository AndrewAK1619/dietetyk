class Admin extends React.Component {
    state = {
        username:"",
        usersurname:"",
        userlogin:"",
        userpassword:"",
        useremail:"",
        userphone:"",
    }
    
    handleAdmin = (e) => {
        this.setState({
            [e.target.name]:e.target.value,
        })
    }
    formPost = () => {
        let userName = this.state.username;
        let userSurname = this.state.usersurname;
        let userLogin = this.state.userlogin;
        let userPassword = this.state.userpassword;
        let userEmail = this.state.useremail;
        let userPhone = this.state.userphone;
    try{
        let result = fetch('/account/admin', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({
                userName,
                userSurname,
                userLogin,
                userPassword,
                userEmail,
                userPhone,
            })
        });
        console.log('Result:' + result);
    } catch(e){
    }
}
    render(){
        return(
            <div id="admin">
                <div class="close-button" onClick={this.props.handleCloseButton}>&#10006;</div>
                <h1>Utwórz użytkownika</h1>
                <input class="admin-input-styling" onChange={this.handleAdmin} name="username" type="text"></input>
                <input class="admin-input-styling" onChange={this.handleAdmin}  name="usersurname" type="text"></input><br/>
                <input class="admin-input-styling" onChange={this.handleAdmin}  name="userlogin" type="text"></input>
                <input class="admin-input-styling" onChange={this.handleAdmin}  name="userpassword" type="text"></input><br/>
                <input class="admin-input-styling" onChange={this.handleAdmin}  name="useremail" type="text"></input>
                <input class="admin-input-styling" onChange={this.handleAdmin}  name="userphone" type="text"></input><br/>
                <button id="login-button" onClick={this.formPost} type="button">Utwórz</button>
            </div>
        )
    }
}