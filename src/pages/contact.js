

import React from "react";
import Layout from '../layout'
import { StyledLabel, StyledInput } from '../styles/contactStyles'
import { Button } from '../components/styles/ContactButtonStyles'
import PageInfo from '../components/PageInfo';


const pageData = {
  title: 'contact',
  paragraph: `While artists work from real to the abstract, architects must work from the abstract to the real.`,
};

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <Layout>
        <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/xjvaaldy"
          method="POST"
        >
           <StyledLabel>Name:</StyledLabel>
          <StyledInput type="text" name="name" />
          <StyledLabel>Email:</StyledLabel>
          <StyledInput type="email" name="email" />
          <StyledLabel>Message:</StyledLabel>
          <StyledInput as="textarea"  type="textarea" name="message" />
          {status === "SUCCESS" ? <p>Thanks!</p> : <Button>Submit</Button>}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      </Layout>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

