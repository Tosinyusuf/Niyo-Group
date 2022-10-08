import React from 'react'
import { LinkRoute } from '../../Components/LinkRoute'

export const Notfound = () => {
  return (
    <div className="broken">
      <div>
        <h1>Error 404</h1>
        <p>Oops! Something is missing.</p>
        <p>We can’t find the page you’re looking for or the link is broken.</p>
        <LinkRoute to="/" className="btn btn-eze">
          Back to Homepage
        </LinkRoute>
      </div>
    </div>
  )
}
