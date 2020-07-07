import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class PortalView extends Component {
    constructor(props) {
      super(props);
      this.state = {
        formData: {
            userEmail: " ",
            loanAmount: " ",
            tenure: " ",
            annualIncome: " "
        }
      }
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('amountValid', (value) => {
            if (value > 0 && value < 9999999) {
                return true;
            }
            return false;
        });
        ValidatorForm.addValidationRule('tenureValid', (value) => {
            if (value >= 5 && value < 40) {
                return true;
            }
            return false;
        });
        ValidatorForm.addValidationRule('incomeValid', (value) => {
            if (value >= 25000 && value < 999999) {
                return true;
            }
            return false;
        });
    }    

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    } 

    handleSubmit = () => {
        this.state.formData.userEmail = this.props.userName;
        this.props.handleAddQuote(this.state.formData);
      };

    render() {
        let quoteSummary = null;
        if (this.props.isAddQuoteSuccess){
            quoteSummary = (
                <Container maxWidth='xs'>
                    <Typography color="textSecondary" component="h4" variant="h6">
                        Loan Quotation generated successfully!!!
                    </Typography>
                    <QuoteSummary quoteDetails={this.props.quoteDetails}/>
                </Container>
            );
        }
        /*else {
            quoteSummary = (
                <Container maxWidth='xs'>
                    <Typography color="textSecondary" component="h4" variant="h6">
                        {this.props.quoteDetails}
                    </Typography>
                </Container>
            );
        }*/

        let viewSummary = null;
        if (this.props.isViewSuccess){
            viewSummary = (
                <Container maxWidth='lg'>
                    <Typography color="textSecondary" component="h4" variant="h6">
                        Summary of Loan Quotations
                    </Typography>
                    <ViewSummary quoteDetails={this.props.quoteDetails}/>
                </Container>
            );
        }
        else if (this.props.isViewQuotesSelected){
            viewSummary = (
                <Container maxWidth='xs'>
                    <Typography color="textSecondary" component="h4" variant="h6">
                        Please wait loading...
                    </Typography>
                </Container>
            );
        }
        else {
            viewSummary = (
                <Container maxWidth='xs'>
                    <Typography color="textSecondary" component="h4" variant="h6">
                        No Quotes found
                    </Typography>
                </Container>
            );
        }

        const { formData } = this.state;
        if(this.props.menuSelected == "addQuote"){
            return(
                <div>
                    <Container maxWidth="xs">
                        <div>
                            <Typography color="textSecondary" component="h1" variant="h5">
                                Loan Quotation
                            </Typography>
                            <ValidatorForm
                                onSubmit={this.handleSubmit}
                                instantValidate={false}
                            >
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="loanAmount"
                                label="Loan Amount"
                                type="number"
                                name="loanAmount"
                                autoFocus
                                onChange={this.handleChange}
                                value={formData.loanAmount}
                                validators={['amountValid', 'required']}
                                errorMessages={['Loan Amount should be between 1 and 9999999', 'this field is required']}
                                />
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="tenure"
                                label="Loan Tenure (in Years)"
                                type="number"
                                id="tenure"
                                onChange={this.handleChange}
                                value={formData.tenure}
                                validators={['tenureValid', 'required']}
                                errorMessages={['Loan Tenure should be between 5 and 40', 'this field is required']}
                                />
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="annualIncome"
                                label="Annual Income"
                                type="number"
                                name="annualIncome"
                                autoFocus
                                onChange={this.handleChange}
                                value={formData.annualIncome}
                                validators={['incomeValid', 'required']}
                                errorMessages={['Annual Income should be between 25000 and 999999', 'this field is required']}
                                />                                
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                >
                                Add Quote
                                </Button>
                            </ValidatorForm>
                        </div>
                    </Container>
                    {quoteSummary}
                </div>
            )
        }
        if(this.props.menuSelected == "viewQuote"){
            return(
                <div>
                    {viewSummary}
                </div>
            )
        }
        if(this.props.menuSelected == ""){
            return(
                <div>
                    <Typography color="textSecondary" component="h1" variant="h4">
                        Welcome to Sales Portal!!!
                    </Typography>
                </div>
            )
        }
    }
}

const useStyles = makeStyles({
    table: {
      minWidth: 200,
    },
  });

function QuoteSummary(props) {
    const classes = useStyles();
    return (
      <TableContainer variant='outlined' component={Paper}>
        <Table className={classes.table} size="small" aria-label="quote details">
          <TableBody>
            <TableRow>
              <TableCell>Principle (£)</TableCell>
              <TableCell>{props.quoteDetails.data.principal}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Interest Rate</TableCell>
              <TableCell>{props.quoteDetails.data.interestRate}</TableCell>
            </TableRow>   
            <TableRow>           
              <TableCell>Tenure</TableCell>
              <TableCell>{props.quoteDetails.data.tenure}</TableCell>
            </TableRow>
            <TableRow>              
              <TableCell>Monthly EMI (£)</TableCell>
              <TableCell>{props.quoteDetails.data.monthlyEMI.toFixed(2)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Total Amount Payable (£)</TableCell>
              <TableCell>{props.quoteDetails.data.totalAmountPayable.toFixed(2)}</TableCell>
            </TableRow>
            <TableRow>              
              <TableCell>Total Interest (£)</TableCell>
              <TableCell>{props.quoteDetails.data.totalInterest.toFixed(2)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "#3366FF",
      color: theme.palette.common.white,
      fontSize: 16
    },
    body: {
      fontSize: 12,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  function ViewSummary(props) {
    const classes = useStyles();
    console.log(props.quoteDetails);
    const row = props.quoteDetails;
    return (
      <TableContainer variant='outlined' component={Paper}>
        <Table className={classes.table} aria-label="quote details">
            <TableHead>
                <TableRow>
                    <StyledTableCell align="right">Quote ID</StyledTableCell>
                    <StyledTableCell align="right">Principle (£)</StyledTableCell>
                    <StyledTableCell align="right">Interest Rate</StyledTableCell>
                    <StyledTableCell align="right">Tenure</StyledTableCell>
                    <StyledTableCell align="right">Monthly EMI (£)</StyledTableCell>
                    <StyledTableCell align="right">Total Amt Payable (£)</StyledTableCell>
                    <StyledTableCell align="right">Total Interest (£)</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {row.map((row) => (
                    <StyledTableRow key={row.quoteId}>
                    <StyledTableCell component="th" scope="row" align="right">
                        {row.quoteId}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.principal}</StyledTableCell>
                    <StyledTableCell align="right">{row.interestRate}</StyledTableCell>
                    <StyledTableCell align="right">{row.tenure}</StyledTableCell>
                    <StyledTableCell align="right">{row.monthlyEMI.toFixed(2)}</StyledTableCell>
                    <StyledTableCell align="right">{row.totalAmountPayable.toFixed(2)}</StyledTableCell>
                    <StyledTableCell align="right">{row.totalInterest.toFixed(2)}</StyledTableCell>
                    </StyledTableRow>
                ))}
            </TableBody>
        </Table>
      </TableContainer>
    );
  }  

export default PortalView;
