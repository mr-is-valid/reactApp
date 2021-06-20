
import React, { useState } from 'react';
import clsx from 'clsx';
import './main.componet.css';
import { fade, withStyles, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Chip from '@material-ui/core/Chip';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

//import Perf from 'react-addons-pref';

const column = [
    { id: 'name', label: 'Name', minWidth: 170  , align: 'center',},
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 , align: 'center',},
    {
        id: 'population',
        label: 'Population',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'Size\u00a0(km\u00b2)',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'density',
        label: 'Density',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'options',
        label: 'options',
        minWidth: 100,
        align: 'center',
        format: (value) => value.toFixed(2),
    },
];


const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    }
}))(TableCell);


function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density};
}

const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
];



const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: '65vh',
    },

    inputRoot: {
        color: 'inherit',
    },

    grow: {
        flexGrow: 1,
    },

    filterText:  {
        width: '200px',
        alignItems: 'center',
        width: 'auto',
        minWidth: '200px',
        maxWidth: '400px',
    },

    title: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginBottom: '2%',
        marginTop: '1%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputRoot: {
        color: 'inherit',
    },

    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },

    customButton:{
        backgroundColor: '#00ca80',
        '&:hover': {
            backgroundColor: '#00ca4d',
        },
        color: 'white',
        height: '40px',
        width: '8vw',
        fontSize: '15'
    },

    customTableCell:{
        textAlign: 'center',
        alignItems: 'center'
    },


    customInIconButton:{
        minWidth: '40px',
        width: '40px',
        marginRight: '5%',
    },

}));



export default function TicketsView() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [personName, setPersonName] = React.useState([]);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    //const [tableData, setTableData] = useState([{ text: 'Learn Hooks' }]);

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleChange = (event) => {
        setPersonName(event.target.value);
    };
    

    return (
        <div>
            <div className={classes.title}>
                <h2>Tickets View</h2>
                <Button
                    variant="contained"
                    className={classes.customButton}
                    onClick={handleClickOpen}
                    startIcon={<AddIcon />} >
                    Add Ticket
                </Button>
            </div>

            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }}
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                />

                <FormControl>
                    <InputLabel>Filter By</InputLabel>
                    <Select className={classes.filterText}
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<Input />}
                        renderValue={(selected) => selected.join(', ')}
                        >
                        {names.map((name) => (
                            <MenuItem key={name} value={name}>
                            <Checkbox checked={personName.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                    <TableRow>
                        {column.map((column) => (
                        <StyledTableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                        >
                            {column.label}
                        </StyledTableCell>
                        ))}
                    </TableRow>
                    </TableHead>
                <TableBody>
                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                <TableCell className={classes.customTableCell}>{row.name}</TableCell>

                                <TableCell className={classes.customTableCell}>{row.code}</TableCell>

                                <TableCell className={classes.customTableCell}>{row.population}</TableCell>

                                <TableCell className={classes.customTableCell}>{row.size}</TableCell>

                                <TableCell className={classes.customTableCell}>{row.density}</TableCell>
                                
                                <TableCell className={classes.customTableCell}>
                                    <Button
                                        variant="contained" color="secondary"
                                        className={classes.customInIconButton} >
                                        <DeleteIcon/>
                                    </Button>

                                    <Button
                                        variant="contained" color="primary"
                                        className={classes.customInIconButton}>
                                        <EditIcon/>
                                    </Button>
                                </TableCell>
                        </TableRow>
                        );
                    })}
                </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
            </Paper>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">

                <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous location data to
                        Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

