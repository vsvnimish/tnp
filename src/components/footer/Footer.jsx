import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    temp: {
        paddingTop: "100rem",
        textAlign: "center"
        },
});


const Footer = (props) => {
    const classes = useStyles(props);

    return (
        <div className={classes.temp}>
            {/* This is the HTML for footer */}
            <h2>This is footer</h2>
        </div>
    )
}

export default Footer
