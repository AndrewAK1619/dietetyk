class Admin extends React.Component {
    state = {
        username:"",
        usersurname:"",
        userpassword:"",
        useremail:"",
    }
    
    handleAdmin = (e) => {
        this.setState({
            [e.target.name]:e.target.value,
        })
    }
    formPost = () => {
        let firstName = this.state.username;
        let lastName = this.state.usersurname;
        let password = this.state.userpassword;
        let email = this.state.useremail;
    try{
        let result = fetch('/admin/users/register', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({
                firstName,
                lastName,
                password,
                email,
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
                <input class="admin-input-styling" onChange={this.handleAdmin} name="username" placeholder="User name" type="text"></input>
                <input class="admin-input-styling" onChange={this.handleAdmin}  name="usersurname" placeholder="User surname" type="text"></input><br/>
                <input class="admin-input-styling" onChange={this.handleAdmin}  name="userpassword" placeholder="Password" type="text"></input>
                <input class="admin-input-styling" onChange={this.handleAdmin}  name="useremail" placeholder="Email" type="text"></input><br/>
                <button id="login-button" onClick={this.formPost} type="button">Utwórz</button>
            </div>
        )
    }
}