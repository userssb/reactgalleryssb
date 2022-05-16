import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, setActiveThumbnailId} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails

  const onClickThumbnail = () => {
    setActiveThumbnailId(id)
  }

  const thumbnailClassName = isActive ? 'thumb-image active' : 'thumb-image'

  return (
    <li>
      <button
        type="button"
        className={thumbnailClassName}
        onClick={onClickThumbnail}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="thumb-image"
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
