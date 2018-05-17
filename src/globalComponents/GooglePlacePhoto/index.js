import React, { Component } from 'react';
import { string, number, object } from 'prop-types';
import Spin from '../Spin';
import { StyledImg } from './Styled';

class GooglePlacePhoto extends Component {
  constructor(props) {
    super(props);
    this.service = new props.google.maps.places.PlacesService(document.createElement('div'));
  }

  state = {
    isLoading: false,
    url: this.props.defaultUrl
  }

  componentDidMount() {
    if(this.props.placeId) {
      this.loadImage(this.props.placeId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.placeId !== nextProps.placeId && nextProps.placeId) {
      this.loadImage(nextProps.placeId);
    }
  }

  loadImage = (placeId) => {
    const { maxWidth, defaultUrl } = this.props;
    this.setState({
      isLoading: true
    });

    this.service.getDetails({
      placeId
    }, (placeResult, status) => {
      if(status === 'OK' && placeResult.photos && placeResult.photos.length > 0) {
        const image = new Image();
        const photo = placeResult.photos[0];
        const url = photo.getUrl({ maxWidth });
        image.src = url;
        image.onload = () => {
          this.setState({
            isLoading: false,
            url: image.src
          });
        }
      } else {
        this.setState({
          isLoading: false,
          url: defaultUrl
        })
      }
    })
  }

  render() {
    const { url, isLoading } = this.state;
    const { maxWidth } = this.props;

    return (
      <Spin.SpinContainer loading={isLoading} style={{width: maxWidth}}>
        <StyledImg src={url} maxWidth={maxWidth} />
      </Spin.SpinContainer>
    );
  }
}

GooglePlacePhoto.propTypes = {
  placeId: string,
  google: object.isRequired,
  maxWidth: number,
  defaultUrl: string
}

GooglePlacePhoto.defaultProps = {
  maxWidth: 300,
  defaultUrl: 'http://res.cloudinary.com/simpleview/image/upload/v1486505969/clients/vancouverbc/Aerial_Sunset_Vancouver_d3_copy_1bb86ed0-1edc-4cda-841d-0b033ca0bb72.jpg'
}

export default GooglePlacePhoto;
