import React from 'react'
// import Observer from 'react-intersection-observer'
// import Animation from '../../../globalComponents/Animation'
import Grid from '../../../globalComponents/Grid' 
import MarketingNav from '../../../globalComponents/MarketingNav'
import Box from '../../../globalComponents/Box'
import RiverFlow from '../../../globalComponents/RiverFlow'
import Hero from './Hero'
import ImageWrapper from './ImageWrapper'
import { Heading as MarketingHeading } from '../../../globalComponents/MarketingTypography'
import { Paragraph, ThematicBreak, Heading } from '../../../globalComponents/Typography';
import Footer from '../../Common/Footer'
import { ReactRouterLink } from '../../../globalComponents/Link'
import {
  PlaceholderImage
} from './Styled'
import Button from '../../../globalComponents/Form/Button';
import Content from './Content'
import Gallery from './Gallery'
import Icon from '../../../globalComponents/Icon'


class ProviderMarketing extends React.PureComponent {
  
  constructor(props) {
    super(props)
    this.goTo = this.goTo.bind(this)
  }

  goTo(_path) {
    return () => {
      this.props.history.push({
        pathname: _path
      })
    }
  }

  MapRiverFlow(_content) {
    return _content.map((_entry, _idx) => (
      // <Observer triggerOnce threshold={.1}>
      //   {({inView, ref}) => (
      //     <div ref={ref}>
      //       <Animation.Fade timeout={300} ref={ref} in={inView}>
      //         {() => (
                <RiverFlow.Panel
                  flipped={!(_idx % 2)}
                  primaryContent={(
                    <Box between={4}>
                      <Heading size="sm" wrapperTag="h3">{_entry.title}</Heading>
                      <Paragraph>{_entry.body}</Paragraph>
                      <ThematicBreak short />
                      <ReactRouterLink secondary to={_entry.link.href}>{_entry.link.name}</ReactRouterLink>
                    </Box>
                  )}
                  secondaryContent={<PlaceholderImage src={_entry.image.src} />}
                />
      //         )}
      //       </Animation.Fade>
      //     </div>
      //   )}
      // </Observer>
    ))
  }

