import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Link from "@material-ui/core/Link";

class PortalView extends Component {
    constructor(props) {
      super(props);
      this.state = {
        formData: {
            loanAmount: null,
            tenure: null,
            annualIncome: null
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
        this.props.handleAddQuote(this.state.formData);
      };

    render() {
        const { formData } = this.state;
        if(this.props.menuSelected == "addQuote"){
            return(
                <div>
                    <Container maxWidth="xs">
                        <div>
                            <Typography component="h1" variant="h6">
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
                    <Container maxWidth='xs'>
                        <h1>Created Quote will come here</h1>
                    </Container>
                </div>
            )
        }
        if(this.props.menuSelected == "viewQuote"){
            return(
                <div>
                    <h1>View Quotes</h1>
                </div>
            )
        }
        if(this.props.menuSelected == ""){
            return(
                <div>
                <h1>Welcome to Sales portal</h1>
                </div>
            )
        }
    }
}

export default PortalView;
