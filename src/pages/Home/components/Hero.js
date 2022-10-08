import React from 'react'
import Art from '../../../Asset/images/art1.png'
import Lines from '../../../Asset/images/backline.png'
import Mash from '../../../Asset/images/lines.png'
import AuthButton from '../../../Components/AuthButton'

export const Hero = () => {
  return (
    <div className="flex">
      <div className="hero">
        <h3>
          Discover amazing art around the <span>world</span>
        </h3>
        <p>
          Browse a curated selection of art around the world, including museum
          exhibitions, gallery openings, upcoming and many more
        </p>
        <AuthButton text={'Explore arts'} className={'explore'} />
      </div>
      <div className="heroImg">
        <img className="art" src={Art} alt="" />
        <img className="mash" src={Mash} alt="" />
        <img className="lines" src={Lines} alt="" />
      </div>
    </div>
  )
}
