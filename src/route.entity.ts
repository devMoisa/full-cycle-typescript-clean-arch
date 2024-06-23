export type LatLng = { lat: number; lng: number };

export type RouteProps = {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[];
};

export class Route {
  public props: Required<RouteProps>;
  constructor(props: RouteProps) {
    this.props = {
      ...props,
      points: props.points || [],
    };
  }

  updateTitle(title: string) {
    this.title = title; // Using the setter \/
    //Aqui neste método, poderiamos implementar regras de negócios como...
    //Transformar para maiusculo.
    // Aplicar validações etc...
  }

  updatePosition(startPosition: LatLng, endPosition: LatLng) {
    this.startPosition = startPosition;
    this.endPosition = endPosition;
  }

  public get title() {
    return this.props.title;
  }

  private set title(value: string) {
    this.props.title = value;
  }

  public get startPosition() {
    return this.props.startPosition;
  }

  private set startPosition(value: LatLng) {
    this.props.startPosition = value;
  }

  public get endPosition() {
    return this.props.endPosition;
  }

  private set endPosition(value: LatLng) {
    this.props.endPosition = value;
  }
}
