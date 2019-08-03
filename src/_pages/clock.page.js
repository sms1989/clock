import React,{Component} from 'react';
import { Clock,ClockButton } from "../_components";

class ClockPage extends Component {

    state = {
        clockMode24: false,
        mode: 'clock'
    }

    changeClockMode = () => {
        this.setState({clockMode24: !this.state.clockMode24});
    }

    render () {
        return <div className="clock-page">
            <Clock clockMode={this.state.clockMode24}/>
            <div style={{marginTop: 20,width: 350,justifyContent: 'space-between'}}>
                <ClockButton onClick = {this.changeClockMode}>24/12</ClockButton>
                <ClockButton onClick={()=>{this.props.onChangePage('stopwatch')}}>StopWatch</ClockButton>
                <ClockButton >Timer</ClockButton>
            </div>
        </div>
    }
}

export {ClockPage}