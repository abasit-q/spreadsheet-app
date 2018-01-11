import React, {Component} from 'react';
import '../../assets/css/spreadSheet.css';
import FontAwesome from 'react-fontawesome';
import '../../assets/css/font-awesome.min.css';
import Cell from '../Cell';

class SpreadSheet extends Component{
    render() {
        const { columnData, rowData, addColumn, openPopup, deleteColumn, addRow, deleteRow, updateCell, signOut } = this.props;
        return (
            <div className="spreadsheet-wrapper">
                <div className="sign-out" onClick={signOut.bind(this)}>
                    <FontAwesome name="sign-out"/>
                </div>
                <div className="grid-wrapper">
                    <table className="spreadsheet">
                        <thead>
                        <tr>
                            {
                                columnData.map((col, i) => {
                                    return (
                                        <td key={col._id}>
                                            <span className="col-caption">{col.title}</span>
                                            <span className="col-actions">
                                                {
                                                    i !== 0 &&
                                                        <span data-colid={col._id} onClick={deleteColumn.bind(this)}>
                                                            <FontAwesome name="trash"/>
                                                        </span>
                                                }
                                                <span onClick={(e) => openPopup(e, col)}>
                                                    <FontAwesome name="pencil"/>
                                                </span>
                                            </span>
                                        </td>
                                    )
                                })
                            }
                        </tr>
                        </thead>
                        <tbody>
                        {
                            rowData.map(row => {
                                return (
                                    <tr key={row._id}>
                                        {
                                            columnData.map((col, i) => {
                                                return (
                                                    <td key={col._id}>
                                                        {
                                                            i === 0 &&
                                                            <span className="row-actions" data-rowid={row._id} onClick={deleteRow.bind(this)}>
                                                                <FontAwesome name="trash"/>
                                                            </span>
                                                        }
                                                        <Cell row={row} col={col} updateCell={updateCell.bind(this)} />
                                                    </td>
                                                )
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                    <div className="add-col" onClick={addColumn.bind(this)}>
                        <FontAwesome name="plus"/>
                    </div>
                    <div className="add-row" onClick={addRow.bind(this)}>
                        <FontAwesome name="plus"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default SpreadSheet;