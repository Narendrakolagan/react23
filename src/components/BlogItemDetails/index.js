import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogsData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    this.setState({blogsData: updatedData, isLoading: false})
  }

  render() {
    const {blogsData} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogsData
    const {isLoading} = this.state

    return isLoading ? (
      <div data-test="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      <div>
        <h1>{title}</h1>
        <div className="avatar-container">
          <img className="avatar-img" src={avatarUrl} alt="avatar" />
          <p className="author">{author}</p>
        </div>
        <img className="blog-img" src={imageUrl} alt={title} />
        <p>{content}</p>
      </div>
    )
  }
}
export default BlogItemDetails
