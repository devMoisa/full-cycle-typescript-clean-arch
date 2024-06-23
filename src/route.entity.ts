type LatLng = { lat: number; lng: number };

export type RouteProps = {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[];
};

class Route {
  public props: Required<RouteProps>;
  constructor(props: RouteProps) {
    this.props = {
      ...props,
      points: props.points || [],
    };
  }

  set title(value: string) {
    this.props.title = value;
  }
}

const rota = new Route({
  title: "",
  startPosition: { lat: 10, lng: 20 },
  endPosition: { lat: 20, lng: 30 },
  points: [
    { lat: 20, lng: 30 },
    { lat: 40, lng: 50 },
  ],
});

rota.title = "Rua da penha";
