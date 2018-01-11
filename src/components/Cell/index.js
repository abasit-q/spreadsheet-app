import React, {Component} from 'react';

class CellContainer extends Component{
    render() {
        const {row, col, updateCell} = this.props;
        switch (col.type){
            case 'text':
            case 'number':
                return (
                    <input data-rowid={row._id} data-colid={col._id}
                           type={col.type} defaultValue={row.cellValuesByColumnIds[col._id]}
                           onChange={updateCell.bind(this)}/>
                );
            case 'select':
                return (
                    <select data-rowid={row._id} data-colid={col._id}
                        defaultValue={row.cellValuesByColumnIds[col._id] ? row.cellValuesByColumnIds[col._id] : ''}
                            onChange={updateCell.bind(this)}>
                        <option value="" disabled >select</option>
                        {
                            col.options.map((option, i) => {
                                return (
                                    <option key={i} value={option}>{option}</option>
                                )
                            })
                        }
                    </select>
                );
            case 'sum':
                let sum = 0;
                col.options.forEach(id => { sum += row.cellValuesByColumnIds[id] ? parseInt(row.cellValuesByColumnIds[id], 10) : 0 });
                return (
                    <input data-rowid={row._id} data-colid={col._id} type='number' readOnly={true}
                           value={sum} onChange={updateCell.bind(this)}/>
                );
            default:
                return '';
        }
    }
}

export default CellContainer;