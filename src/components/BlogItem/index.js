import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogData} = props
  const {id, imageUrl, topic, avatarUrl, title, author} = blogData
  return (
    <Link to={`/blogs/${id}`}>
      <div className="item-container">
        <img src={imageUrl} className="item-image" alt={topic} />
        <div className="item-info">
          <p className="item-topic">{topic}</p>

          <h1 className="item-title">{title}</h1>
          <div className="author-info">
            <img className="avatar" src={avatarUrl} alt="avatar" />
            <p2 className="author-name">{author}</p2>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
