import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Radio, Select, Input } from 'antd';
import numeral from 'numeral';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: 40%;
  height: 100%;
  padding: 30px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  background-color: white;
`;

const Type = styled.span`
  margin-right: 8px;
  align-self: flex-start;
`;

const RadioContainer = styled(Radio.Group)`
  align-self: flex-start;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  background-color: white;
  margin: 20px 0;
  width: 100%;
`;

const Label = styled.span`
  margin-right: 8px;
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
      type: 1,
    };
  }

  render() {
    const { fields, onSubmit } = this.props;
    const { type } = this.state;

    return (
      <Container>
        {fields.map((field, i) =>
          field.type === 'select' ? (
            <InputContainer>
              <Label>{field.label}</Label>
              <Select defaultValue="lucy" style={{ width: 120 }} onChange={() => {}}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
              </Select>
            </InputContainer>
          ) : (
            <InputContainer>
              <Label>{field.label}</Label>
              <Input
                onChange={e => this.setState({ [field.name]: e.target.value })}
                value={
                  field.isMoney
                    ? numeral(this.state[field.name]).format('$0,0.[00]')
                    : this.state[field.name]
                }
              />
            </InputContainer>
          )
        )}
        <RadioContainer onChange={e => this.setState({ type: e.target.value })} value={type}>
          <Type>Type:</Type>
          <Radio value={1}>Single</Radio>
          <Radio value={2}>Multiple</Radio>
        </RadioContainer>
        <Button type="primary" onClick={() => onSubmit}>
          Register
        </Button>
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
