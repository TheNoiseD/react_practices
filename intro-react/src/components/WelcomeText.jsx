import PropTypes from 'prop-types'
const WelcomeText = ({user}) => user ? <h2>Online</h2> : <h2>Offline</h2>

WelcomeText.propTypes = {
  user: PropTypes.bool.isRequired
}

export default WelcomeText;