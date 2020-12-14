import Link from 'next/link'

export default function Btn({ primary, children, className, onClick, link, outboundLink, submit, disabled }) {
  return (
    <div style={{ display: 'flex' }}>
      {
        link &&
        <Link href={link}>
          <a
            style={{ margin: '0 auto' }}
            className={`btn ${primary && className && 'primary ' + className ||
              primary && 'primary' ||
              className && ' ' + className}`}
          >
            <span className="btnTxt">
              {children}
            </span>
          </a>
        </Link>
      }
      {
        onClick &&
        <button
          className={`btn ${primary && className && 'primary ' + className ||
            primary && 'primary' ||
            className && ' ' + className}`}
          onClick={onClick}
        >
          <span className="btnTxt">
            {children}
          </span>
        </button>
      }
      {
        outboundLink &&
        <a
          href={outboundLink}
          style={{ margin: '0 auto' }}
          className={`btn ${primary && className && 'primary ' + className ||
            primary && 'primary' ||
            className && ' ' + className}`}>

          <span className="btnTxt">
            {children}
          </span>
        </a>
      }
      {
        submit && !disabled &&
        <button
          type="submit"
          className={`btn ${primary && className && 'primary ' + className ||
            primary && 'primary' ||
            className && ' ' + className}`}
        >
          <span className="btnTxt">
            {children}
          </span>
        </button>
        || submit && disabled &&
        <button
          type="submit"
          className={`btn ${primary && className && 'primary ' + className ||
            primary && 'primary' ||
            className && ' ' + className}`}
          disabled
        >
          <span className="btnTxt">
            {children}
          </span>
        </button>
      }
    </div>
  )
}