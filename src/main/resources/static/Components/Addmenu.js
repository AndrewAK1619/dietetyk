class Addmenu extends React.Component{
    render(){
        return(
            <div id="wrapper">
                <div id="who-for">
                    <span>JADŁOSPIS DLA</span>
                    <select class="select-styling-2">
                        <option>Pacjent Pacjent</option>
                    </select>
                    <button id="save-button" type="button">Zapisz</button>
                    <div class="close-button" onClick={this.props.handleCloseButton}>&#10006;</div>
                </div>
                <div id="main-workspace">
                    <div id="menu-data">
                        <div id="assume">ZAŁOŻENIA
                            DIETY
                        </div>
                        <div class="macro-data">
                            <label for="calory">KALORIE:</label>
                            <input type="text" name="calory"></input>kcal
                            <label for="proteine">BIAŁKA:</label>
                            <input type="text" name="proteine"></input>g
                            <input type="text" name="proteine"></input>kcal
                            <input type="text" name="proteine"></input>%
                            <label for="fat">TŁUSZCZE:</label>
                            <input type="text" name="fat"></input>g
                            <input type="text" name="fat"></input>kcal
                            <input type="text" name="fat"></input>%
                            <label for="carbohydrates">WĘGLOWODANY:</label>
                            <input type="text" name="carbohydrates"></input>g
                            <input type="text" name="carbohydrates"></input>kcal
                            <input type="text" name="carbohydrates"></input>%
                            
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
                            <div class="add-product-buttons">
                                    <button type="button">+ Produkt</button>
                                    <button type="button">+ Potrawa</button>
                                </div>
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
                            <div class="add-product-buttons">
                                    <button type="button">+ Produkt</button>
                                    <button type="button">+ Potrawa</button>
                                </div>
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
                            <div class="add-product-buttons">
                                    <button type="button">+ Produkt</button>
                                    <button type="button">+ Potrawa</button>
                                </div>
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
                            <div class="add-product-buttons">
                                    <button type="button">+ Produkt</button>
                                    <button type="button">+ Potrawa</button>
                                </div>
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
                            <div class="add-product-buttons">
                                    <button type="button">+ Produkt</button>
                                    <button type="button">+ Potrawa</button>
                                </div>
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
                            <div class="add-product-buttons">
                                    <button type="button">+ Produkt</button>
                                    <button type="button">+ Potrawa</button>
                                </div>
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
                            <div class="add-product-buttons">
                                    <button type="button">+ Produkt</button>
                                    <button type="button">+ Potrawa</button>
                                </div>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        )
    }
}