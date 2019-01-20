"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import PhrasalVerbs from '/js/AppPhrasalVerbs';

class App extends React.Component {
    constructor(props) {
        super(props);

        let allEnglishVerbsChecked = true;
        let allPolishVerbsChecked = false;
        let phrasalVerbsViewModel = props.verbs.map(function (verb) {
            return {
                en: { isChecked: allEnglishVerbsChecked, value: verb.en, id: verb.en.replace(" ", "-") + "-" + "en" },
                pl: { isChecked: allPolishVerbsChecked, value: verb.pl, id: verb.en.replace(" ", "-") + "-" + "pl" } 
            };
        });
        this.state = { phrasalVerbs: phrasalVerbsViewModel, 
                       headerContext: { en: {isChecked: allEnglishVerbsChecked}, pl: {isChecked: allPolishVerbsChecked} } 
                    };
    }

    changeAllSelected(sourceElement, lang) {
        this.setState(prevState => {            
            prevState.phrasalVerbs.forEach(verb => {
                verb[lang].isChecked = sourceElement.checked;
            });
            prevState.headerContext[lang].isChecked = sourceElement.checked;
             return prevState;            
        });
    }

    verbSelectionChange(index, lang) {
        this.setState(prevState => {            
            prevState.phrasalVerbs[index][lang].isChecked = !prevState.phrasalVerbs[index][lang].isChecked;
            prevState.headerContext[lang].isChecked = prevState.phrasalVerbs.find(verb => { return !verb[lang].isChecked }) === undefined;
            return prevState;            
        });
    }

    render() {
        let cellsWithVerbs = this.state.phrasalVerbs.map((verb, index) => {
            return (
                <TabelCell key={index} verb={verb} onCheckBoxChange={(lang) => this.verbSelectionChange(index, lang)} />
            );
        })
        return (
            <React.Fragment>
                <div className="row justify-content-center">
                    <h2 className="text-center">The following table contains my learned phrasal verbs</h2>
                </div>
                <TableHeader headerContext={this.state.headerContext} changeAllSelected={(element, lang) => this.changeAllSelected(element, lang)}/>
                {cellsWithVerbs}
            </React.Fragment>
        );
    }
}

class TableHeader extends React.Component {
    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-sm-5 col-4 pl-4 py-4 shadow-none bg-warning rounded-left border">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" 
                               className="custom-control-input" 
                               id="check-all-en"
                               checked={this.props.headerContext.en.isChecked}
                               onChange={(event) => this.props.changeAllSelected(event.target, "en")}></input>
                        <label className="custom-control-label" htmlFor="check-all-en">Check all</label>
                    </div>
                </div>

                <div className="col-sm-5 col-4 pr-4 py-4 shadow-none bg-warning rounded-right border">
                    <div className="custom-control-right custom-checkbox text-right">
                        <input type="checkbox" 
                               className="custom-control-input" 
                               id="check-all-pl"
                               checked={this.props.headerContext.pl.isChecked}
                               onChange={(event) => this.props.changeAllSelected(event.target, "pl")}></input>
                        <label className="custom-control-label-reverted right-pulled" htmlFor="check-all-pl">Zaznacz wszystko</label>
                    </div>
                </div>
            </div>
        );
    }
}

class TabelCell extends React.Component {        
    render() {        
        return (
            <React.Fragment>
                <div className="row justify-content-center">
                    <div className="col-sm-5 col-4 pl-3 py-2 rounded-left border-left border-bottom border-right hover">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" 
                                   className="custom-control-input" 
                                   id={this.props.verb.en.id}
                                   checked={this.props.verb.en.isChecked}
                                   onChange={() => this.props.onCheckBoxChange("en")} />

                    <Label isEn={true} 
                                   showValue={this.props.verb.en.isChecked} 
                                   id={this.props.verb.en.id}
                                   value={this.props.verb.en.value} />
                        </div>
                    </div>
                    <div className="col-sm-5 col-4 pr-3 py-2 rounded-right border-right border-bottom border-right hover">
                        <div className="custom-control-right custom-checkbox text-right">
                            <input className="custom-control-input" 
                                   type="checkbox" 
                                   id={this.props.verb.pl.id}
                                   checked={this.props.verb.pl.isChecked}
                                   onChange={() => this.props.onCheckBoxChange("pl")} />
                            <Label isEn={false} 
                                   showValue={this.props.verb.pl.isChecked} 
                                   id={this.props.verb.pl.id}
                                   value={this.props.verb.pl.value} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

class Label extends React.Component {
    render() {
        let placeholderText = this.props.isEn ? "Select checkbox to show content" : "Zaznacz checkbox'a aby zobaczyć zawartość";
        let labelValue = this.props.showValue ? this.props.value : placeholderText;
        let placeholderColor = this.props.showValue ? "" : " text-secondary font-weight-light small";
        let styleClasses = this.props.isEn ? "custom-control-label" : "custom-control-label-reverted right-pulled"; 
        return (
            <label className={styleClasses + placeholderColor} 
                   htmlFor={this.props.id} > 
                {labelValue}
            </label>
        );
    }
}

let container = document.getElementById("app-container");
ReactDOM.render(<App verbs={PhrasalVerbs} />, container);