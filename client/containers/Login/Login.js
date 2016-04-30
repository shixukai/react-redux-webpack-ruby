import React, { PropTypes } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;
const createForm = Form.create;

@createForm()

class Login extends React.Component {
  static propTypes = {
    form: PropTypes.object,
  }

  constructor(props) {
    super(props);

    this.state = {};
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/login', {method: 'GET'});
    console.log(this)
  }

  render() {
    const { getFieldProps } = this.props.form;
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormItem
          label="账：">
          <Input placeholder="请输入账户名"
            {...getFieldProps('userName')} />
        </FormItem>
        <FormItem
          label="密码：">
          <Input type="password" placeholder="请输入密码"
            {...getFieldProps('password')} />
        </FormItem>
        <FormItem>
          <label className="ant-checkbox-inline">
            <Checkbox
              {...getFieldProps('agreement')} />记住我
          </label>
        </FormItem>
        <Button type="primary" htmlType="submit">登录</Button>
      </Form>
    );
  }
}

export default Login;
