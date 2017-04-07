import React from 'react';

//------------------------------------------------------
const Links = React.createClass({ // container component
  render: () => (
    <div>
      <LinkBox />
    </div>
        )
});

//--------------------------------------------------------
const LinkBox = React.createClass({ // link box div component
  render: () => {
    const boxStyles = {
      color: 'white',
      minWidth: 200,
      maxWidth: 400,
      display: 'block',
      background: 'rgba(15,15,15,.925)',
      overflowX: 'hidden',
      overflowY: 'auto',
      textAlign: 'left',
      textShadow: 'none',
      position: 'absolute',
      top: '100%'
    };

    const listStyles = {
      listStyleType: 'none',
      padding: 0
    };

    return (
      <div style={boxStyles}>
        <ul style={listStyles}>
          <li>
            <ChromeTab />
          </li>
          <li>
            <Apps />
          </li>
          <li>
            <LinkItem />
          </li>
          <li>
            <LinkItem />
          </li>
        </ul>
        <LinkInput />
      </div>
    );
  }
});
//------------------------------------------------------------

const LinkInput = React.createClass({ // input fields component
  render: () => {
    const inputStyles = {
      width: '100%',
      display: 'block',
      color: 'white',
      backgroundColor: 'black',
      background: '0 0',
      border: 'none',
      fontSize: '100%',
      opacity: 0.8,
      outline: 0
    };
    return (
      <div>
        <form>
          <input style={inputStyles} placeholder="Title" type="text" />
          <input style={inputStyles} placeholder="Address" type="text" />
        </form>
      </div>
    );
  }
});

//--------------------------------------------------------------------
const ChromeTab = React.createClass({
  render: () => {
    const tabStyles = {
      textDecoration: 'none',
      color: 'white'
    };
    return (
      <div>
        <a href="chrome-search://local-ntp/local-ntp.html" style={tabStyles}>Chrome Tab</a>
      </div>
    );
  }
});

//-------------------------------------------------------------------------
const Apps = React.createClass({
  render: () => {
    const appsStyles = {
      textDecoration: 'none',
      color: 'white'
    };
    return (
      <div>
        <a href="chrome://apps" id="app-return" style={appsStyles}><i />Apps</a>
      </div>
    );
  }
});

//--------------------------------------------------------------------------
const LinkItem = React.createClass({
  render: () => (
    <a>Link Title</a>
    )
});


export default Links;
