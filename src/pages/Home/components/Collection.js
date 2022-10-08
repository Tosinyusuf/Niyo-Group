import React, { useState } from 'react'
import { sortBySearch } from '../../../Redux/actions/SortAction'
import { useDispatch, useSelector } from 'react-redux'
import searchIcon from '../../../Asset/images/search.png'
import Loading from '../../../Components/Widget/Loading'
import Error from '../../../Components/Widget/Error'
import Lines from '../../../Asset/images/line2.png'
import AuthButton from '../../../Components/AuthButton'
import NotFound from '../../../Components/Widget/NotFound'
import { Gallery } from './Gallery'

export const ArtCollection = () => {
  const collections = useSelector((state) => state.collections.allCollections)
  const searchedCollections = useSelector(
    (state) => state.collections.searchedCollections,
  )
  const loading = useSelector((state) => state.loadingReducer)
  const error = useSelector((state) => state.errorReducer)

  // filtered collections to be rendered
  const filteredCollections = collections?.data?.filter((collection) => {
    return (
      collection.title
        ?.toLowerCase()
        .indexOf(searchedCollections?.toLowerCase()) !== -1
    )
  });

  const [searchCollection, setSearchCollection] = useState('')
  const dispatch = useDispatch()

  // handle Sorting of collection with search
  const handleSearchCollection = (e) => {
    setSearchCollection(e.target.value)
    dispatch(sortBySearch(e.target.value))
  }

  // constant key to render images
  const ConstantImg = collections?.config?.iiif_url
  return (
    <div>
      <div className="galleryHeader">
        <div className="Content">
          <h4>Art in the collection</h4>
          <p>
            Browse a curated selection of art around the world, including museum
            exhibitions, gallery openings, upcoming and many more
          </p>
        </div>
        <div className="search">
          <img src={searchIcon} alt="searchicon" />
          <div>
            <input
              data-testid="search"
              type="text"
              placeholder="Search By Title"
              onChange={handleSearchCollection}
              value={searchCollection}
            />
          </div>
        </div>
      </div>
      {loading === true && error === '' ? (
        <Loading />
      ) : error !== '' ? (
        <Error errorMsg={error} />
      ) : (
        <div className="flex_between">
          {filteredCollections?.length > 0 ? (
            filteredCollections?.map((collection, index) => (
              <Gallery
              // test={data-testid}
                key={index}
                collection={collection}
                ConstantImg={ConstantImg}
              />
            ))
          ) : (
            <NotFound />
          )}
        </div>
      )}
      <div className="FooterDiv">
        <div>
          <img className="footerImg" src={Lines} alt={Lines} />
        </div>
        <div className="authDiv">
          <AuthButton text={'Explore arts'} className={'explore'} />
        </div>
      </div>
    </div>
  )
}
