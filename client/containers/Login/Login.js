import React, { PropTypes } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { LoginActions } from 'actions';
import {connect} from 'react-redux';

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
    console.log('收到表单值：', this.props.form.getFieldsValue());
    this.props.login(this.props.form.getFieldsValue());
  }

  render() {
    const { getFieldProps } = this.props.form;
    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        <FormItem
          label="邮箱：">
          <Input placeholder="请输入邮箱地址"
            {...getFieldProps('email')} />
        </FormItem>
        <FormItem
          label="密码：">
          <Input type="password" placeholder="请输入密码"
            {...getFieldProps('password')} />
        </FormItem>
        <FormItem>
          <label className="ant-checkbox-inline">
            <Checkbox
              {...getFieldProps('remember_me')} />记住我
          </label>
        </FormItem>
        <Button type="primary" htmlType="submit">登录</Button>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {isAuth: state.login.get('isAuth')};
}

export default connect(mapStateToProps, { ...LoginActions })(Login)
