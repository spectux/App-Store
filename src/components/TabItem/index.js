import './index.css'
import {Component} from 'react'

class TabItem extends Component {
  render() {
    const {tabDetails, isActiveTab, onClickTab} = this.props
    const {tabId, displayText} = tabDetails
    const tabClassName = isActiveTab ? 'active-tab tab-item' : 'tab-item'

    return (
      <li className={tabClassName} onClick={() => onClickTab(tabId)}>
        {displayText}
      </li>
    )
  }
}

export default TabItem
