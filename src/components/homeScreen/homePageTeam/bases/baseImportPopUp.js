import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import importIcon from '../../../../images/upload_icon.png'
import ImportSpreadsheet from './importSpreadsheet'


const ModalImportSpreadsheet = (props) => (
  <Modal trigger={<View className='options'>
                  <img src={importIcon} />
                  <View className='text'>Import a spreadsheet</View>
                </View>} closeIcon>
    <Header icon={<Icon name='cloud upload' color='blue'/>} content='Import a spreadsheet' />
    <Modal.Content>
      <View className='content-import-spreadsheet'>
          <View className='content-import-subheader'>Import a CSV</View>
          <View className='content-import-text'>You can import a table into Orderly by uploading a .CSV file
            with tabular data. Most spreadsheet applications will allow you to export your spreadsheet as a .CSV file.
          <View className='content-import-subtext'>You can choose files one by one to add several bases.</View>
          </View>
          <View className='content-import-btn'><ImportSpreadsheet teamId={props.teamId}/></View>
      </View>
    </Modal.Content>
  </Modal>
)

export default ModalImportSpreadsheet
