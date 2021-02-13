class Addmenu extends React.Component{
    state = {
        calories: "",
        protein: "",
        fat: "",
        carbs: "",
    }
    handleMenuData = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            this.pcCalculator();
        });
    }
    pcCalculator = () => {
        let proteinCal = this.state.protein*4;
        let proteinPercentage = proteinCal*4*100/this.state.calories;
        let fatCal = this.state.protein*9;
        let fatPercentage = fatCal*9*100/this.state.calories;
        let carbsCal = this.state.carbs*4;
        let carbsPercentage = carbsCal*4*100/this.state.calories;
    }
    render(){

        return(
            <div id="wrapper">
                <div id="who-for">
                    <span>JADŁOSPIS DLA</span>
                    <select class="select-styling-2">
                        <option>Pacjent Pacjent</option>
                    </select>
                    <button id="save-button" type="button">Wygeneruj dietę</button>
                    <div class="close-button" onClick={this.props.handleCloseButton}>&#10006;</div>
                </div>
                <div id="main-workspace">
                    <div id="menu-data">
                        <div id="assume">ZAŁOŻENIA
                            DIETY
                        </div>
                        <div class="macro-data">
                            <label for="calory">KALORIE:</label>
                            <input type="text" name="calories" onChange={this.handleMenuData}></input>kcal
                            <label for="proteine">BIAŁKA:</label>
                            <input type="text" name="protein" onChange={this.handleMenuData}></input>g = {this.state.protein*4} kcal = {(this.state.protein*4*100/this.state.calories).toFixed(2)}%
                            <label for="fat">TŁUSZCZE:</label>
                            <input type="text" name="fat" onChange={this.handleMenuData}></input>g = {this.state.fat*9} kcal = {(this.state.fat*9*100/this.state.calories).toFixed(2)}%
                            <label for="carbohydrates">WĘGLOWODANY:</label>
                            <input type="text" name="carbs" onChange={this.handleMenuData}></input>g = {this.state.carbs*4} kcal = {(this.state.carbs*4*100/this.state.calories).toFixed(2)}%
                            
                        </div>

                    </div>
                    <div id="days-planner">
                        <div class="column">
                            <span>PONIEDZIAŁEK</span>
                            <div class="day-tiles">
                                <div class="add-product-buttons">
                                    <button type="button">+ Produkt</button>
                                    <button type="button">+ Potrawa</button>
                                </div>
                            </div>
                            <div class="day-tiles">
                            <div class="add-product-buttons">
                                    <button type="button">+ Produkt</button>
                                    <button type="button">+ Potrawa</button>
                                </div>
                            </div>
                            <div class="day-tiles">
                            <div class="add-product-buttons">
                                    <button type="button">+ Produkt</button>
                                    <button type="button">+ Potrawa</button>
                                </div>
                            </div>
                            <div class="day-tiles">
                            <div class="add-product-buttons">
                                    <button type="button">+ Produkt</button>
                                    <button type="button">+ Potrawa</button>
                                </div>
                            </div>
                            <div class="day-tiles">

                            </div>
                        </div>
                        <div class="column">
                            <span>WTOREK</span>
                            <div class="day-tiles">
                            <div class="add-product-buttons">
                                    <button type="button">+ Produkt</button>
                                    <button type="button">+ Potrawa</button>
                                </div>
                            </div>
                            <div class="day-tiles">
                            <div class="add-product-buttons">
                                    <button type="button">+ Produkt</button>
                                    <button type="button">+ Potrawa</button>
                                </div>
                            </div>
                            <div class="day-tiles">
                            <div class="add-product-buttons">
                                    <button type="button">+ Produkt</button>
                                    <button type="button">+ Potrawa</button>
                                </div>
                            </div>
                            <div class="day-tiles">
                            <div class="add-product-buttons">
                                    <button type="button">+ Produkt</button>
                                    <button type="button">+ Potrawa</button>
                                </div>
                            </div>
                            <div class="day-tiles">
 
                            </div>
                        </div>
                        <div class="column">
                            <span>ŚRODA</span>
                            <div class="day-tiles">
                            <div class="add-product-buttons">
                                    <button type="button">+ Produkt</button>
                                    <button type="button">+ Potrawa</button>
                                </div>
                            </div>
                            <div class="day-tiles">
                            <div class="add-product-buttons">
                                    <button type="button">+ Produkt</button>
                                    <button type="button">+ Potrawa</button>
                                </div>
                            </div>
                            <div class="day-tiles">
                            <div class="add-product-buttons">
                                    <button type="button">+ Produkt</button>
                                    <button type="button">+ Potrawa</button>
                                </div>
                            </div>
                            <div class="day-tiles">
                            <div class="add-product-buttons">
                                    <button type="button">+ Produkt</button>
                                    <button type="button">+ Potrawa</button>
                                </div>
                            </div>
                            <div class="day-tiles">

                            </div>
                        </div>
                        <div class="column">
                            <span>CZWARTEK</span>
                            <div class="day-tiles">
                            <div class="add-product-buttons">
                                    <button type="button">+ Produkt</button>
                                    <button type="button">+ Potrawa</button>
                                </div>
                            </div>
                            <div class="day-tiles">
                            <div class="add-product-buttons">
                                    <button type="button">+ Produkt</button>
                                    <button type="button">+ Potrawa</button>
                                </div>
                            </div>
                            <div class="day-tiles">
                            <div class="add-product-buttons">
                                    <button type="button">+ Produkt</button>
                                    <button type="button">+ Potrawa</button>
                                </div>
                            </div>
                            <div class="day-tiles">
                            <div class="add-product-buttons">
                                    <button type="button">+ Produkt</button>
                                    <button type="button">+ Potrawa</button>
                                </div>
                            </div>
                            <div class="day-tiles">

                            </div>
                        </div>
                        <div class="column">
                            <span>PIĄTEK</span>
                            <div class="day-tiles">
                            <div class="add-product-buttons">
                                    <button type="button">+ Produkt</button>
                                    <button type="button">+ Potrawa</button>
                                </div>
                            </div>
                            <div class="day-tiles">
                            <div class="add-product-buttons">
                                    <button type="button">+ Produkt</button>
                                    <button type="button">+ Potrawa</button>
                                </div>
                            </div>
                            <div class="day-tiles">
                            <div class="add-product-buttons">
                                    <button type="button">+ Produkt</button>
                                    <button type="button">+ Potrawa</button>
                                </div>
                            </div>
                            <div class="day-tiles">
                            <div class="add-product-buttons">
                                    <button type="button">+ Produkt</button>
                                    <button type="button">+ Potrawa</button>
                                </div>
                            </div>
                            <div class="day-tiles">

                            </div>
                        </div>
                        <div class="column">
                            <span>SOBOTA</span>
                            <div class="day-tiles">
                            <div class="add-product-buttons">
                                    <button type="button">+ Produkt</button>
                                    <button type="button">+ Potrawa</button>
                                </div>
                            </div>
                            <div class="day-tiles">
                            <div class="add-product-buttons">
                                    <button type="button">+ Produkt</button>
                                    <button type="button">+ Potrawa</button>
                                </div>
                            </div>
                            <div class="day-tiles">
                            <div class="add-product-buttons">
                                    <button type="button">+ Produkt</button>
                                    <button type="button">+ Potrawa</button>
                                </div>
                            </div>
                            <div class="day-tiles">
                            <div class="add-product-buttons">
                                    <button type="button">+ Produkt</button>
                                    <button type="button">+ Potrawa</button>
                                </div>
                            </div>
                            <div class="day-tiles">

                            </div>
                        </div>
                        <div class="column">
                            <span>NIEDZIELA</span>
                            <div class="day-tiles">
                            <div class="add-product-buttons">
                                    <button type="button">+ Produkt</button>
                                    <button type="button">+ Potrawa</button>
                                </div>
                            </div>
                            <div class="day-tiles">
                            <div class="add-product-buttons">
                                    <button type="button">+ Produkt</button>
                                    <button type="button">+ Potrawa</button>
                                </div>
                            </div>
                            <div class="day-tiles">
                            <div class="add-product-buttons">
                                    <button type="button">+ Produkt</button>
                                    <button type="button">+ Potrawa</button>
                                </div>
                            </div>
                            <div class="day-tiles">
                            <div class="add-product-buttons">
                                    <button type="button">+ Produkt</button>
                                    <button type="button">+ Potrawa</button>
                                </div>
                            </div>
                            <div class="day-tiles">

                            </div>
                        </div>
                        </div>
                </div>
            </div>
        )
    }
}