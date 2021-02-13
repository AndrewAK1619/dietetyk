class Accountsettings extends React.Component{
    render(){
        return(
            <>
                <div id="who-for">
                <span>KONTO</span>
                <div id="empty-space">
                    </div>
                    <button id="save-button" type="button">Zapisz</button>
                    <div class="close-button" onClick={this.props.handleCloseButton}>&#10006;</div>
                </div>
                <div id="row">
                    <div class="settings">
                        <div class="heading">
                            <span>ZDJĘCIE PROFILOWE</span>
                        </div>
                        <div class="account-image">
                        <img src="img/user.png"></img>
                        </div>
                        <div id="picture-chosing">
                        <label for="avatar">Wybierz nowe zdjęcie profilowe:</label>
                            <input type="file"
                                id="avatar" name="avatar"
                                accept="image/png, image/jpeg">
                            </input>
                        </div>
                        </div>
                    <div class="settings">
                    <div class="heading">
                            <span>ZMIEŃ HASŁO</span>
                        </div>
                        <div id="new-password">
                        <input class="form-styling" type="text" placeholder="Obecne hasło"></input><br/>
                        <input class="form-styling" type="text" placeholder="Nowe hasło"></input><br/>
                        <input class="form-styling" type="text" placeholder="Powtórz nowe hasło"></input><br/>
                        </div>
                        <button id="login-button" onClick={this.formPost} type="button">Zapisz</button>
                    </div>
                    <div class="settings">
                    <div class="heading">
                            <span>PRZEDŁUŻENIE PROGRAMU</span>
                        </div>
                    <div id="continue">
                     <span>POZOSTAŁO: 348 DNI</span>
                    </div>
                    <div id="payment-buttons">
                    <button id="login-button" onClick={this.formPost} type="button">30 DNI</button><br/>
                    <span>Cena: 30zł</span><br/>
                    <button id="login-button" onClick={this.formPost} type="button">PÓŁ ROKU</button><br/>
                    <span>Cena: 180zł</span><br/>
                    <button id="login-button" onClick={this.formPost} type="button">I ROK</button><br/>
                    <span>Cena: 300zł</span><br/>
                    </div>
                    </div>
                </div>
            </>
        );
    }
}