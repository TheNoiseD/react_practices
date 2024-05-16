import PropTypes from 'prop-types'

const Button = ({text}) => {
    const handleClick = (title) => {
      console.log('click ' + title)
    }
    return <button onClick={() => handleClick(text)}>{ text }</button>
  }
  
  Button.propTypes = {
    text: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired,
  }

  export default Button;