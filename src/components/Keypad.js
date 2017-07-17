import React from 'react'

class Keypad extends React.Component {

  entry = () => console.log('Entering password...')


  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.entry}/>
      </div>
    )
  }
}

export default Keypad
