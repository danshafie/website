import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import Footer from '../components/footer'
import Modal from '../components/modal'
// const IndexPage = () => (
//   <Layout>
//     <div className="container">
//       <div className="circle">developer</div>
//       <Footer />
//     </div>
//   </Layout>
// )

class IndexPage extends React.Component {
  state = {
    hidden: 'open',
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ hidden: 'closed' })
    }, 3000)

    console.log('hey beautiful, thanks for visiting')
  }
  render() {
    const { hidden } = this.state
    return (
      <Layout>
        <div className="container">
          <div className="circle">
            <p className="name">Dan Shafie</p>
            <p className="developer">developer</p>
          </div>
          <Footer />
        </div>
        <Modal hidden={hidden} />
      </Layout>
    )
  }
}

export default IndexPage
