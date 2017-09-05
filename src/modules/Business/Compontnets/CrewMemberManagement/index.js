import React, { Component } from 'react';
import Tabs from '../../../../globalComponents/Tabs';
import { ImgUpload } from '../../../../globalComponents/Form';
import NewMemberForm from './NewMemberForm';
import EditMember from './EditMember';

const SingleImgUpload = ImgUpload.SingleImgUpload;
const TabPanel = Tabs.TabPanel;



class CrewmemberManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabKey: '0',
      members: [{
        name: 'crew #1',
        description: 'desc'
      }, {
        name: 'crew #2',
        description: 'desc'
      }
    ]
    };
    this.addNewMember = this.addNewMember.bind(this);
    this.removeMember = this.removeMember.bind(this);
    this.updateMember = this.updateMember.bind(this);
  }


  addNewMember(member) {
    this.setState({
      members: this.state.members.concat([member])
    });
  }

  updateMember(member, index) {
    const members = this.state.members;
    members[index] = member;
    this.setState({
      members
    });
  }

  removeMember(index) {
    this.setState({
      members: this.state.members.filter((m,i)=>i!==index),
      activeTabKey: '0'
    });
  }

  render() {
    return (
      <div>
        <h2>Edit your team</h2>
        <div>
          <Tabs activeKey={this.state.activeTabKey}>
            {this.state.members.map((m, index) => (
              <TabPanel key={m.name} header={m.name} panelKey={index}>
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
            <TabPanel header='+' panelKey="new-member">
              <NewMemberForm addNewMember={this.addNewMember}/>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default CrewmemberManagement;
