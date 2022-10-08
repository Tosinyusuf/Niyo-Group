import React from 'react'
import { Hero } from './components/Hero'
import { ArtCollection } from './components/Collection'
import { Provider } from "react-redux";
import { store } from "../../Redux/store";

export const HomeContainer = () => {
  return (
    <Provider store={store}>
      <Hero />
      <ArtCollection />
    </Provider>
  )
}
