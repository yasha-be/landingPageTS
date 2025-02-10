interface LogoProps {
  src: string;
  alt?: string;
  size?: number;
  href?: string;
}

const Logo = ({ src, alt = 'logo', size = 200, href = 'https://github.com/yasha-be' }: LogoProps) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
      }}
    >
      <a href={href}>
        <img
          src={src}
          alt={alt}
          style={{
            width: size,
            height: size,
            objectFit: 'contain'
          }}
          className="logo"
        />
      </a>
    </div>
  );
};

export default Logo;
