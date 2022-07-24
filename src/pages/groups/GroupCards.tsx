import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchGroupsAsync, selectFetchGroupsLoading, selectGroups } from "../../components/groups/GroupSlice";

interface Props {}

const GroupCards: FC<Props> = () => {
  const dispatch = useAppDispatch();
  const groups = useAppSelector(selectGroups);
  const fetchGroupsLoading = useAppSelector(selectFetchGroupsLoading);

  useEffect(() => {
    if (fetchGroupsLoading) {
      dispatch(fetchGroupsAsync());
    }
  })

  return (
    <Container sx={{ marginTop: '2rem' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
        >
          {groups.map((group, key) => (
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
                      >{group.name}</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

export default GroupCards;
