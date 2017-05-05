import React from 'react'
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap'

import PaginatedPage from '../containers/PaginatedPage'

// Ideally, you'd want to fetch these values from the server.
// But I didn't feel like parsing the HTML headers so I'll
// just hardcode them for now.
const TOTAL_PAGES = 417
const MAX_ITEMS = 12

class Photos extends React.Component {
  state = {photos: []}

  render () {
    const photos = this.state.photos.map((photo) => (
      <Col xs={3} md={2} key={photo.id}>
        <Thumbnail href={photo.url} alt={photo.title} src={photo.thumbnailUrl}>
          <h4>{photo.title.split(' ')[0]}</h4>
        </Thumbnail>
      </Col>
    ))
    return (
      <PaginatedPage
        fetchUrl='https://jsonplaceholder.typicode.com/photos'
        fetchCallback={(json, page) => this.fetchCallback(json, page)}
        totalPages={TOTAL_PAGES}
        maxItems={MAX_ITEMS}
        currentUrl={'/photos/'}
        page={this.props.match.params.page}>
        <h2>Photos</h2>
        <Grid>
          <Row>
            {photos}
          </Row>
        </Grid>
      </PaginatedPage>
    )}

  fetchCallback(json, page) {
    this.setState({photos: json, page: page})
  }

}

export default Photos