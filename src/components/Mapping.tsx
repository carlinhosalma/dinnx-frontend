import { Button, makeStyles, Grid, Menu, MenuItem, Select } from "@material-ui/core";
import { Loader } from "google-maps";
import { FormEvent, useCallback, useEffect, useRef,FunctionComponent, useState } from "react";
import { getCurrentPosition }  from "../util/geolocation";
import { makeCarIcon, makeMarkerIcon, Map } from "../util/map";

import { sample, shuffle } from "lodash";
import { Route } from "../util/models";
import { RouteExistsError } from "../errors/route-exists.error";


const API_URL = process.env.REACT_APP_API_URL;
const googleMapsLoader = new Loader(process.env.REACT_APP_GOOGLE_API_KEY);

const colors = [
  "#b71c1c",
  "#4a148c",
  "#2e7d32",
  "#e65100",
  "#2962ff",
  "#c2185b",
  "#FFCD00",
  "#3e2723",
  "#03a9f4",
  "#827717",
];

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
  },
  form: {
    margin: "16px",
  },
  btnSubmitWrapper: {
    textAlign: "center",
    marginTop: "8px",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export const Mapping: FunctionComponent = () => {
  const [routes, setRoutes] = useState<Route[]>([]);
  const [routeIdSelected, setRouteIdSelected] = useState<string>("");
  const mapRef = useRef<Map>();

  useEffect(() => {
    //recebe informação das localizações
    fetch(`${API_URL}/routes`)
      .then((data) => data.json())
      .then((data) => setRoutes(data));

        // initialRegion={{
        //   latitude: -15.67991,
        //   longitude: -48.19456,
        //   latitudeDelta: 0.0922,
        //   longitudeDelta: 0.0421,
        // }}
      
     
  }, []);

  //Pegar a posição atual e jogar no mapa
  useEffect(() => {
    (async () => {
      const [, position] = await Promise.all([
        googleMapsLoader.load(),
        getCurrentPosition({ enableHighAccuracy: true }),
      ]);
      const divMap = document.getElementById("map") as HTMLElement;
      mapRef.current = new Map(divMap, {
        zoom: 15,
        center: position,
        //center :  {lat: -34.397, lng: 150.644}
      });
    })();
  }, []);

  const startRoute = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      const route = routes.find((route) => route._id === routeIdSelected);
      const color = sample(shuffle(colors)) as string;

      try {
        mapRef.current?.addRoute(routeIdSelected, {
          currentMarkerOptions: {
            position: route?.startPosition,
            icon: makeCarIcon(color),
          },
          endMarkerOptions: {
            position: route?.endPosition,
            icon: makeMarkerIcon(color),
          },
        });
       // socketIORef.current?.emit("new-direction", {
       //   routeId: routeIdSelected,
       // });
      } catch (error) {
        if (error instanceof RouteExistsError) {
         
          return;
          
        }
        throw error;
      }
    },
    [routeIdSelected, routes]
  );

  return (
    <Grid container style={{ width: "100%", height: "100vh" }}>
      <Grid item xs={12} sm={3}>
        <form onSubmit={startRoute}>
          <Select
            fullWidth
            displayEmpty
            value={routeIdSelected}
            onChange={(event) => setRouteIdSelected(event.target.value + "")}
          >
            <MenuItem value="">
              <em>Selecione uma corrida</em>
            </MenuItem>
            {routes.map((route, key) => (
              <MenuItem key={key} value={route._id}>
                {route.title}
              </MenuItem>
            ))}
          </Select>
          <Button type="submit" color="primary" variant="contained">
            Iniciar uma corrida
          </Button>
        </form>
      </Grid>
      <Grid item xs={12} sm={9}>
        <div id="map" style={{ width: "100%", height: "100vh" }}    ></div>
      </Grid>
    </Grid>
  );
};
