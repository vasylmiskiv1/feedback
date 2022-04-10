import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor }) {
  // styled
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  )
}

// define default props
Header.defaultProps = {
  text: 'Feedback',
  bgColor: '#0c0c16',
  textColor: '#ff6a95',
}

// define type of props 
Header.propTypes = {
  text: PropTypes.string.isRequired
}

export default Header