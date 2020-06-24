import React from 'react'

import { LoadingViewContainer } from './styledComponents'
import Loader from '../../../../components/common/Icons/Loader'

class LoadingView extends React.Component {
  render() {
    return (
      <LoadingViewContainer>
        <Loader />
      </LoadingViewContainer>
    )
  }
}

export default LoadingView
