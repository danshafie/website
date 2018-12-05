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
  render() {
    return (
      <Layout>
        <div className="container">
          <div className="circle">developer</div>
          <Footer />
        </div>
        <Modal />
      </Layout>
    )
  }
}

export default IndexPage
