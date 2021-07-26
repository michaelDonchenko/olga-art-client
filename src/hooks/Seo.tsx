import { Helmet } from 'react-helmet'

interface Props {
  title?: string
  name?: string
  content?: string
}

const Seo = ({ title, name, content }: Props) => {
  return (
    <div>
      <Helmet>
        <title>{`${title || 'Page Title'} | Olga Jewelry`}</title>
        <meta name={name || 'Page name'} content={content || 'Content'} />
      </Helmet>
    </div>
  )
}

export default Seo
