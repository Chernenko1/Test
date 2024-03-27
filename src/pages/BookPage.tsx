import { useParams } from 'react-router-dom'

export const BookPage = () => {
  const { id } = useParams()
  return (
    <div>
      <p>{id}</p>
    </div>
  )
}
