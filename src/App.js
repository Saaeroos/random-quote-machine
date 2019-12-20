import React, { Component } from 'react';
import QuoteMachine from './components/QuoteMachine'

import 'typeface-roboto'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core'
import { random } from 'lodash'

const styles = {
    container: {
        display: 'flex',
        height: '100vh',
        alignItems: 'center'
    }
}

class App extends Component {
    state = {
        quotes: [],
        selectedIndex: null
    }
    componentDidMount() {
        fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
        .then(data => data.json())
        .then(quotes => (this.setState({quotes}, () => {this.newQuoteIndex()}
        )))
    }
    selectedQuoteIndex = () => {
        if(!this.state.quotes.length){
            return undefined;
        }
        return random(0, this.state.quotes.length-1)
    }
    
    get selectedQuote() {
        if(!this.state.quotes.length || !Number.isInteger(this.state.selectedIndex)){
            return undefined;
        }
        return this.state.quotes[this.state.selectedIndex]
    }

    newQuoteIndex = () => {
        this.setState({selectedIndex: this.selectedQuoteIndex()})
    }

    render() {
        return (
            <Grid id="quote-box" className={this.props.classes.container } justify="center" container>
                <Grid xs={11} lg={8} item>
                    {this.selectedQuote?
                        <QuoteMachine selectedQuote={this.selectedQuote}
                            newQuote={this.newQuoteIndex}/>
                    :null}
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(App);