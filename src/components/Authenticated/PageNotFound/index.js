import React from 'react'
import { Container } from 'components/Authenticated/styled';

const PageNotFound = ({ location }) => (
  <Container>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </Container>
)
export default PageNotFound