  render() {
    return (
      <React.Fragment>
        <MarketingNav />
        <Box below={8}>
          <Hero />
        </Box>
        <Grid.Container>
          <Grid.Row>
            <Grid.Col xs={24} sm={24} md={24} lg={24} xl={24} >
              <MarketingHeading eyebrow="Tools &amp; Features" underlay="ABOUT" wrapperTag="h3" centered size="md">Here's What You Get</MarketingHeading>
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
        <Grid.Container>
          <Grid.Row>
            <Grid.Col xs={24} sm={24} md={24} lg={24} xl={24} >
              <Box vertical={10} below={0}>
                <RiverFlow.Container>
                  {this.MapRiverFlow(Content.riverFlowA)}
                </RiverFlow.Container>
              </Box>
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
        <ImageWrapper overlapBottom overlapTop src="https://firebasestorage.googleapis.com/v0/b/comment-on-85597.appspot.com/o/images%2Fgui%2Fmarketing%2Fprovider_middle.jpg?alt=media&token=2d7a5dff-d531-4c43-a637-d56f43f1e099">
          <Grid.Container>
            <Grid.Row middle="md">
              <Grid.Col xs={24} sm={24} md={24} lgOffset={2} lg={10} xlOffset={2} xl={10} >
                <Box vertical={{ xs:12, lg: 12 }} below={{ xs:6, lg:12}}>
                  <Box between={4} style={{ color: 'white' }}>
                    <Heading size="sm" wrapperTag="h3">{Content.demo.title}</Heading>
                    <Paragraph>{Content.demo.body}</Paragraph>
                  </Box>
                </Box>
              </Grid.Col>
              <Grid.Col xs={24} sm={24} md={24} lgOffset={2} lg={6} xlOffset={2} xl={6}>
                <Box vertical={{ xs:6, lg: 12 }} below={{ xs:12, lg:12}}>
                  <div><Button onClick={this.goTo(Content.demo.link.href)} primary>{Content.demo.link.title}</Button></div>
                </Box>
              </Grid.Col>
            </Grid.Row>
          </Grid.Container>
        </ImageWrapper>
        <Grid.Container>
          <Grid.Row>
            <Grid.Col xs={24} sm={24} md={24} lg={24} xl={24} >
              <Box below={{ xs:10, lg:12 }} between={4}>
                <Gallery 
                  images={[
                    'https://firebasestorage.googleapis.com/v0/b/comment-on-85597.appspot.com/o/images%2Fgui%2Fmarketing%2Fprovider_collection_1.jpg?alt=media&token=c7dae472-c99f-44bb-b5c9-d1f07cbd27b6', 
                    'https://firebasestorage.googleapis.com/v0/b/comment-on-85597.appspot.com/o/images%2Fgui%2Fmarketing%2Fprovider_collection_2.jpg?alt=media&token=e70f6455-9d4f-4f85-8fed-ca7e484523d3', 
                    'https://firebasestorage.googleapis.com/v0/b/comment-on-85597.appspot.com/o/images%2Fgui%2Fmarketing%2Fprovider_collection_3.jpg?alt=media&token=c876d45f-af41-4195-9689-33f24fa8d00e', 
                    'https://firebasestorage.googleapis.com/v0/b/comment-on-85597.appspot.com/o/images%2Fgui%2Fmarketing%2Fprovider_collection_4.jpg?alt=media&token=1f2629d8-e022-4879-9eb6-8924d36f34bd'
                  ]} 
                />            
              </Box>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col xs={24} sm={24} md={24} lgOffset={2} lg={10} xlOffset={2} xl={10} >
              <Box below={{ xs:6, lg:12 }} between={4}>
                <Heading size="sm" wrapperTag="h3"><Icon icon="bolt" />&nbsp;&nbsp;{Content.riverFlowB[0].title}</Heading>
                <Paragraph>{Content.riverFlowB[0].body}</Paragraph>
              </Box>
            </Grid.Col>
            <Grid.Col xs={24} sm={24} md={24} lg={10} xl={10} >
              <Box below={{ xs:10, lg:12 }} between={4}>
                <Heading size="sm" wrapperTag="h3"><Icon icon="thumbs-o-up" />&nbsp;&nbsp;{Content.riverFlowB[1].title}</Heading>
                <Paragraph>{Content.riverFlowB[1].body}</Paragraph>
              </Box>
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
        <ImageWrapper src="https://firebasestorage.googleapis.com/v0/b/comment-on-85597.appspot.com/o/images%2Fgui%2Fmarketing%2Fprovider_footer.jpg?alt=media&token=c8363ff4-49ad-4964-88b0-cf95fa21cbc8">
          <Grid.Container>
            <Grid.Row middle="md">
              <Grid.Col xs={24} sm={24} md={24} lgOffset={2} lg={10} xlOffset={2} xl={10} >
                <Box vertical={{ xs:12, lg: 12 }} below={{ xs:6, lg:12}}>
                  <Box between={4} style={{ color: 'white' }}>
                    <Heading size="sm" wrapperTag="h3">{Content.register.title}</Heading>
                    <Paragraph>{Content.register.body}</Paragraph>
                  </Box>
                </Box>
              </Grid.Col>
              <Grid.Col xs={24} sm={24} md={24} lgOffset={2} lg={6} xlOffset={2} xl={6}>
                <Box vertical={{ xs:6, lg: 12 }} below={{ xs:12, lg:12}}>
                  <div><Button onClick={this.goTo(Content.register.link.href)} primary>{Content.register.link.title}</Button></div>
                </Box>
              </Grid.Col>
            </Grid.Row>
          </Grid.Container>
        </ImageWrapper>
        <Footer />
      </React.Fragment>
    )
  }
}

export default ProviderMarketing