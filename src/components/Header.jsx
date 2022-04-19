import PropTypes from 'prop-types'

function Header({ spanText, text, bgColor, spanColor, textColor }) {
  // styles
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }

  const linkHeaderStyles = {
    color: textColor,
    textDecoration: 'none',
  }

  const spanStyles = {
    color: spanColor,
  }


  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>
          <a href="/" style={linkHeaderStyles}>
            <span style={spanStyles}>{spanText}</span>{text}
          </a>
        </h2>
      </div>
    </header>
  )
}

// define default props
Header.defaultProps = {
  spanText: 'Feed',
  text: 'back',
  bgColor: '#0c0c16',
  spanColor: '#f4f4f4',
  textColor: '#ff6a95',
}

// define type of props 
Header.propTypes = {
  text: PropTypes.string.isRequired
}

export default Header