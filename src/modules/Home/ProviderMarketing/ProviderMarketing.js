import React from 'react'
import Grid from '../../../globalComponents/Grid' 
import MarketingNav from '../../../globalComponents/MarketingNav'
import Box from '../../../globalComponents/Box'
import RiverFlow from '../../../globalComponents/RiverFlow'
import Hero from './Hero'
import ImageWrapper from './ImageWrapper'
import { Heading as MarketingHeading } from '../../../globalComponents/MarketingTypography'
import { Paragraph, ThematicBreak, Heading } from '../../../globalComponents/Typography';
import Link from '../../../globalComponents/Link'
import {
  PlaceholderImage,
  PlaceholderImageReversed
} from './Styled'
import Button from '../../../globalComponents/Form/Button';


class ProviderMarketing extends React.PureComponent {

  render() {
    return (
      <React.Fragment>
        <MarketingNav />
        <Box below={12}>
          <Hero />
        </Box>
        <Grid.Container>
          <Grid.Row>
            <Grid.Col xs={24} sm={24} md={24} lg={24} xl={24} >
              <MarketingHeading eyebrow="It's easy" underlay="how" wrapperTag="h3" centered size="md">Here's how it works</MarketingHeading>
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
        <Grid.Container>
          <Grid.Row>
            <Grid.Col xs={24} sm={24} md={24} lg={24} xl={24} >
              <Box vertical={10} below={0}>
                <RiverFlow.Container>
                  <RiverFlow.Panel 
                    primaryContent={(
                      <Box between={4}>
                        <Heading size="sm" wrapperTag="h3">Company Profile</Heading>
                        <Paragraph>
                          Showcase your company and services online. 
                          We provide your compnay with a distinct and customizable online presence. 
                          We offer a one-stop-shop for customers to learn and inquire about your services. 
                          Optimized for all devices, big and small!
                        </Paragraph>
                        <ThematicBreak short />
                        <Link secondary href="">Link here</Link>
                      </Box>
                    )}
                    secondaryContent={<PlaceholderImageReversed src="https://firebasestorage.googleapis.com/v0/b/comment-on-85597.appspot.com/o/images%2Fgui%2Fmarketing%2Fmarketing_profile_placeholder.png?alt=media&token=d567496a-cafc-4b3a-9311-e1f84398fab1" />}
                  />
                  <RiverFlow.Panel 
                    primaryContent={(
                      <Box between={4}>
                        <Heading size="sm" wrapperTag="h3">Company Profile</Heading>
                        <Paragraph>
                          Showcase your company and services online. 
                          We provide your compnay with a distinct and customizable online presence. 
                          We offer a one-stop-shop for customers to learn and inquire about your services. 
                          Optimized for all devices, big and small!
                        </Paragraph>
                        <ThematicBreak short />
                        <Link secondary href="">Link here</Link>
                      </Box>
                    )}
                    secondaryContent={<PlaceholderImage src="https://firebasestorage.googleapis.com/v0/b/comment-on-85597.appspot.com/o/images%2Fgui%2Fmarketing%2Fmarketing_profile_placeholder.png?alt=media&token=d567496a-cafc-4b3a-9311-e1f84398fab1" />}
                  />
                  <RiverFlow.Panel 
                    primaryContent={(
                      <Box between={4}>
                        <Heading size="sm" wrapperTag="h3">Company Profile</Heading>
                        <Paragraph>
                          Showcase your company and services online. 
                          We provide your compnay with a distinct and customizable online presence. 
                          We offer a one-stop-shop for customers to learn and inquire about your services. 
                          Optimized for all devices, big and small!
                        </Paragraph>
                        <ThematicBreak short />
                        <Link secondary href="">Link here</Link>
                      </Box>
                    )}
                    secondaryContent={<PlaceholderImageReversed src="https://firebasestorage.googleapis.com/v0/b/comment-on-85597.appspot.com/o/images%2Fgui%2Fmarketing%2Fmarketing_profile_placeholder.png?alt=media&token=d567496a-cafc-4b3a-9311-e1f84398fab1" />}
                  />
                  
                </RiverFlow.Container>
              </Box>
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
        <ImageWrapper overlapBottom overlapTop>
          <Grid.Container>
            <Grid.Row middle="md">
              <Grid.Col xs={24} sm={24} md={24} lgOffset={2} lg={10} xlOffset={2} xl={10} >
                <Box vertical={{ xs:12, lg: 12 }} below={{ xs:6, lg:12}}>
                  <Box between={4} style={{ color: 'white' }}>
                    <Heading size="sm" wrapperTag="h3">Company Profile</Heading>
                    <Paragraph>
                      Showcase your company and services online. 
                      We provide your compnay with a distinct and customizable online presence. 
                      We offer a one-stop-shop for customers to learn and inquire about your services. 
                      Optimized for all devices, big and small!
                    </Paragraph>
                  </Box>
                </Box>
              </Grid.Col>
              <Grid.Col xs={24} sm={24} md={24} lgOffset={2} lg={6} xlOffset={2} xl={6}>
                <Box vertical={{ xs:6, lg: 12 }} below={{ xs:12, lg:12}}>
                  <div><Button primary>Test</Button></div>
                </Box>
              </Grid.Col>
            </Grid.Row>
          </Grid.Container>
        </ImageWrapper>
        <Grid.Container>
          <Grid.Row>
            <Grid.Col xs={24} sm={24} md={24} lg={24} xl={24} >
              <RiverFlow.Container>
                <RiverFlow.Panel 
                  primaryContent={(
                    <Box between={4}>
                      <Heading size="sm" wrapperTag="h3">Company Profile</Heading>
                      <Paragraph>
                        Showcase your company and services online. 
                        We provide your compnay with a distinct and customizable online presence. 
                        We offer a one-stop-shop for customers to learn and inquire about your services. 
                        Optimized for all devices, big and small!
                      </Paragraph>
                      <ThematicBreak short />
                      <Link secondary href="">Link here</Link>
                    </Box>
                  )}
                  secondaryContent={<PlaceholderImageReversed src="https://firebasestorage.googleapis.com/v0/b/comment-on-85597.appspot.com/o/images%2Fgui%2Fmarketing%2Fmarketing_profile_placeholder.png?alt=media&token=d567496a-cafc-4b3a-9311-e1f84398fab1" />}
                />
                <RiverFlow.Panel 
                  primaryContent={(
                    <Box between={4}>
                      <Heading size="sm" wrapperTag="h3">Company Profile</Heading>
                      <Paragraph>
                        Showcase your company and services online. 
                        We provide your compnay with a distinct and customizable online presence. 
                        We offer a one-stop-shop for customers to learn and inquire about your services. 
                        Optimized for all devices, big and small!
                      </Paragraph>
                      <ThematicBreak short />
                      <Link secondary href="">Link here</Link>
                    </Box>
                  )}
                  secondaryContent={<PlaceholderImage src="https://firebasestorage.googleapis.com/v0/b/comment-on-85597.appspot.com/o/images%2Fgui%2Fmarketing%2Fmarketing_profile_placeholder.png?alt=media&token=d567496a-cafc-4b3a-9311-e1f84398fab1" />}
                />
              </RiverFlow.Container>            
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
        <ImageWrapper>
          <Grid.Container>
            <Grid.Row middle="md">
              <Grid.Col xs={24} sm={24} md={24} lgOffset={2} lg={10} xlOffset={2} xl={10} >
                <Box vertical={{ xs:12, lg: 12 }} below={{ xs:6, lg:12}}>
                  <Box between={4} style={{ color: 'white' }}>
                    <Heading size="sm" wrapperTag="h3">Company Profile</Heading>
                    <Paragraph>
                      Showcase your company and services online. 
                      We provide your compnay with a distinct and customizable online presence. 
                      We offer a one-stop-shop for customers to learn and inquire about your services. 
                      Optimized for all devices, big and small!
                    </Paragraph>
                  </Box>
                </Box>
              </Grid.Col>
              <Grid.Col xs={24} sm={24} md={24} lgOffset={2} lg={6} xlOffset={2} xl={6}>
                <Box vertical={{ xs:6, lg: 12 }} below={{ xs:12, lg:12}}>
                  <div><Button primary>Test</Button></div>
                </Box>
              </Grid.Col>
            </Grid.Row>
          </Grid.Container>
        </ImageWrapper>
      </React.Fragment>
    )
  }
}

export default ProviderMarketing