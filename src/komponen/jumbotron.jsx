import Container from 'react-bootstrap/Container';

function Jumbotron () {
  return (
    <Container className='bg-danger text-center'>
        <img src='irul.jpg' className='rounded-circle img-thumbnail' />
        <h1>M Khoirul Basyar</h1>
        <p>junior frontend developer</p>
    </Container>
  );
}

export default Jumbotron;