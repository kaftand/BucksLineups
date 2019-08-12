import leaguedashlineups2 from "./Data/leaguedashlineups2";
import leaguedashlineups3 from "./Data/leaguedashlineups3";
import leaguedashlineups4 from "./Data/leaguedashlineups4";
import leaguedashlineups5 from "./Data/leaguedashlineups5";
import React from 'react'
class StatContainer extends React.Component {
    constructor(props) {
        super(props)
    }
    findRightRow (rowSet) {
        const nPlayers = this.props.lineup.length
        for(var iPlayer = 0; iPlayer < nPlayers; iPlayer++) {
            rowSet = rowSet.filter(row => row[2].toUpperCase().includes(this.props.lineup[iPlayer].lastName.toUpperCase()))
        }
        return rowSet
    }
    render () {
        const nPlayers = this.props.lineup.length
        var data = {}
        if (nPlayers > 5) {
            return <div> Too many players selected</div>
        } else if (nPlayers < 2) {
            return <div> Select atleast 2 players</div>
        } else if (nPlayers===2) {
            data = leaguedashlineups2
        } else if (nPlayers===3) {
            data = leaguedashlineups3
        } else if (nPlayers===4) {
            data = leaguedashlineups4
        } else if (nPlayers===5) {
            data = leaguedashlineups5
        }
        const rowToDisplayArray = this.findRightRow(data.resultSets[0].rowSet)
        if (rowToDisplayArray.length === 0) {
            return <div> This lineup never played together</div>
        }
        const rowToDisplay = rowToDisplayArray[0]
        const playerNames = rowToDisplay[2]
        const statsToDisplay = [5,6,7,8,9,11,13,15,17,23,26].map(i => rowToDisplay[i])
        const headersToDisplay = [5,6,7,8,9,11,13,15,17,23,26].map(i => data.resultSets[0].headers[i])
        const header = headersToDisplay.map(name => <th key={name}>{name}</th>)
        const body = statsToDisplay.map((stat,i) => <td key ={i}>{stat}</td>)
        return (<div><div>{playerNames}</div><table style={{display:"inline-block"}}><thead><tr>{header}</tr></thead><tbody><tr>{body}</tr></tbody></table></div>)
    }
}

export default StatContainer