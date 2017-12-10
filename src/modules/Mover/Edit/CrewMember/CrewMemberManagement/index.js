import React, { Component } from 'react';
import Tabs from '../../../../../globalComponents/Tabs';
import Icon from '../../../../../globalComponents/Icon'
import NewMemberForm from './NewMemberForm';
import EditMember from './EditMember';
import mapImmutablePropsToPlainProps from '../../../../Common/mapImmutablePropsToPlainProps'
import { CrewMemberContainer } from './Styles';

const TabPanel = Tabs.TabPanel;

class CrewmemberManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: this.props.members || [],
      activeKey: null
    };
    this.addNewMember = this.addNewMember.bind(this);
    this.removeMember = this.removeMember.bind(this);
    this.updateMember = this.updateMember.bind(this);
  }


  addNewMember(member) {
    const members = this.state.members.concat([member]);
    this.setState({
      members,
      activeKey: (members.length-1).toString()
    });
    this.props.onUpdate(members);
  }

  updateMember(member, index) {
    const members = this.state.members;
    const updatedMembers= [].concat(members);
    updatedMembers[index] = member;
    this.setState({
      members: updatedMembers
    });
    this.props.onUpdate(updatedMembers);
  }

  removeMember(index) {
    const members = this.state.members.filter((m,i)=>i!==index);
    this.setState({
      members,
      activeKey: (members.length-1).toString()
    });
    this.props.onUpdate(members);
  }

  render() {
    return (
      <CrewMemberContainer>
          <Tabs activeKey={this.state.activeKey}>
            {this.state.members.map((m, index) => (
              <TabPanel key={m.name} header={m.name} panelKey={index.toString()}>
                <EditMember
                  index={index}
                  name={m.name}
                  removeMember={this.removeMember}
                  updateMember={this.updateMember}
                  description={m.description}
                  avatar={m.avatar}
                />
              </TabPanel>
            ))}
            <TabPanel header={<span><Icon icon="user-plus" /> New member</span>} panelKey="new-member">
              <NewMemberForm addNewMember={this.addNewMember}/>
            </TabPanel>
          </Tabs>
      </CrewMemberContainer>
    );
  }
}

export default mapImmutablePropsToPlainProps(CrewmemberManagement);
