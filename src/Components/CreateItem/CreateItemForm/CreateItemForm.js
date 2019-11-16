import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Radio, Select, Input } from 'antd';
import numeral from 'numeral';
import PropTypes from 'prop-types';

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
  align-self: flex-end;
  margin: 20px 57% 20px 0;
`;

const { Option } = Select;

class CreateItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      description: '',
      price: 0,
      order: '',
      parent: null,
      type: 0,
    };
  }

  render() {
    const { fields, onSubmit } = this.props;
    const { type } = this.state;

    return (
      <Container>
        {fields.map((field, i) => {
          if (field.type === 'select') {
            return (
              <SelectContainer>
                <Label>{field.label}</Label>
                <Select
                  defaultValue="None"
                  style={{ width: 120 }}
                  onChange={option => this.setState({ parent: option })}
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="none">None</Option>
                </Select>
              </SelectContainer>
            );
          }
          if (field.type === 'radio') {
            return (
              <Radio.Group
                style={{ margin: '17px 0' }}
                onChange={e => this.setState({ type: e.target.value })}
                value={type}
              >
                <Type>{field.label}</Type>
                {field.values.map((value, e) => (
                  <Radio value={e}>{value}</Radio>
                ))}
              </Radio.Group>
            );
          }
          return (
            <InputContainer>
              <Label>{field.label}</Label>
              <Input
                style={{ width: '80%' }}
                onChange={e => this.setState({ [field.name]: e.target.value })}
                value={
                  field.isMoney
                    ? numeral(this.state[field.name]).format('$0,0.[00]')
                    : this.state[field.name]
                }
              />
            </InputContainer>
          );
        })}

        <SubmitButton type="primary" onClick={() => onSubmit}>
          Create Item
        </SubmitButton>
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
    isRequired: PropTypes.bool,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default CreateItemForm;
