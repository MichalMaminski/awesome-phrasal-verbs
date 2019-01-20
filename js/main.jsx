import React from 'react';
import ReactDOM from 'react-dom';
import PhrasalVerbs from '/js/AppPhrasalVerbs';

class App extends React.Component {
    constructor(props) {
        super(props);

        let phrasalVerbsViewModel = props.verbs.map(function (verb) {
            return {
                showEnglishVersion: true,
                en: { value: verb.en, id: verb.en.replace(" ", "-") + "-" + "en" },
                pl: { value: verb.pl, id: verb.en.replace(" ", "-") + "-" + "pl" } 
            };
        });
        this.state = { phrasalVerbs: phrasalVerbsViewModel };
    }

    verbSelectionChange(index) {
        this.setState(prevState => {            
            prevState.phrasalVerbs[index].showEnglishVersion = !prevState.phrasalVerbs[index].showEnglishVersion
             return prevState;            
        })
    }

    render() {
        let cellsWithVerbs = this.state.phrasalVerbs.map((verb, index) => {
            return (
                <TabelCell key={index} verb={verb} onCheckBoxChange={() => this.verbSelectionChange(index)} />
            );
        })
        return (
            <React.Fragment>
                <div className="row justify-content-center">
                    <h2 className="text-center">The following table contains my learned phrasal verbs</h2>
                </div>
                <TableHeader />
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
                               id="check-all-en"></input>
                        <label className="custom-control-label" htmlFor="check-all-en">Check all</label>
                    </div>
                </div>

                <div className="col-sm-5 col-4 pr-4 py-4 shadow-none bg-warning rounded-right border">
                    <div className="custom-control-right custom-checkbox text-right">
                        <input type="checkbox" 
                               className="custom-control-input" id="check-all-pl"></input>
                        <label className="custom-control-label-reverted right-pulled" htmlFor="check-all-pl">Check all</label>
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
                    <div className="col-sm-5 col-4 pl-3 py-2 rounded-left border-left border-bottom border-right">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" 
                                   className="custom-control-input" 
                                   id={this.props.verb.en.id}
                                   checked={this.props.verb.showEnglishVersion}
                                   onChange={() => this.props.onCheckBoxChange()} />

                    <Label isEn={true} 
                                   showValue={this.props.verb.showEnglishVersion} 
                                   id={this.props.verb.pl.id}
                                   value={this.props.verb.en.value} />
                        </div>
                    </div>
                    <div className="col-sm-5 col-4 pr-3 py-2 rounded-right border-right border-bottom border-right">
                        <div className="custom-control-right custom-checkbox text-right">
                            <input className="custom-control-input" 
                                   type="checkbox" 
                                   id={this.props.verb.pl.id}
                                   checked={!this.props.verb.showEnglishVersion}
                                   onChange={() => this.props.onCheckBoxChange()} />
                            <Label isEn={false} 
                                   showValue={!this.props.verb.showEnglishVersion} 
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