import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchData, addColumn, deleteColumn, updateColumn, addRow, deleteRow, updateCell, signOut } from '../../actions'
import SpreadSheet from '../../components/SpreadSheet';
import PopupContainer from '../Popup';

class SpreadSheetContainer extends Component{
    state = {openPopup: false, colData: null};
    componentWillMount(){
        this.props.fetchData(this.props.token);
        if (!this.props.loggedIn){
            this.props.history.push('/signin');
        }
    }
    componentWillReceiveProps(nextProps){
        if (this.props.loggedIn && !nextProps.loggedIn){
            this.props.history.push('/signin');
        }
    }
    addColumn(){
        this.props.addColumn(this.props.sheetData._id, this.props.token);
    }
    deleteColumn(e){
        this.props.deleteColumn({
            sheetId: this.props.sheetData._id,
            _id: e.currentTarget.dataset.colid
        }, this.props.token);
    }
    addRow(){
        this.props.addRow(this.props.sheetData._id, this.props.token);
    }
    deleteRow(e){
        this.props.deleteRow({
            sheetId: this.props.sheetData._id,
            _id: e.currentTarget.dataset.rowid
        }, this.props.token);
    }
    updateCell(e){
        this.props.updateCell({
            sheetId: this.props.sheetData._id,
            rowId: e.target.dataset.rowid,
            data: {
                columnId: e.target.dataset.colid,
                value: e.target.value
            }
        }, this.props.token);
    }
    openPopup(e, colData){
        this.setState({openPopup: true, colData: colData});
    }
    closePopup(){
        this.setState({openPopup: false, colData: null});
    }
    updateColumn(data){
        this.props.updateColumn({
            sheetId: this.props.sheetData._id,
            data: data
        }, this.props.token);
    }
    signOut(){
        this.props.signOut();
    }
    render(){
        return this.props.fetching ? '' : (
            <div>
                <SpreadSheet rowData={this.props.rowData} columnData={this.props.columnData}
                             addColumn={this.addColumn.bind(this)} deleteColumn={this.deleteColumn.bind(this)}
                             openPopup={this.openPopup.bind(this)}
                             addRow={this.addRow.bind(this)} deleteRow={this.deleteRow.bind(this)}
                             updateCell={this.updateCell.bind(this)} signOut={this.signOut.bind(this)} />
                <PopupContainer isVisible={this.state.openPopup} colData={this.state.colData} columns={this.props.columnData}
                                closePopup={this.closePopup.bind(this)} updateColumn={this.updateColumn.bind(this)}
                                type="select"/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return ({
        loggedIn: state.User.loggedIn,
        token: state.User.token,
        fetching: state.Spreadsheet.fetching,
        sheetData: state.Spreadsheet.sheetData,
        rowData: state.Spreadsheet.rowData,
        columnData: state.Spreadsheet.columnData
    });
}

export default connect(mapStateToProps, {fetchData, addColumn, updateColumn, deleteColumn, addRow, deleteRow, updateCell, signOut}) (SpreadSheetContainer);