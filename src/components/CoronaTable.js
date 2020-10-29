import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(country, newCases, totalCases, totalRecoveries, totalDeaths) {
    return { country, newCases, totalCases, totalRecoveries, totalDeaths };
}

let rows = [];

const CoronaTable = (props) => {
    const classes = useStyles();

    props.data.forEach(country => {
        rows.push(createData(country.Country, country.NewConfirmed, country.TotalConfirmed, country.TotalRecovered, country.TotalDeaths))
    })

    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Country</TableCell>
                            <TableCell align="right">New Cases</TableCell>
                            <TableCell align="right">Total Cases</TableCell>
                            <TableCell align="right">Total Recoveries</TableCell>
                            <TableCell align="right">Total Deaths</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.country}
                                </TableCell>
                                <TableCell align="right">{row.newCases}</TableCell>
                                <TableCell align="right">{row.totalCases}</TableCell>
                                <TableCell align="right">{row.totalRecoveries}</TableCell>
                                <TableCell align="right">{row.totalDeaths}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default CoronaTable
