import axios from "axios";
import { useEffect, useState } from "react";
import { Grid, Image, Divider, Header, Loader } from "semantic-ui-react";
import Link from "next/link";

export default function ItemList() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  const getData = () => {
    axios.get(API_URL).then((res) => {
      setList(res.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader active>Loading</Loader>
      ) : (
        <>
          <Header>Hwa Jang Poom</Header>
          <Divider />
          <Grid columns={3} divided>
            <Grid.Row>
              {list &&
                list.map((item) => (
                  <Grid.Column key={item.id}>
                    <Link href={`/view/${item.id}`}>
                      <a>
                        <Image src={item.image_link} />
                        <strong>{item.brand}</strong>
                        <p>{item.name}</p>
                        <strong>${item.price}</strong>
                      </a>
                    </Link>
                  </Grid.Column>
                ))}
            </Grid.Row>
          </Grid>
        </>
      )}
    </>
  );
}
