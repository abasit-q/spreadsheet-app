import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import '../../assets/css/font-awesome.min.css';
import '../../assets/css/popup.css';

class PopupContainer extends Component{
    state = {type: null, options: [], sumOptions: []};
    componentWillReceiveProps(nextProps){
        if (nextProps.colData){
            this.setState({type: nextProps.colData.type, options: nextProps.colData.options});
        }
    }
    getNumberColumns(){
        return this.props.columns.filter(col => col.type === 'number');
    }
    renderTypeOptions(){
        switch (this.state.type){
            case 'select':
                return (
                    <div className="select-options">
                        <label htmlFor="option-text">Enter Option Value:</label>
                        <input id="option-text" ref="optionText" type="text"/>
                        <button onClick={this.addOption.bind(this)} type="button">Add</button>
                        { this.renderOptions() }
                    </div>
                );
            case 'sum':
                return (
                    <div className="sum-options">
                        {
                            this.getNumberColumns().map((col, i) => {
                                return (
                                    <span key={i} onClick={e => this.addSumOption(e, col._id)} id={col._id}
                                          className={this.props.colData.options.indexOf(col._id) !== -1 ? 'sum-option no-events' : 'sum-option'}>{col.title}</span>
                                )
                            })
                        }
                        { this.renderSumOptions() }
                    </div>
                );
            default :
                return '';
        }
    }
    renderOptions(){
        return (
            <div className="options">
                {
                    this.state.options.map((option, i) => {
                        return (
                            <span onClick={e => this.deleteOption(i)} key={i} className="single-option">{option}</span>
                        );
                    })
                }
            </div>
        );
    }
    renderSumOptions(){
        return (
            <div className="options">
                {
                    this.state.options.map((option, i) => {
                        return (
                            <span onClick={e => this.deleteSumOption(i, option)} key={i} className="single-option">
                                { this.findColumnById(option).title }
                            </span>
                        );
                    })
                }
            </div>
        );
    }
    findColumnById(colId){
        return this.props.columns.filter(col => col._id == colId)[0];
    }
    addOption(){
        if (this.refs.optionText.value === '' || this.refs.optionText.value === undefined){
            return;
        }
        this.setState({options: [...this.state.options, this.refs.optionText.value]});
        this.refs.optionText.value = '';
    }
    deleteOption(i){
        let options = [...this.state.options];
        options.splice(i, 1);
        this.setState({options: options});
    }
    addSumOption(e, colId){
        e.target.classList.add('no-events');
        this.setState({options: [...this.state.options, colId]});
    }
    deleteSumOption(i, colId){
        let options = [...this.state.options];
        options.splice(i, 1);
        let node = document.getElementById(colId);
        if (node !== null){
            node.classList.remove('no-events');
        }
        this.setState({options: options});
    }
    updateColumn(){
        this.props.colData.options = this.state.options;
        this.props.colData.type = this.state.type;
        this.props.updateColumn(this.props.colData);
        this.props.closePopup();
    }
    updateType(e){
        this.setState({type: e.target.value, options: []});
        if (e.target.value === this.props.colData.type){
            this.setState({type: e.target.value, options: this.props.colData.options});
        }
    }
    updateTitle(e){
        this.props.colData.title = e.target.value;
    }
    render(){
        const {isVisible, colData, closePopup} = this.props;
        return isVisible ? (
            <div className="popup-wrapper">
                <div className="popup-content">
                    <div className="popup-header">
                        <input type="text" defaultValue={colData.title} onChange={this.updateTitle.bind(this)}/>
                        <span className="close-popup" onClick={closePopup.bind(this)}>
                            <FontAwesome name="times"/>
                        </span>
                    </div>
                    <div className="popup-body">
                        <div className="type-selector">
                            <label>Select Type</label>
                            <select id="types" defaultValue={colData.type} onChange={this.updateType.bind(this)}>
                                <option value="text">Text</option>
                                <option value="number">Number</option>
                                <option value="select">Select</option>
                                <option value="sum">Sum</option>
                            </select>
                        </div>
                        <div className="type-options">
                            { this.renderTypeOptions() }
                        </div>
                    </div>
                    <div className="popup-footer">
                        <button type="button" onClick={this.updateColumn.bind(this)}>Save</button>
                    </div>
                </div>
            </div>
        ) : '';
    }
}

export default PopupContainer;