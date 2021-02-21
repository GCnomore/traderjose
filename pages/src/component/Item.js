import { Loader } from "semantic-ui-react";

export default function Item({ item }) {
  if (item) {
    return (
      <div>
        <p>Item#: {item.id}</p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <div>
            <img src={item.image_link} />
          </div>

          <div style={{ width: "50rem" }}>
            <h2 style={{ margin: 0 }}>{item.brand.toUpperCase()}</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingRight: "3rem",
              }}
            >
              <h1 style={{ margin: 0 }}>{item.name}</h1>
              <h3 style={{ margin: 0, alignSelf: "flex-end" }}>
                ${item.price}
              </h3>
            </div>
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
