import PropTypes from 'prop-types'

function Header({ spanText, text, bgColor, spanColor, textColor }) {
  // styled
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }

  const spanStyles = {
    color: spanColor,
  }

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2><span style={spanStyles}>{spanText}</span>{text}</h2>
      </div>
    </header>
  )
}

// define default props
Header.defaultProps = {
  spanText: 'Feed',
  text: 'back',
  bgColor: '#0c0c16',
  spanColor: '#c0c0c0',
  textColor: '#ff6a95',
}

// define type of props 
Header.propTypes = {
  text: PropTypes.string.isRequired
}

export default Header