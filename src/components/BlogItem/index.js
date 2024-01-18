// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate, id} = blogDetails
  const lastItemClassName = id === 5 ? 'last-item' : ''
  return (
    <li className={`blog-item ${lastItemClassName}`}>
      <div className="blog-title-date-container">
        <h1 className="blog-title">{title}</h1>
        <p className="published-date">{publishedDate}</p>
      </div>
      <p className="blog-desc">{description}</p>
    </li>
  )
}

export default BlogItem
