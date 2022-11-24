import * as React from "react";
import { Component } from "react";
import { Card, CardMedia, CardContent } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: [
        {
          id: 0,
          name: "Uthappizza",
          image: "assets/images/uthappizza.png",
          category: "mains",
          label: "Hot",
          price: "4.99",
          description:
            "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
        },
        {
          id: 1,
          name: "Zucchipakoda",
          image: "assets/images/zucchipakoda.png",
          category: "appetizer",
          label: "",
          price: "1.99",
          description:
            "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce",
        },
        {
          id: 2,
          name: "Vadonut",
          image: "assets/images/vadonut.png",
          category: "appetizer",
          label: "New",
          price: "1.99",
          description:
            "A quintessential ConFusion experience, is it a vada or is it a donut?",
        },
        {
          id: 3,
          name: "ElaiCheese Cake",
          image: "assets/images/elaicheesecake.png",
          category: "dessert",
          label: "",
          price: "2.99",
          description:
            "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms",
        },
      ],
    };
  }
  render() {
    const menu = this.state.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 mt-5">
          <Card
            sx={{
              width: 5 / 6,
              display: "flex",
              margin: "auto",
              marginBottom: "5px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: "2%",
              }}
              my={2}
              md={2}
            >
              <CardMedia
                image={dish.image}
                component="img"
                height="100"
                sx={{ width: 100 }}
                alt={dish.name}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "baseline" }}>
              <CardContent>
                <Typography variant="h6" align="left">
                  {dish.name}
                </Typography>
                <Typography component="p" align="left">
                  {dish.description}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </div>
      );
    });
    return (
      <div>
        <div className="container">
          <div className="row">{menu}</div>
        </div>
      </div>
    );
  }
}

export default Menu;
