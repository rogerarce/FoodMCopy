import { PropTypes } from 'prop-types'
import ProductListing from './productlisting'

ProductListing.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    prep_time: PropTypes.string.isRequired,
  }))
}

export default ProductListing
