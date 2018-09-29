import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Grid, Row, Col, Image, PageHeader, Panel, Button } from 'react-bootstrap'
import { AddModal } from '../components/Modal/Modal'

import { getUserProfile } from '../actions/api'

class MyProfileContainer extends Component {
  constructor(props) {
    super(props)

    // State variables to be tracked in the component
    this.state = {
      showModal: false,
      type: '',
      addValue: ''
    }

    // ADD FUNCTION BINDINGS HERE

  }

  componentDidMount() {

    // ADD CHECK FOR USER QUERY PARAMETER HERE

  }

  // ADD FUNCTION TO HANDLE OPENING THE MODAL HERE (with "type" variable)
  handleModalOpen(type) {}

  // ADD FUNCTION TO HANDLE CLOSING THE MODAL HERE
  handleModalClose() {}

  // ADD FUNCTION TO TRACK TEXT CHANGES HERE (with event variable)
  handleTextChange(e) {}

  // ADD FUNCTION TO HANDLE SUBMITTING "ADD" FORM HERE
  handleAddSubmit() {}

  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid valign-wrapper">
            <Col xs={12} md={8} lg={4}>
              {/* ADD PROFILE IMAGE HERE */}
              
              <Image className="image" src= "/assets/images/thebestprofilepicture.jpg" thumbnail />
            </Col>
            <Col xs={12} md={4} lg={8}>
              {/* ADD PAGE HEADER WITH NAME AND ABOUT ME HEADINGS HERE */}
              <PageHeader>
                <strong>
                Mr. Potato
                </strong>
                <br />
                <small>About Me</small>
              </PageHeader>
              {/* ADD ABOUT ME DESCRIPTION HERE */}
              <p className="description">
                Hey! I am Mr. Potato. <br />I was born in a greenhouse in Ireland with my many siblings. I was seperated from my family during the Great Potato Crisis and was brought to the United States of America, specifically Virginia. There I met a wonderful potato named Ms. Potato, and together we had a son named Potato Jr. We then settled down in a town named Vienna. I hope you enjoyed my website!
              </p>
            </Col>
          </Row>
          <Row className="show-grid">

            {/* Include all sections in the following column */}
            <Col xs={12}>

              {/* ADD HEADER FOR SECTION HERE */}
              <PageHeader className="my-interests">
                My Interests
              </PageHeader>
              <Panel>
                <Panel.Body className="background">
                  <ul className="my-interests-list">
                    <li>Sleeping</li>
                    <li>Not being eaten</li>
                    <li>Drinking water with the boys</li>
                    <li>Hanging with the fam</li>
                    <li>Sitting</li>
                    <li>Rolling 'round</li>
                  </ul>
                </Panel.Body>
              </Panel>

              <PageHeader>
                My Photos
              </PageHeader>
              <Image src= "/assets/images/PotatoFAM.jpg" width="370" height="370" thumbnail />
              <Image src= "/assets/images/Hangingwiththeboys.png" width="370" height="370" thumbnail />
              <Image src= "/assets/images/Sleepingtime.jpg" width="370" height="370" thumbnail />

              <PageHeader>
                My Skills
              </PageHeader>
              <Panel>
                <Panel.Body className="background">
                  <ul className="my-interests-list">
                    <li>Speed Rolling</li>
                    <li>Survival</li>
                    <li>Water Chugging</li>
                    <li>Spying on Other Potato Tribes</li>
                    <li>Sense Humans Coming</li>
                  </ul>
                </Panel.Body>
              </Panel>
              <h3 align="center">
              <br />
                Contact: potatofamfam@potatosrock.com
              </h3>
            </Col>
          </Row>
        </Grid>

        {/* ADD MODAL HERE */}

      </div>
    )
  }
}

// Uses withRouter to grab query paramters in URL (ex: http://localhost:3000?user=1 where user is the query parameter)
export default withRouter(MyProfileContainer)