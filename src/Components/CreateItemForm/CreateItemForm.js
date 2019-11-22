import React, { Component } from "react";
import styled from "styled-components";
import { Button, Radio, Select, Input, Form } from "antd";
import PropTypes from "prop-types";

const Container = styled.div`
  width: 500px
  padding: 30px;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const Type = styled.span`
  margin-right: 8px;
  margin-left: 10.7%;
  align-self: flex-start;
`;

const SelectContainer = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  padding-right: 53%;
  flex-direction: row;
  align-items: center;
  background-color: white;
  justify-content: flex-end;
`;

const InputContainer = styled.div`
  width: 100%;
  min-width: 290px;
  display: flex;
  margin: 20px 0;
  flex-direction: row;
  align-items: center;
  background-color: white;
  justify-content: flex-end;
`;

const Label = styled.span`
  margin-right: 8px;
`;

const SubmitButton = styled(Button)`
  margin-left: 30px;
  margin: 20px 85px;
`;

const { Option } = Select;

class CreateItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      description: "",
      price: 0,
      parent: null,
      type: "Single",
      children: [],
      quantity: 1,
      errors: { code: false, description: false, price: false }
    };
  }

  render() {
    const { fields, createItem, items } = this.props;
    const { type, errors, code, description, price } = this.state;

    const handleChangeValidate = (fieldName, value) => {
      if (fieldName === "code") {
        if (value.length === 0 || value.length > 14 || /\s/.test(value)) {
          this.setState({ errors: { ...errors, [fieldName]: true } });
        } else {
          this.setState({ errors: { ...errors, [fieldName]: false } });
        }
        return;
      }
      if (fieldName === "description") {
        if (value.length === 0) {
          this.setState({ errors: { ...errors, [fieldName]: true } });
        } else {
          this.setState({ errors: { ...errors, [fieldName]: false } });
        }
      }

      if (fieldName === "price") {
        if (!value || value === 0) {
          this.setState({ errors: { ...errors, [fieldName]: true } });
        } else {
          this.setState({ errors: { ...errors, [fieldName]: false } });
        }
      }
    };

    const handleChange = (fieldName, value) => {
      this.setState({ [fieldName]: value });
      handleChangeValidate(fieldName, value);
    };

    const handleSubmit = () => {
      if (code === "" || code.length > 14 || /\s/.test(code)) {
        this.setState({ errors: { ...errors, code: true } });
        return;
      }
      if (description === "") {
        this.setState({ errors: { ...errors, description: true } });
        return;
      }
      if (!price || price === 0) {
        this.setState({ errors: { ...errors, price: true } });
        return;
      }
      const { errors, ...item } = this.state;
      createItem(item);
      this.setState({
        code: "",
        description: "",
        price: "",
        type: "Single"
      });
    };

    return (
      <Container>
        <Form layout="inline">
          {fields.map((field, key) => {
            if (field.type === "select" && items) {
              return (
                <SelectContainer>
                  <Label>{field.label}</Label>
                  <Select
                    defaultValue="None"
                    style={{ width: 120 }}
                    onChange={option => this.setState({ parent: option })}
                  >
                    {Object.keys(items).map((code, i) => (
                      <Option value={code}>{code}</Option>
                    ))}
                    <Option value={null}>None</Option>
                  </Select>
                </SelectContainer>
              );
            }
            if (field.type === "radio") {
              return (
                <Radio.Group
                  style={{ margin: "17px 0", display: "flex" }}
                  onChange={e => this.setState({ type: e.target.value })}
                  value={type}
                >
                  <Type>{field.label}</Type>
                  {field.values.map((value, e) => (
                    <Radio value={value}>{value}</Radio>
                  ))}
                </Radio.Group>
              );
            }
            return (
              <InputContainer>
                <Form.Item
                  label={field.label}
                  validateStatus={errors[field.name] && "error"}
                  help={errors[field.name] && field.errorMessage}
                >
                  <Input
                    style={{ width: "340px" }}
                    onChange={e => handleChange(field.name, e.target.value)}
                    value={
                      field.isMoney
                        ? this.state[field.name]
                        : this.state[field.name]
                    }
                  />
                </Form.Item>
              </InputContainer>
            );
          })}

          <SubmitButton type="primary" onClick={handleSubmit}>
            Create Item
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}

CreateItemForm.propTypes = {
  fields: PropTypes.shape({
    map: PropTypes.func,
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    isMoney: PropTypes.bool,
    isRequired: PropTypes.bool
  }).isRequired,
  createItem: PropTypes.func.isRequired
};

export default CreateItemForm;
