import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function DetailCard() {
    const navigate = useNavigate()
  return (
    <div onClick={()=>navigate('/addetail')}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.olx.com.pk/thumbnails/408006277-800x600.webp" />
      <Card.Body>
        <Card.Title>Rs 3,985,000</Card.Title>
        <Card.Text>
        Honda Brv
        </Card.Text>
        <Card.Text>
        Multan,Punjab
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default DetailCard;