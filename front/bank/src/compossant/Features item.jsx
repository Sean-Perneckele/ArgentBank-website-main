import '../designs/css/main.css'

function FeaturesItem({image, titre, contenu }) {
    return(
        <div className="feature-item">
        <img src={image} alt="Chat Icon" className="feature-icon" />
        <h3 className="feature-item-title">{titre }</h3>
        <p>
          {contenu}
        </p>
      </div>
    )
}

export default FeaturesItem

