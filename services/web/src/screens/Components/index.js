import React, { createRef } from 'react';
import { Header, Button, Message, Segment, Dropdown, Table, Label, Icon, Container, Grid, Divider, Menu, Sticky, Ref, Form } from 'semantic';
import { screen } from 'helpers';
import Spacer from '../../components/Layout/Spacer';
import { Layout, Breadcrumbs } from 'components';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const options = [
  { key: 1, text: 'Choice 1', value: 1 },
  { key: 2, text: 'Choice 2', value: 2 },
  { key: 3, text: 'Choice 3', value: 3 },
];

@screen
export default class ComponentsScreen extends React.Component {
  contextRef = createRef();
  static layout = 'Portal';

  render() {
    return (
      <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              <Sticky offset={131} context={this.contextRef}>
                <Menu fluid pointing secondary vertical>
                  <a className="menu item" href="#buttons">Buttons</a>
                  <a className="menu item" href="#message">Message</a>
                  <a className="menu item" href="#form">Form</a>
                  <a className="menu item" href="#dropdown">Dropdown</a>
                  <a className="menu item" href="#table">Table</a>
                  <a className="menu item" href="#icon">Icon</a>
                  <a className="menu item" href="#label">Label</a>
                  <a className="menu item" href="#segment">Segment</a>
                  <a className="menu item" href="#container-grid">Container & Grid</a>
                  <a className="menu item" href="#header">Header</a>
                  <a className="menu item" href="#menu">Menu</a>
                  <a className="menu item" href="#divider">Divider</a>
                  <a className="menu item" href="#breadcrumbs">Breadcrumbs</a>
                </Menu>
              </Sticky>
            </Grid.Column>
            <Grid.Column width={13}>
              <Ref innerRef={this.contextRef}>
                <div>
                  <Header size="huge">UI Components
                  
                  </Header>

                  <Segment id="buttons">
                    <Header size="large">Buttons</Header>
                    <Spacer size="small" />
                    <Header size="medium">Variations</Header>
                    <Button>Standard</Button>
                    <Button circular>Circular</Button>
                    <Button basic>Basic</Button>
                    
                    <Spacer size="small" />
                    <Header size="medium">Sizes</Header>

                    <Button size="tiny">Tiny Button</Button>
                    <Button size="small">Small Button</Button>
                    <Button size="medium">Medium Button</Button>
                    <Button size="large">Large Button</Button>
                    <Button size="huge">Huge Button</Button>
                  </Segment>

                  <Segment id="message">
                    <Header size="large">Message</Header>
                    <Spacer size="small" />

                    <Header size="medium">Variations</Header>
                    <Message>
                      <Header size="small">Standard Message</Header>
                      <p>Message Content</p>
                    </Message>
                    <Message info>
                      <Header size="small">Info Message</Header>
                      <p>Message Content</p>
                    </Message>
                    <Message success>
                      <Header size="small">Success Message</Header>
                      <p>Message Content</p>
                    </Message>
                    <Message warning>
                      <Header size="small">Warning Message</Header>
                      <p>Message Content</p>
                    </Message>
                    <Message error>
                      <Header size="small">Error Message</Header>
                      <p>Message Content</p>
                    </Message>
                  </Segment>

                  <Segment id="form">
                    <Header size="large">Form</Header>
                    <Spacer size="small" />
                    
                    <Form>
                      
                      <Header size="medium">Input Field</Header>
                      <Form.Field>
                        <label>Label</label>
                        <input placeholder='Placeholder' width="200" />
                      </Form.Field>
                      
                      <Header size="medium">Checkbox</Header>
                      <Form.Field>
                        <Form.Checkbox label='Checkbox 1' />
                        <Form.Checkbox label='Checkbox 2' />
                      </Form.Field>
                      
                      <Header size="medium">Radio</Header>
                      <Form.Field>
                        <Form.Radio label="Radio 1" id="1" name="radio" value="1" checked />
                        <Form.Radio label="Radio 2" id="2" name="radio" value="2" />
                      </Form.Field>
                      
                      <Header size="medium">Text Area</Header>
                      <Form.Field>
                        <Form.TextArea label='Label' placeholder='Placeholder text...' />
                      </Form.Field>

                    </Form>


                  </Segment>

                  <Segment id="dropdown">
                    <Header size="large">Dropdown</Header>
                    <Spacer size="small" />

                    <Header size="medium">Variations</Header>
                    <Layout horizontal >
                    <Dropdown placeholder='Selection' selection options={options} />
                    <div style={{ display:'inline-block', width: '16px' }}></div>
                    <Dropdown placeholder='Search Selection' selection search options={options} />
                    <div style={{ display:'inline-block', width: '16px' }}></div>
                    <Dropdown placeholder='Multiple Selection' multiple selection options={options} />
                    </Layout>
                  </Segment>

                  <Segment id="table">
                    <Header size="large">Table</Header>
                    <Spacer size="small" />

                    <Table celled>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell>Header</Table.HeaderCell>
                          <Table.HeaderCell>Header</Table.HeaderCell>
                          <Table.HeaderCell>Header</Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>

                      <Table.Body>
                        <Table.Row>
                          <Table.Cell>Cell</Table.Cell>
                          <Table.Cell>Cell</Table.Cell>
                          <Table.Cell>Cell</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>Cell</Table.Cell>
                          <Table.Cell>Cell</Table.Cell>
                          <Table.Cell>Cell</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>Cell</Table.Cell>
                          <Table.Cell>Cell</Table.Cell>
                          <Table.Cell>Cell</Table.Cell>
                        </Table.Row>
                      </Table.Body>

                      <Table.Footer>
                        <Table.Row>
                          <Table.HeaderCell colSpan="3">
                            <i>Footer</i>
                          </Table.HeaderCell>
                        </Table.Row>
                      </Table.Footer>
                    </Table>
                  </Segment>

                  <Segment id="icon">
                    <Header size="large">Icon</Header>
                    <Spacer size="small" />

                    <Header size="medium">Variations</Header>

                    <Icon name="user" />
                    <Icon name="user" disabled />
                    <Icon name="user" color="blue" />
                    <Icon name="user" circular />
                    <Icon name="user" bordered />  
                    <Icon name="user" circular inverted color="green"/>  
                    <Icon name="user" bordered inverted />  
                  </Segment>

                  <Segment id="label">
                    <Header size="large">Label</Header>
                    <Spacer size="small" />

                    <Header size="medium">Variations</Header>
                    <Label>
                      Standard label
                    </Label>
                    <Label basic>
                      Basic label
                    </Label>
                    <Label circular>
                      Circular label
                    </Label>

                    <Header size="medium">Options</Header>
                  
                    <Label>
                      <Icon name="envelope" /> Label with icon
                    </Label>

                    <Label as='a'>
                      Label as Link <Icon name='times' />
                    </Label>

                    <Label color="blue">
                      Colored label
                    </Label>
                  </Segment>

                  <Segment id="segment">
                    <Header size="large">Segment</Header>
                    <Spacer size="small" />

                    <Header size="medium">Variations</Header>

                    <Segment>
                      Standard Segment
                    </Segment>

                    <Segment placeholder>
                      Placeholder Segment
                    </Segment>

                    <Segment raised>
                      Raised Segment
                    </Segment>

                  </Segment>

                  <Segment id="container-grid">
                    <Header size="large">Container & Grid</Header>
                    <Spacer size="small" />

                    <Header size="medium">Container</Header>

                    <Container>
                      <div>Content within a Container</div>
                    </Container>
                    
                    <Spacer size="small" />
                    
                    <h4>16 Columns Grid</h4>
                      <Grid>
                        <Grid.Column><Label>1</Label></Grid.Column>
                        <Grid.Column><Label>2</Label></Grid.Column>
                        <Grid.Column><Label>3</Label></Grid.Column>
                        <Grid.Column><Label>4</Label></Grid.Column>
                        <Grid.Column><Label>5</Label></Grid.Column>
                        <Grid.Column><Label>6</Label></Grid.Column>
                        <Grid.Column><Label>7</Label></Grid.Column>
                        <Grid.Column><Label>8</Label></Grid.Column>
                        <Grid.Column><Label>9</Label></Grid.Column>
                        <Grid.Column><Label>10</Label></Grid.Column>
                        <Grid.Column><Label>11</Label></Grid.Column>
                        <Grid.Column><Label>12</Label></Grid.Column>
                        <Grid.Column><Label>13</Label></Grid.Column>
                        <Grid.Column><Label>14</Label></Grid.Column>
                        <Grid.Column><Label>15</Label></Grid.Column>
                        <Grid.Column><Label>16</Label></Grid.Column>
                      </Grid>
                      </Segment>

                    
                  <Segment id="header">
                    <Header size="large">Header</Header>
                    <Spacer size="small" />

                    <Header size="medium">Page Variations</Header>

                    <Header as="h1">
                      h1 Header
                    </Header>

                    <Header as="h2">
                      h2 Header
                    </Header>

                    <Header as="h3">
                      h3 Header
                    </Header>

                    <Header as="h4">
                      h4 Header
                    </Header>

                    <Header as="h5">
                      h5 Header
                    </Header>

                    <Header as="h6">
                      h6 Header
                    </Header>

                    <div style={{ display:'block', height:'5px' }} />
                    <Divider />

                    <Header size="medium">Content Variations</Header>

                    <Header size="tiny">
                      Tiny Header
                    </Header>

                    <Header size="small">
                      Small Header
                    </Header>

                    <Header size="medium">
                      Medium Header
                    </Header>

                    <Header size="large">
                      Large Header
                    </Header>

                    <Header size="huge">
                      Huge Header
                    </Header>

                  </Segment>

                  <Segment id="menu">
                    <Header size="large">Menu</Header>
                    <Spacer size="small" />

                    <Header size="medium">Variations</Header>

                    <Header size="small">Primary</Header>

                    <Menu primary>
                      <Menu.Item active>
                        Tab 1
                      </Menu.Item>
                      <Menu.Item>
                        Tab 2
                      </Menu.Item>
                      <Menu.Item>
                        Tab 3
                      </Menu.Item>
                    </Menu>

                    <Header size="small">Secondary</Header>

                    <Menu secondary>
                      <Menu.Item active>
                        Tab 1
                      </Menu.Item>
                      <Menu.Item>
                        Tab 2
                      </Menu.Item>
                      <Menu.Item>
                        Tab 3
                      </Menu.Item>
                    </Menu>

                    <Header size="small">Secondary Pointing</Header>

                    <Menu secondary pointing>
                      <Menu.Item active>
                        Tab 1
                      </Menu.Item>
                      <Menu.Item>
                        Tab 2
                      </Menu.Item>
                      <Menu.Item>
                        Tab 3
                      </Menu.Item>
                    </Menu>
                  
                    <Header size="small">Primary Vertical</Header>

                    <Menu primary vertical>
                      <Menu.Item active>
                        Tab 1
                      </Menu.Item>
                      <Menu.Item>
                        Tab 2
                      </Menu.Item>
                      <Menu.Item>
                        Tab 3
                      </Menu.Item>
                    </Menu>

                    <Header size="small">Secondary Vertical</Header>

                    <Menu secondary vertical>
                      <Menu.Item active>
                        Tab 1
                      </Menu.Item>
                      <Menu.Item>
                        Tab 2
                      </Menu.Item>
                      <Menu.Item>
                        Tab 3
                      </Menu.Item>
                    </Menu>

                    <Header size="small">Secondary Vertical Pointing</Header>

                    <Menu secondary vertical pointing>
                      <Menu.Item active>
                        Tab 1
                      </Menu.Item>
                      <Menu.Item>
                        Tab 2
                      </Menu.Item>
                      <Menu.Item>
                        Tab 3
                      </Menu.Item>
                    </Menu>

                  </Segment>

                  <Segment id="divider">
                    <Header size="large">Divider</Header>
                    <Spacer size="small" />

                    <Header size="medium">Standard Divider</Header>

                    <Divider />
                    
                    <Header size="medium">Divider with Text</Header>

                    <Divider horizontal>OR</Divider>

                  </Segment>

                  <Segment id="breadcrumbs">
                    <Header size="large">Breadcrumbs</Header>
                    <Spacer size="small" />

                    <Header size="medium">Standard Breadcrumbs</Header>

                    
                    <Breadcrumbs link="One" active="Two Active" />

                    <Breadcrumbs active="One Active" />
                  </Segment>
                </div>
              </Ref>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }
}
