import React, { Component } from 'react';
import { Input, Button, Search, Table, Icon, Grid, Dialog, Form, Checkbox, Field } from '@icedesign/base';
import Notification from '@icedesign/notification';
import axios from "axios";

const {Row, Col} = Grid;
const FormItem = Form.Item;

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
        users: [],
    };
    this.field = new Field(this);
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = (para = {name: '', enable: null}) => {
    axios.get("/api/system/users/get",{
        params: para,
    }).then((response) => {
        this.setState({
            users: response.data.users,
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  editUser = (recod) => {
    console.log(recod)
  }

  deleteUser = (recod) => {
    console.log(recod)
  }

  renderCellButton = (recod) => {
      return (
          <div>
            <Icon type="edit" style={styles.button} size="small" onClick={() => this.editUser(recod)} /> |{' '}
            <Icon type="ashbin" style={styles.button} size="small" onClick={() => this.deleteUser(recod)} />
          </div>
      )
  }
  onSearch = (v) => {
      this.getUsers({
          name: v.key,
          enable: true,
      });
  }

  onOpen = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onAddUser = () => {
      const userInfo = this.field.getValues();
      axios.post("/api/system/users/put",{
        ...userInfo,
    }).then((response) => {
        if(response.data.status) {
            this.setState({
                visible: false,
            });
        } else {
            Notification.error({
                message: response.data.msg.message,
            })
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    const init = this.field.init;
    const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 18 },
    };
    return (
        <div style={styles.container}>
            <Row>
                <Col span={12}>
                    <Button onClick={this.onOpen}>新增</Button> | <Button>批量删除</Button>
                </Col>
                <Col span={12}>
                    <div style={{ width: 300,float:'right' }}>
                        <Search
                            onSearch={this.onSearch}
                            autoWidth
                            />
                    </div>
                </Col>
            </Row>
            <Table
                dataSource={this.state.users}
                rowSelection={this.state.rowSelection}
                primaryKey="number"
                style={styles.table}
            >
                <Table.Column align="center" title="操作"  dataIndex="userCode" cell={(value, i, recod) => this.renderCellButton(recod) } />
                <Table.Column align="center" title="用户代码" dataIndex="userCode" />
                <Table.Column align="center" title="用户名称" dataIndex="userName" />
                <Table.Column align="center" title="账号" dataIndex="accountName" />
                <Table.Column align="center" title="性别" dataIndex="gander" />
                <Table.Column align="center" title="年龄" dataIndex="age" />
                <Table.Column align="center" title="地区" dataIndex="address" />
                <Table.Column align="center" title="QQ" dataIndex="QQ" />
                <Table.Column align="center" title="E-Mail" dataIndex="email" />
                <Table.Column align="center" title="Phone" dataIndex="phone" />
                <Table.Column align="center" title="状态" dataIndex="enable" cell={(recod) => recod? <Icon type="select" size="small" /> : <Icon type="close" size="small" /> } />
                <Table.Column align="center" title="操作时间" dataIndex="operateTime" />
            </Table>
            <Dialog
                visible={this.state.visible}
                onOk={this.onAddUser}
                closable="esc,mask,close"
                onCancel={this.onClose}
                onClose={this.onClose}
                title="编辑用户"
                style={{width: 600}}
            >
            <Form
                labelAlign="left"
            >
                <FormItem {...formItemLayout} label="用户代码" required>
                    <Input {...init("userCode")} placeholder="请输入用户代码" />
                </FormItem>
                <FormItem {...formItemLayout} label="用户名" required>
                    <Input {...init("userName")} placeholder="请输入用户名" />
                </FormItem>
                <FormItem {...formItemLayout} label="账号" required>
                    <Input {...init("accountName")} placeholder="请输入账号" />
                </FormItem>
                <FormItem {...formItemLayout} label="性别" required>
                    <Input {...init("gander")} placeholder="请输入性别" />
                </FormItem>
                <FormItem {...formItemLayout} label="年龄" required>
                    <Input {...init("age")} placeholder="请输入年龄" />
                </FormItem>
                <FormItem {...formItemLayout} label="地区" required>
                    <Input {...init("address")} placeholder="请输入地区" />
                </FormItem>
                <FormItem {...formItemLayout} label="QQ" required>
                    <Input {...init("QQ")} placeholder="请输入QQ" />
                </FormItem>
                <FormItem {...formItemLayout} label="E-Mail" required>
                    <Input {...init("email")} placeholder="请输入E-Mail" />
                </FormItem>
                <FormItem {...formItemLayout} label="电话" required>
                    <Input {...init("phone")} placeholder="请输入电话" />
                </FormItem>
                <FormItem {...formItemLayout} label="状态" required>
                    <Checkbox {...init("enable")} />
                </FormItem>
            </Form>
            </Dialog>
        </div>
    );
  }
}

const styles = {
    container: {
      margin: '10px 10px',
      padding: '10px 10px',
      background: '#fff',
      borderRadius: '5px',
      letterSpacing: '2px',
    },
    button: {
        cursor: 'pointer',
    },
    table: {
      margin: '0 0',
    },
    pagination: {
      textAlign: 'center',
      marginBottom: '20px',
    },
  };

  
export default Users;

