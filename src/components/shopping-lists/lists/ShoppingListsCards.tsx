import { Add } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, Chip, Container, Grid, IconButton, List as MuiList, ListItem, Typography } from "@mui/material";
import { FC, useState } from "react";
import CardListItems from "./CardListItems";

interface Props {}

export interface ListItem {
  name: string,
}

export type List = {
  name: string,
  items: Array<ListItem>
}

interface State {
  lists: List[]
}

const ShoppingListCards: FC<Props> = () => {
  const [state, setState] = useState<State>({
    lists: [
      {
        name: 'Spożywcze',
        items: [
          {
            name: "Mleko",
          },
          {
            name: "Chleb",
          },
        ]
      },
      {
        name: 'Inne',
        items: [
          {
            name: "Toster",
          },
          {
            name: "Żarówka"
          },
          {
            name: "Gra planszowa"
          },
          {
            name: "Kwiatek"
          }
        ]
      },
    ]
  });

  return (
    <Box sx={{ flexGrow: 1, marginTop: '2rem' }}>
      <Grid
        container
        spacing={2}
      >
        {state.lists.map((list, key) => (
          <Grid
            item key={key}
            lg={4} md={6} xs={12}
          >
            <Card
              elevation={1}
              sx={{ height: '100%' }}
            >
              <CardContent>
                <Grid
                  container
                  alignItems="center"
                >
                  <Grid item>
                    <Typography
                      variant="h5"
                    >{list.name}</Typography>
                  </Grid>
                  <Grid item marginLeft="auto">
                    <Chip label={list.items.length} color={"primary"} />
                  </Grid>
                </Grid>
              </CardContent>
              <MuiList>
                <CardListItems
                  items={list.items.splice(0, 3)}
                />
              </MuiList>
              <CardActions>
                <IconButton>
                  <Add />
                </IconButton>
                <Button>See more</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ShoppingListCards;
