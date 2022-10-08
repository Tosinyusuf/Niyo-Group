import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '../layout'
import { Home, Collection, NotFound } from '../pages/index'

export const RouterConfig = () => {
  return (
    <Routes>
      {/* List of all public routes here */}

      <Route
        exact
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/single-collection/:id"
        element={
          <Layout>
            <Collection />
          </Layout>
        }
      />

      {/* List a generic 404-Not Found route here */}
      <Route
        path="*"
        element={
          <Layout>
            <NotFound />
          </Layout>
        }
      />
    </Routes>
  )
}
