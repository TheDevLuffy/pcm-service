import { Card, Container, Row, Text } from "@nextui-org/react";
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Container>
      <Card color="primary">
        <Row justify="center" align="center">
          <Text h6 size={15} color="white" css={{ m: 0 }}>
            NextUI gives you the best developer experience with all the features
            you need for building beautiful and modern websites and
            applications.
          </Text>
        </Row>
      </Card>
    </Container>
  )
}

export default Home
