import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

//Styles for the Material UI Modal
const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.action.hover,
        border: '2px solid #4caf50',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const CountryDetailsModal = (props) => {
    const classes = useStyles();
    const deathRate = (props.country.TotalDeaths * 100) / props.country.TotalConfirmed

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={props.open}
                onClose={props.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.open}>
                    <div className={classes.paper}>
                        <div className='country-details'>
                            <h1 className='country-details-country-code'>{props.country.CountryCode}</h1>
                            <p className='country-details-country-name'>{props.country.Country}</p>
                            <hr />
                            <p>New Cases: {props.country.NewConfirmed}</p>
                            <p>New Recoveries: {props.country.NewRecovered}</p>
                            <p>New Deaths: {props.country.NewDeaths}</p>
                            <p>Total Cases: {props.country.TotalConfirmed}</p>
                            <p>Total Recoveries: {props.country.TotalRecovered}</p>
                            <p>Total Deaths: {props.country.TotalDeaths}</p>
                            <p>Death Rate: {deathRate.toFixed(2)}%</p>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}

export default CountryDetailsModal