import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

import { ActivityIndicator, Wrapper } from './styles'

const Loading = ({ loading }) => {
  if (!loading) {
    return null
  }

  return (
    <Wrapper>
      <ActivityIndicator animating={true} color="#000000" />
    </Wrapper>
  )
}

const mapStateToProps = (state) => ({ loading: state.loading })
Loading.propTypes = { loading: PropTypes.bool }

export default connect(mapStateToProps, null)(Loading)
