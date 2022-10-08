import React from 'react'
import { LinkRoute } from '../../../Components/LinkRoute'

export const Gallery = ({ collection, ConstantImg }) => {
  return (
    <>
      <div className="card" >
        <LinkRoute to={`single-collection/${collection?.id}`}>
          <div>
            <img
              src={`${ConstantImg}/${collection?.image_id}/full/843,/0/default.jpg`}
              width={collection?.width}
              height={collection?.height}
              alt={collection?.alt_text}
            />
          </div>
        </LinkRoute>
        <div className="card_footer">
          <h3 className="cardTitle" data-testid="displaySearch">{collection?.title}</h3>
          <small>
            <span className="cardDescription">{collection?.title}</span>
          </small>
        </div>
      </div>
    </>
  )
}
