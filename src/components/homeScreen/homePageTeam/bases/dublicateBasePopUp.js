import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import Select from 'react-select';
import ImportSpreadsheet from './importSpreadsheet'

class ModalDublicateBase extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: this.props.teamNames,
            teamId:''
        }
    }

    render() {
    return (
      <Modal size='tiny' trigger={<li className = 'base-options-list-item'>
                     <Icon name='copy' className='icon' color='black' size='small'/>
                        Duplicate base</li>} closeIcon>
        <Header icon={<Icon name='copy' color='blue'/>} content={`Duplicate ${this.props.base.name}`} />
        <Modal.Content>
          <View className='content-import-spreadsheet'>
              <View className='content-import-subheader'>Choose team:</View>
              <Select options={this.state.options}
                    value={this.state.teamId}
                    onChange = {(event) => this.setState({teamId: event.value})}
                    autoFocus={true}
                />
              <View className='content-import-btn'
              onClick={()=> this.props.handleClick(this.state.teamId, 'clone', this.props.base._id, this.props.base, this.    props.tables )}>
              <Button>Duplicate base</Button></View>
          </View>
        </Modal.Content>
      </Modal>
    )
    }
}

export default ModalDublicateBase
