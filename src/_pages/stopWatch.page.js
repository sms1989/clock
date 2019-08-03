import React,{Component} from 'react';
import { StopWatch,ClockButton } from "../_components";

class StopWatchPage extends Component {

    state = {
        clockMode24: false,
        mode: 'clock'
    }

    changeClockMode = () => {
        this.setState({clockMode24: !this.state.clockMode24});
    }

    changeToStopWatch = () =>{
        this.setState({mode: 'stopWatch'});
    }

    render () {
        return <div className="clock-page">
            <StopWatch clockMode={this.state.clockMode24}/>
            <div style={{marginTop: 20,width: 350,justifyContent: 'space-between'}}>
                <ClockButton onClick = {this.changeClockMode}>24/12</ClockButton>
                {/* <ClockButton onClick={this.changeToStopWatch}>StopWatch</ClockButton>
                <ClockButton >Timer</ClockButton> */}
            </div>
        </div>
    }
}

export {StopWatchPage}