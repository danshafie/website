import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Footer from '../components/footer'
import Modal from '../components/modal'

const WALK = 8

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.container = React.createRef()
    this.developer = React.createRef()
  }

  state = {
    hidden: 'open',
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ hidden: 'closed' })
    }, 3000)

    console.log('hey beautiful, thanks for visiting')
  }

  handleMouseMove = e => {
    const { offsetWidth: width, offsetHeight: height } = this.container.current
    let { offsetX: x, offsetY: y } = e.nativeEvent
    if (this.container.current !== e.target) {
      x = x + e.target.offsetLeft
      y = y + e.target.offsetTop
    }

    const xwalk = Math.round((x / width) * WALK - WALK / 2)

    const ywalk = Math.round((y / height) * WALK - WALK / 2)

    this.developer.current.style.textShadow = `${xwalk}px ${ywalk}px red`
  }

  render() {
    const { hidden } = this.state
    return (
      <Layout>
        <div
          className="container"
          ref={this.container}
          onMouseMove={this.handleMouseMove}
        >
          <div className="circle">
            <p className="name">Dan Shafie</p>
            <p className="developer" ref={this.developer}>
              developer
            </p>
          </div>
          <Footer />
        </div>
        <Modal hidden={hidden} />
      </Layout>
    )
  }
}

export default IndexPage
