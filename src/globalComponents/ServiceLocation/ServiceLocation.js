import React from 'react'
import ServiceMap from './Map'
import { withTheme } from 'styled-components'
import {
  ProvinceHeading,
  CityList,
  City
} from './Styled'


class ServiceLocation extends React.Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {

  }

  render() {
    const { theme } = this.props
    return (
      <div>
        <ServiceMap clickHandler={this.handleClick}/>
        <ProvinceHeading>British Columbia</ProvinceHeading>
        <CityList>
          <City>Vancouver</City>
          <City>North Vancouver</City>
          <City>Burnaby</City>
          <City>Abbotsford</City>
          <City>Langley</City>
          <City>Aldergrove</City>
          <City>White Rock</City>
        </CityList>
      </div>
    )
  }
}

export default withTheme(ServiceLocation)
