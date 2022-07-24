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

const ListCards: FC<Props> = () => {
  const [state, setState] = useState<State>({
    lists: [
      {
        name: 'Shopping List',
        items: [
          {
            name: "Test",
          },
        ]
      },
      {
        name: 'Another list',
        items: [
          {
            name: "List item 1",
          },
          {
            name: "List item 2"
          },
          {
            name: "List item 3"
          },
          {
            name: "List item 4"
          }
        ]
      },
    ]
  });

  return (
    <Container sx={{ marginTop: '2rem' }}>
      <Box sx={{ flexGrow: 1 }}>
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
    </Container>
  )
}

export default ListCards;
