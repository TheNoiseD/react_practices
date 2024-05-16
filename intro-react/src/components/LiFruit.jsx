import PropTypes from 'prop-types'
const LiFruit = ({frut}) => {
    return <li>{frut}</li>
  }
  
  LiFruit.propTypes = {
    frut: PropTypes.string.isRequired
  }

  export default LiFruit;