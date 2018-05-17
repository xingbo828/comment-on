import React from 'react'
import ServiceMap from './Map'
import { withTheme } from 'styled-components'
import {
  ProvinceHeading,
  CityList,
  City,
  ProvinceDetails
} from './Styled'
import availability from './availability.json'


class ServiceLocation extends React.Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.mapProvinces = this.mapProvinces.bind(this)
    this.mapCities = this.mapCities.bind(this)
    this.state = {
      selectedCity: 'bc'
    }
  }

  handleClick(selectedCity) {
    this.setState({selectedCity})
  }

  mapCities(cities) {
    return cities.map(({comingSoon, name}) => {
      return (
        <City key={name} comingSoon={comingSoon}>{name}</City>
      )
    })
  }

  mapProvinces(provinces) {
    return Object.values(provinces).map((prov) => {
      const isVisible = this.state.selectedCity === prov.key
      return (
        <ProvinceDetails key={prov.key} visible={isVisible}>
          <ProvinceHeading>{prov.name}</ProvinceHeading>
          <CityList>
            {
              this.mapCities(prov.cities)
            }
          </CityList>
        </ProvinceDetails>
      )
    })
  }

  render() {
    return (
      <div>
        <ServiceMap clickHandler={this.handleClick}/>
        {
          this.mapProvinces(availability)
        }
      </div>
    )
  }
}

export default withTheme(ServiceLocation)
