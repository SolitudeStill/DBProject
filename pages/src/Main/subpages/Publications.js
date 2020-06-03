import React from "react";
import {
  Box,
  Grid,
  List,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  ListItem,
  Paper,
  makeStyles,
} from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams,
  Link,
} from "react-router-dom";

const useStyles = makeStyles({
  clearAStyle: {
    "&:link, &:visited, &:hover, &:active": {
      textDecoration: "none",
      color: "inherit",
    },
  },
});
export default function Publications() {
  const dataList = [
    {
      Id: 0,
      Title: "title1",
      Remark:
        "asodfjiasdfoahjsdofihaosidfhoiahsdofihoaisdhfioahsodifhoiahsdfoih",
      SubmitTime: 1591155637000,
      Status: 0,
    },
  ];
  const statusText = {
    "-1": "被打回",
    0: "审核中",
    1: "已通过",
  };
  const statusColor = {
    "-1": "error.main",
    0: "info.main",
    1: "success.main",
  };
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item lg={10} xs={12}>
        <List>
          {dataList.map((v) => (
            <ListItem key={v.Id}>
              <Card style={{ width: "100%" }}>
                <Link className={classes.clearAStyle} to={`/view/${v.Id}`}>
                  <CardActionArea>
                    <CardMedia />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {v.Title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {v.Remark}
                      </Typography>
                      <Grid container justify="space-between">
                        <Typography variant="caption">
                          {new Date(v.SubmitTime).toDateString()}
                        </Typography>
                        <Typography variant="caption">
                          <Box color={statusColor[v.Status]} component="span">
                            {statusText[v.Status]}
                          </Box>
                        </Typography>
                      </Grid>
                    </CardContent>
                  </CardActionArea>
                  {/*  */}
                </Link>
              </Card>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}
