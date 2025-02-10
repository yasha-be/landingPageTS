interface HallOfFameProps {
  image: string;
  name: string;
  title: string;
  description: string;
}

const HallOfFame = ({ image, name, title, description }: HallOfFameProps) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      margin: '1rem'
    }}>
      <img 
        src={image}
        alt={name}
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '1rem'
        }}
      />
      <h2 style={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        margin: '0.5rem 0',
        color: 'black'
      }}>
        {name}
      </h2>
      <p style={{
        fontSize: '1.1rem',
        color: '#666',
        margin: 0
      }}>
        {title}
      </p>
      <p style={{
        fontSize: '1rem',
        color: '#666',
        margin: 0
      }}>
        {description}
      </p>
    </div>
  );
};

export default HallOfFame;
