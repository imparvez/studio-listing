import React from 'react';

import { StudioDetailState } from '../../interface'


const StudioDetail: React.FC<StudioDetailState> = ({ detail, loading, error }) => {
  if(loading) {
    return <div>Loading....</div>
}

if(error) {
  return <div>Error....</div>
}

  return (
    <div>
      <h1>{detail?.title}</h1>
      <p>{detail?.plot}</p>
      <img src={detail?.poster} alt={detail?.title} />
    </div>
  )
}

export { StudioDetail }