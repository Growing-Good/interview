import { Container, Typography, Box } from '@mui/material'
import ProductList from '../components/ProductList'
import Cart from '../components/Card'

export default function Home() {
  return (
    <Container maxWidth='lg'>
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant='h4' component='h1' gutterBottom>
          Let's go!
        </Typography>
        <ProductList />
        <Cart />
      </Box>
    </Container>
  )
}
