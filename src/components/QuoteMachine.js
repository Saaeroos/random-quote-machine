import React from 'react'

// import Button from './Button'

import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'
import IconButton from '@material-ui/core/IconButton'

const QuoteMachine = (props) => {
    return (
        <Card>
            <CardContent>
                    <Typography>
                        <span id="text">{props.selectedQuote.quote}</span> - <span id="author">{props.selectedQuote.author}</span>
                    </Typography>
            </CardContent>
            <CardActions>
                <Button id="new-quote" size="small" onClick={props.newQuote}>next quote</Button>
                <IconButton
                    id="tweet-quote"
                    targe="_blank"
                    href={encodeURI(`https://twitter.com/intent/tweet?text=${props.selectedQuote.quote}&hashtags=getmotivated`)}
                >
                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>

                </IconButton>
            </CardActions>
        </Card>
    )
}

export default QuoteMachine
