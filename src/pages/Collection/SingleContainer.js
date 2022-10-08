import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AuthButton from '../../Components/AuthButton'
import Loading from '../../Components/Widget/Loading'
import Error from '../../Components/Widget/Error'
import { LinkRoute } from '../../Components/LinkRoute'
import { useDispatch, useSelector } from 'react-redux'
import arrow from '../../Asset/images/Arrow 3.png'
import share from '../../Asset/images/share.png'
import ellipse from '../../Asset/images/Ellipse 1.png'
import line from '../../Asset/images/backline.png'
import { fetchSingleCollection } from '../../Redux/actions/Collections'

export const SingleContainer = () => {
  const singleCollection = useSelector(
    (state) => state.collections.singleCollection,
  )
  const loading = useSelector((state) => state.loadingReducer)
  const error = useSelector((state) => state.errorReducer)

  // gets the url id
  const dispatch = useDispatch()
  let { id } = useParams()

  useEffect(() => {
    dispatch(fetchSingleCollection(id))
  }, [dispatch, id])

  // constant key to render images
  const ConstantImg = singleCollection?.config?.iiif_url
  return (
    <div className="SingleArtContainer">
      <div className="flexArt">
        <LinkRoute to="/" className="">
          <img src={arrow} alt={arrow} />
        </LinkRoute>
        <div className="">
          <img src={share} alt={share} />
        </div>
      </div>
      {loading === true && error === '' ? (
        <Loading />
      ) : error !== '' ? (
        <Error errorMsg={error} />
      ) : (
        <div className="container">
          <div className="singleFlex">
            <div className="singleImgDiv">
              <img
                className="singleImg"
                src={`${ConstantImg}/${singleCollection?.data?.image_id}/full/843,/0/default.jpg`}
                width={singleCollection?.data?.width}
                height={singleCollection?.data?.height}
                alt="art"
              />
            </div>
            <div>
              <h3 className="singleTitle">{singleCollection?.data?.title}</h3>
              <p className="singleDesc">
                {singleCollection?.data?.publication_history}
              </p>
              <div className="authBtn FooterBtn">
                <AuthButton text={'Explore arts'} className={'explore'} />
                <AuthButton text={'Explore arts'} className={'darkArt'} />
              </div>
            </div>
          </div>
          <div className="ellipse">
            <img className="ellipse" src={ellipse} alt={arrow} />
          </div>
          <div className="singleLine">
            <img className="singleLine" src={line} alt={line} />
          </div>
        </div>
      )}
    </div>
  )
}
