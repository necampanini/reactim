import React from 'react'
import $ from 'jquery'

export default class ContainerContainer extends React.Component {
    constructor(props){
        super(props);

        this.renderGetButton = this.renderGetButton.bind(this);
        this.goGetLeaderBoardList = this.goGetLeaderBoardList.bind(this);
        this.renderLeaderBoardEntries = this.renderLeaderBoardEntries.bind(this);

        this.state = {
            leaderBoardEntries: []
        }
    }

    componentDidMount() {
        this.goGetLeaderBoardList()
    }

    render() {

        return (
            <div>
                {this.renderLeaderBoardEntries()}
            </div>
        )
    }

    //render helpers
    renderLeaderBoardEntries() {
        debugger;
        var entries = this.state.leaderBoardEntries || [];

        var nodes = entries.map( (entry, key) => {
            return (
                <div key={key + entry.Title}>
                    <h2>{entry.Title}</h2>
                    <h3>{entry.VoteCount}</h3>
                </div>
            )
        });

        return (
            <div>{nodes}</div>
        )
    }

    renderGetButton() {
        return (
            <button onClick={this.goGetLeaderBoardList}>
                GO GET LIST
            </button>
        )
    }

    goGetLeaderBoardList() {
        debugger;
        var urlPath = '/Home/GetAllLeaderBoardData/';

        var _this = this;

        $.ajax({
            url: urlPath,
            success: (result) => {
                _this.setState({
                    leaderBoardEntries: result
                })
            },
            error: (err, xhrStatus) => {
                console.log('error: ' + err.stack);
                console.log('xhr status: ' + xhrStatus);
            }
        });
    }
}