import React from 'react'
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap'
import { observer } from 'mobx-react'

import PaginatedPage from '../PaginatedPage'
import PaginationStore from '../../stores/PaginationStore'
import lang from '../../stores/LanguageStore'

const MAX_ITEMS = 12

@observer
class Photos extends React.Component {
  render () {
    const photos = PaginationStore.content.map((photo) => (
      <Col xs={3} md={2} key={photo.id}>
        <Thumbnail href={photo.url} alt={photo.title} src={photo.thumbnailUrl}>
          <h4>{photo.title.split(' ')[0]}</h4>
        </Thumbnail>
      </Col>
    ))
    return (
      <PaginatedPage currentUrl={'/photos/'}>
        <h2>{lang.text('topMenu', 'photos')}</h2>
        <Grid>
          <Row>
            {photos}
          </Row>
        </Grid>
      </PaginatedPage>
    )}

  componentWillMount() {
    PaginationStore.maxItems = MAX_ITEMS
    PaginationStore.url = 'https://jsonplaceholder.typicode.com/photos'
  }

}

export default Photos